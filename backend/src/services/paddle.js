import { Environment, Paddle } from "@paddle/paddle-node-sdk";
import { config } from "../config.js";

const environment = config.paddle.environment === "sandbox"
    ? Environment.sandbox
    : Environment.production;

let paddleClient = null;

function getPaddleClient() {
    if (!config.paddle.apiKey) {
        throw new Error("PADDLE_API_KEY is not configured.");
    }

    if (!paddleClient) {
        paddleClient = new Paddle(config.paddle.apiKey, {
            environment,
        });
    }

    return paddleClient;
}

export async function createCheckoutTransaction({ user, plan, billingPeriod, priceId }) {
    const transaction = await getPaddleClient().transactions.create({
        items: [
            {
                priceId,
                quantity: 1,
            },
        ],
        customData: {
            supabase_user_id: user.id,
            email: user.email,
            plan,
            billing_period: billingPeriod,
        },
        checkout: {
            url: config.paddle.checkoutUrl,
        },
    });

    return {
        transactionId: transaction.id,
        checkoutUrl: transaction.checkout?.url || null,
    };
}

export async function unmarshalPaddleWebhook(rawBody, signature) {
    if (!config.paddle.webhookSecret) {
        throw new Error("PADDLE_WEBHOOK_SECRET is not configured.");
    }

    return getPaddleClient().webhooks.unmarshal(
        rawBody,
        config.paddle.webhookSecret,
        signature
    );
}
