import { supabaseAdmin } from "../supabase.js";

export async function requireUser(req, res, next) {
    if (!supabaseAdmin) {
        return res.status(503).json({ error: "Supabase service credentials are not configured." });
    }

    const authHeader = req.get("authorization") || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

    if (!token) {
        return res.status(401).json({ error: "Missing bearer token." });
    }

    const { data, error } = await supabaseAdmin.auth.getUser(token);

    if (error || !data?.user) {
        return res.status(401).json({ error: "Invalid or expired session." });
    }

    req.user = data.user;
    return next();
}
