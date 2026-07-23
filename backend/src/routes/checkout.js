import express from "express";
import { requireUser } from "../middleware/auth.js";
import { config } from "../config.js";
import { createCheckoutTransaction } from "../services/paddle.js";
import { normalizeBillingPeriod, normalizePlan } from "../utils/plans.js";

export const checkoutRouter = express.Router();

checkoutRouter.get("/config", (req, res) => {
    if (!config.paddle.clientToken) {
        return res.status(503).json({ error: "Paddle client token is not configured." });
    }

    return res.json({
        environment: config.paddle.environment,
        clientToken: config.paddle.clientToken,
    });
});

checkoutRouter.post("/", requireUser, async (req, res) => {
    const plan = normalizePlan(req.body?.plan);
    const billingPeriod = normalizeBillingPeriod(req.body?.billingPeriod);

    if (!plan || !billingPeriod) {
        return res.status(400).json({ error: "Choose a valid plan and billing period." });
    }

    const priceId = config.paddle.prices[plan][billingPeriod];

    if (!priceId) {
        return res.status(503).json({ error: "Payment price is not configured for this plan." });
    }

    try {
        const checkout = await createCheckoutTransaction({
            user: req.user,
            plan,
            billingPeriod,
            priceId,
        });

        return res.status(201).json(checkout);
    } catch (error) {
        console.error("Paddle checkout failed:", error);
        return res.status(502).json({ error: "Unable to create Paddle checkout." });
    }
});
