import { Environment, Paddle } from "@paddle/paddle-node-sdk";
import { config } from "../config.js";

const environment = config.paddle.environment === "sandbox"
    ? Environment.sandbox
    : Environment.production;

export const paddle = new Paddle(config.paddle.apiKey, {
    environment,
});

export async function createCheckoutTransaction({ user, plan, billingPeriod, priceId }) {
    const transaction = await paddle.transactions.create({
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
    return paddle.webhooks.unmarshal(
        rawBody,
        config.paddle.webhookSecret,
        signature
    );
}
