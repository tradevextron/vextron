"use strict";

const sidebar = document.querySelector(".sidebar");
const brandToggle = document.querySelector(".brand-lockup");
const profileAvatar = document.querySelector("[data-profile-avatar]");
const profileName = document.querySelector("[data-profile-name]");
const profilePlan = document.querySelector("[data-profile-plan]");

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

    let user = null;
    let client = null;

    try {
        client = window.supabase.createClient(config.url, config.anonKey);
        const { data: sessionData } = await client.auth.getSession();

        if (!sessionData?.session) {
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
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadProfile);
} else {
    loadProfile();
}
