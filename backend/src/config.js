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

function parseOrigins(value) {
    return value
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean);
}

export const config = {
    nodeEnv: optional("NODE_ENV", "development"),
    port: Number(optional("PORT", "8080")),
    allowedOrigins: parseOrigins(optional("ALLOWED_ORIGINS", "http://127.0.0.1:5501,http://localhost:5501,https://vextron.pro,https://www.vextron.pro")),
    supabase: {
        url: required("SUPABASE_URL"),
        anonKey: required("SUPABASE_ANON_KEY"),
        serviceRoleKey: required("SUPABASE_SERVICE_ROLE_KEY"),
    },
    paddle: {
        environment: optional("PADDLE_ENVIRONMENT", "production"),
        apiKey: required("PADDLE_API_KEY"),
        webhookSecret: required("PADDLE_WEBHOOK_SECRET"),
        checkoutUrl: optional("PADDLE_CHECKOUT_URL", "https://vextron.pro/customer-dashboard/"),
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
    return [
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
}
