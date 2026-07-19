import express from "express";
import { applyPaddleEvent } from "../services/subscriptions.js";
import { unmarshalPaddleWebhook } from "../services/paddle.js";

export const paddleWebhookRouter = express.Router();

paddleWebhookRouter.post(
    "/",
    express.raw({ type: "application/json" }),
    async (req, res) => {
        const signature = req.get("paddle-signature") || "";
        const rawBody = Buffer.isBuffer(req.body) ? req.body.toString("utf8") : "";

        if (!signature || !rawBody) {
            return res.status(400).json({ error: "Missing Paddle signature or body." });
        }

        try {
            const event = await unmarshalPaddleWebhook(rawBody, signature);
            const result = await applyPaddleEvent(event);

            return res.json({ ok: true, result });
        } catch (error) {
            console.error("Paddle webhook rejected:", error);
            return res.status(401).json({ error: "Invalid Paddle webhook." });
        }
    }
);
