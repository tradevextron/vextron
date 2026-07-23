import express from "express";
import { requireUser } from "../middleware/auth.js";
import { supabaseAdmin } from "../supabase.js";

export const profileRouter = express.Router();

profileRouter.get("/", requireUser, async (req, res) => {
    if (!supabaseAdmin) {
        return res.status(503).json({ error: "Supabase service credentials are not configured." });
    }

    let { data: profile, error } = await supabaseAdmin
        .from("profiles")
        .select("id,email,full_name,selected_plan,selected_billing_period,role,created_at,updated_at")
        .eq("id", req.user.id)
        .maybeSingle();

    if (error?.code === "42703" || error?.message?.includes("selected_billing_period")) {
        const fallbackResult = await supabaseAdmin
            .from("profiles")
            .select("id,email,full_name,selected_plan,role,created_at,updated_at")
            .eq("id", req.user.id)
            .maybeSingle();

        profile = fallbackResult.data
            ? {
                ...fallbackResult.data,
                selected_billing_period: req.user.user_metadata?.selected_billing_period || "monthly",
            }
            : null;
        error = fallbackResult.error;
    }

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

    const metadata = req.user.user_metadata || {};
    const resolvedProfile = profile || {
        id: req.user.id,
        email: req.user.email,
        full_name: metadata.full_name || null,
        selected_plan: metadata.selected_plan || metadata.plan || "none",
        selected_billing_period: metadata.selected_billing_period || metadata.billing_period || "monthly",
        role: "member",
        created_at: req.user.created_at || null,
        updated_at: req.user.updated_at || null,
    };

    return res.json({ profile: resolvedProfile, subscription });
});
