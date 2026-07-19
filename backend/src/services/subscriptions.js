import { supabaseAdmin } from "../supabase.js";
import { config } from "../config.js";
import { getPlanFromPriceId } from "../utils/plans.js";

function getEventType(event) {
    return event.eventType || event.event_type || "";
}

function getEventData(event) {
    return event.data || {};
}

function getCustomData(data) {
    return data.customData || data.custom_data || {};
}

function getFirstPriceId(data) {
    const items = data.items || [];
    const firstItem = items[0] || {};
    const price = firstItem.price || {};

    return firstItem.priceId || firstItem.price_id || price.id || "";
}

export async function applyPaddleEvent(event) {
    const eventType = getEventType(event);
    const data = getEventData(event);
    const customData = getCustomData(data);
    const userId = customData.supabase_user_id;

    if (!userId) {
        return { ignored: true, reason: "No Supabase user id in custom data." };
    }

    const priceId = getFirstPriceId(data);
    const mappedPlan = getPlanFromPriceId(priceId, config.paddle.prices);
    const plan = customData.plan || mappedPlan.plan;
    const billingPeriod = customData.billing_period || mappedPlan.billingPeriod;
    const subscriptionId = data.subscriptionId || data.subscription_id || data.id;
    const status = data.status || "unknown";

    if (eventType.startsWith("transaction.") || eventType.startsWith("subscription.")) {
        await supabaseAdmin
            .from("subscriptions")
            .upsert({
                user_id: userId,
                paddle_subscription_id: subscriptionId,
                paddle_customer_id: data.customerId || data.customer_id || null,
                paddle_transaction_id: eventType.startsWith("transaction.") ? data.id : null,
                plan,
                billing_period: billingPeriod,
                status,
                event_type: eventType,
                updated_at: new Date().toISOString(),
            }, {
                onConflict: "user_id",
            });

        if (["active", "trialing", "past_due"].includes(status) || eventType === "transaction.completed") {
            await supabaseAdmin
                .from("profiles")
                .update({
                    selected_plan: plan,
                    updated_at: new Date().toISOString(),
                })
                .eq("id", userId);
        }
    }

    return { ignored: false, eventType, status, plan };
}
