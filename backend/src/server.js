import cors from "cors";
import express from "express";
import helmet from "helmet";
import { config } from "./config.js";
import { checkoutRouter } from "./routes/checkout.js";
import { healthRouter } from "./routes/health.js";
import { paddleWebhookRouter } from "./routes/paddle-webhooks.js";
import { profileRouter } from "./routes/profile.js";

const app = express();

app.set("trust proxy", 1);
app.use(helmet());
app.use(cors({
    origin(origin, callback) {
        if (!origin || config.allowedOrigins.includes(origin)) {
            callback(null, true);
            return;
        }

        callback(new Error(`Origin not allowed: ${origin}`));
    },
}));

app.use("/api/paddle/webhook", paddleWebhookRouter);
app.use(express.json({ limit: "1mb" }));

app.use("/api/health", healthRouter);
app.use("/api/profile", profileRouter);
app.use("/api/checkout", checkoutRouter);

app.use((req, res) => {
    res.status(404).json({ error: "Route not found." });
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
});

app.listen(config.port, () => {
    console.log(`VEXTRON backend listening on port ${config.port}`);
});
