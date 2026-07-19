import express from "express";
import { requireUser } from "../middleware/auth.js";
import { supabaseAdmin } from "../supabase.js";

export const profileRouter = express.Router();

profileRouter.get("/", requireUser, async (req, res) => {
    const { data, error } = await supabaseAdmin
        .from("profiles")
        .select("id,email,full_name,selected_plan,role,created_at,updated_at")
        .eq("id", req.user.id)
        .single();

    if (error) {
        return res.status(500).json({ error: "Unable to load profile." });
    }

    return res.json({ profile: data });
});
