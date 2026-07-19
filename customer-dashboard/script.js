"use strict";

const sidebar = document.querySelector(".sidebar");
const brandToggle = document.querySelector(".brand-lockup");
const profileAvatar = document.querySelector("[data-profile-avatar]");
const profileName = document.querySelector("[data-profile-name]");
const profilePlan = document.querySelector("[data-profile-plan]");
const paymentGate = document.querySelector("[data-payment-gate]");
const paymentStatus = document.querySelector("[data-payment-status]");
const paymentRetry = document.querySelector("[data-payment-retry]");

if (sidebar && brandToggle) {
    brandToggle.addEventListener("click", () => {
        const isCollapsed = sidebar.classList.toggle("is-collapsed");

        brandToggle.setAttribute("aria-expanded", String(!isCollapsed));
        brandToggle.setAttribute(
            "aria-label",
            isCollapsed ? "Expand sidebar" : "Collapse sidebar"
        );
    });
}

function formatPlan(plan) {
    if (!plan || plan === "none") {
        return "No plan";
    }

    return String(plan)
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getInitials(name, email) {
    const source = name || email || "V";
    const parts = source.trim().split(/\s+/).filter(Boolean);

    if (parts.length >= 2) {
        return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }

    return source.trim().charAt(0).toUpperCase() || "V";
}

async function loadProfile() {
    const config = window.VEXTRON_SUPABASE || {};

    if (!window.supabase?.createClient || !config.url || !config.anonKey) {
        return;
    }

    let session = null;
    let user = null;
    let client = null;

    try {
        client = window.supabase.createClient(config.url, config.anonKey);
        const { data: sessionData } = await client.auth.getSession();
        session = sessionData?.session;

        if (!session) {
            window.location.href = "../login.html";
            return;
        }

        const { data } = await client.auth.getUser();
        user = data?.user;
    } catch (error) {
        console.error("Unable to load customer profile:", error);
        return;
    }

    if (!user) {
        return;
    }

    const metadata = user.user_metadata || {};
    const pendingPlan = window.localStorage.getItem("vextron_pending_plan");
    const savedPlan = metadata.selected_plan || metadata.plan || "";
    let selectedPlan = savedPlan || pendingPlan || "none";

    if (pendingPlan && !savedPlan && client) {
        try {
            await client.auth.updateUser({
                data: {
                    selected_plan: pendingPlan,
                },
            });
            window.localStorage.removeItem("vextron_pending_plan");
            selectedPlan = pendingPlan;
        } catch (error) {
            console.error("Unable to save selected plan:", error);
        }
    }

    const fullName = metadata.full_name || metadata.name || user.email || "Customer";

    if (profileName) {
        profileName.textContent = fullName;
    }

    if (profilePlan) {
        profilePlan.textContent = formatPlan(selectedPlan);
    }

    if (profileAvatar) {
        profileAvatar.textContent = getInitials(fullName, user.email);
    }

    await requirePaymentBeforeAccess({ session, user, selectedPlan });
}

function getSelectedBillingPeriod(user) {
    const metadata = user?.user_metadata || {};
    const billingPeriod = metadata.selected_billing_period || metadata.billing_period || "monthly";

    return billingPeriod === "yearly" ? "yearly" : "monthly";
}

function hasActiveSubscription(subscription, selectedPlan) {
    if (!subscription || subscription.plan !== selectedPlan) {
        return false;
    }

    return ["active", "trialing"].includes(subscription.status);
}

function setPaymentStatus(message, canRetry = false) {
    if (paymentGate) {
        paymentGate.hidden = false;
    }

    if (paymentStatus) {
        paymentStatus.textContent = message;
    }

    if (paymentRetry) {
        paymentRetry.hidden = !canRetry;
    }
}

async function requirePaymentBeforeAccess({ session, user, selectedPlan }) {
    if (!session?.access_token || !selectedPlan || selectedPlan === "none") {
        return;
    }

    const billingPeriod = getSelectedBillingPeriod(user);
    const token = session.access_token;

    try {
        const profileResponse = await fetch(`${window.VEXTRON_API_BASE_URL}/api/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const profileResult = await profileResponse.json().catch(() => ({}));

        if (!profileResponse.ok) {
            throw new Error(profileResult.error || "Unable to check your subscription.");
        }

        if (hasActiveSubscription(profileResult.subscription, selectedPlan)) {
            if (paymentGate) {
                paymentGate.hidden = true;
            }

            return;
        }

        await startPlanCheckout({ token, plan: selectedPlan, billingPeriod });
    } catch (error) {
        console.error("Payment gate failed:", error);
        setPaymentStatus("We could not start payment automatically. Please continue to payment.", true);

        paymentRetry?.addEventListener("click", () => {
            startPlanCheckout({ token, plan: selectedPlan, billingPeriod });
        }, { once: true });
    }
}

async function startPlanCheckout({ token, plan, billingPeriod }) {
    setPaymentStatus("Preparing your secure payment...");

    const response = await fetch(`${window.VEXTRON_API_BASE_URL}/api/checkout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ plan, billingPeriod }),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || !result.checkoutUrl) {
        throw new Error(result.error || "Unable to start payment.");
    }

    window.location.href = result.checkoutUrl;
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadProfile);
} else {
    loadProfile();
}
