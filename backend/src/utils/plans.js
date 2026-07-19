const validPlans = new Set(["basic", "pro", "elite"]);
const validBillingPeriods = new Set(["monthly", "yearly"]);

export function normalizePlan(value) {
    const plan = String(value || "").toLowerCase();

    if (!validPlans.has(plan)) {
        return null;
    }

    return plan;
}

export function normalizeBillingPeriod(value) {
    const billingPeriod = String(value || "monthly").toLowerCase();

    if (!validBillingPeriods.has(billingPeriod)) {
        return null;
    }

    return billingPeriod;
}

export function getPlanFromPriceId(priceId, prices) {
    for (const [plan, periods] of Object.entries(prices)) {
        for (const [billingPeriod, nextPriceId] of Object.entries(periods)) {
            if (nextPriceId === priceId) {
                return { plan, billingPeriod };
            }
        }
    }

    return { plan: "none", billingPeriod: null };
}
