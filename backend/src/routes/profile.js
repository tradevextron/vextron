import express from "express";
import { requireUser } from "../middleware/auth.js";
import { supabaseAdmin } from "../supabase.js";

export const profileRouter = express.Router();

profileRouter.get("/", requireUser, async (req, res) => {
    if (!supabaseAdmin) {
        return res.status(503).json({ error: "Supabase service credentials are not configured." });
    }

    const { data: profile, error } = await supabaseAdmin
        .from("profiles")
        .select("id,email,full_name,selected_plan,role,created_at,updated_at")
        .eq("id", req.user.id)
        .single();

    if (error) {
        return res.status(500).json({ error: "Unable to load profile." });
    }

    const { data: subscription, error: subscriptionError } = await supabaseAdmin
        .from("subscriptions")
        .select("plan,billing_period,status,paddle_subscription_id,paddle_transaction_id,updated_at")
        .eq("user_id", req.user.id)
        .maybeSingle();

    if (subscriptionError) {
        return res.status(500).json({ error: "Unable to load subscription." });
    }

    return res.json({ profile, subscription });
});
