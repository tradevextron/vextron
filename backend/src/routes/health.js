import express from "express";

export const healthRouter = express.Router();

healthRouter.get("/", (req, res) => {
    res.json({
        ok: true,
        service: "vextron-backend",
        timestamp: new Date().toISOString(),
    });
});
