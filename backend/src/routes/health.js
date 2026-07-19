import express from "express";
import { missingEnvironmentVariables } from "../config.js";

export const healthRouter = express.Router();

healthRouter.get("/", (req, res) => {
    const missingEnv = missingEnvironmentVariables();

    res.json({
        ok: true,
        service: "vextron-backend",
        configured: missingEnv.length === 0,
        missingEnv,
        timestamp: new Date().toISOString(),
    });
});
