import dotenv from "dotenv";

dotenv.config();

function required(name) {
    const value = process.env[name];

    if (!value) {
        return "";
    }

    return value;
}

function optional(name, fallback = "") {
    return process.env[name] || fallback;
}

function firstOptional(names, fallback = "") {
    for (const name of names) {
        if (process.env[name]) {
            return process.env[name];
        }
    }

    return fallback;
}

function parseOrigins(value) {
    return value
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean);
}

const defaultAllowedOrigins = [
    "http://127.0.0.1:5501",
    "http://localhost:5501",
    "https://vextron.pro",
    "https://www.vextron.pro",
];

export const config = {
    nodeEnv: optional("NODE_ENV", "development"),
    port: Number(optional("PORT", "8080")),
    allowedOrigins: Array.from(new Set([
        ...defaultAllowedOrigins,
        ...parseOrigins(optional("ALLOWED_ORIGINS")),
    ])),
    supabase: {
        url: required("SUPABASE_URL"),
        anonKey: required("SUPABASE_ANON_KEY"),
        serviceRoleKey: required("SUPABASE_SERVICE_ROLE_KEY"),
    },
    paddle: {
        environment: optional("PADDLE_ENVIRONMENT", "production"),
        apiKey: required("PADDLE_API_KEY"),
        webhookSecret: required("PADDLE_WEBHOOK_SECRET"),
        clientToken: firstOptional(["PADDLE_CLIENT_TOKEN", "PADDLE_CLIENT_SIDE_TOKEN"]),
        checkoutUrl: optional("PADDLE_CHECKOUT_URL", "https://vextron.pro/checkout.html"),
        paymentPageUrl: optional("PADDLE_PAYMENT_PAGE_URL", "https://vextron.pro/checkout.html"),
        prices: {
            basic: {
                monthly: required("PADDLE_PRICE_BASIC_MONTHLY"),
                yearly: required("PADDLE_PRICE_BASIC_YEARLY"),
            },
            pro: {
                monthly: required("PADDLE_PRICE_PRO_MONTHLY"),
                yearly: required("PADDLE_PRICE_PRO_YEARLY"),
            },
            elite: {
                monthly: required("PADDLE_PRICE_ELITE_MONTHLY"),
                yearly: required("PADDLE_PRICE_ELITE_YEARLY"),
            },
        },
    },
};

export function missingEnvironmentVariables() {
    const missing = [
        "SUPABASE_URL",
        "SUPABASE_ANON_KEY",
        "SUPABASE_SERVICE_ROLE_KEY",
        "PADDLE_API_KEY",
        "PADDLE_WEBHOOK_SECRET",
        "PADDLE_PRICE_BASIC_MONTHLY",
        "PADDLE_PRICE_PRO_MONTHLY",
        "PADDLE_PRICE_ELITE_MONTHLY",
        "PADDLE_PRICE_BASIC_YEARLY",
        "PADDLE_PRICE_PRO_YEARLY",
        "PADDLE_PRICE_ELITE_YEARLY",
    ].filter((name) => !process.env[name]);

    if (!process.env.PADDLE_CLIENT_TOKEN && !process.env.PADDLE_CLIENT_SIDE_TOKEN) {
        missing.push("PADDLE_CLIENT_TOKEN");
    }

    return missing;
}
