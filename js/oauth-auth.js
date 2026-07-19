(function () {
    const buttons = document.querySelectorAll("[data-oauth-provider]");

    if (!buttons.length) {
        return;
    }

    const config = window.VEXTRON_SUPABASE || {};

    function hasSupabaseConfig() {
        return Boolean(
            config.url &&
            config.anonKey &&
            !config.url.includes("YOUR_SUPABASE") &&
            !config.anonKey.includes("YOUR_SUPABASE")
        );
    }

    function getStatusElement() {
        return document.querySelector("#start-auth-status") || document.querySelector("#login-auth-status");
    }

    function setStatus(message, type) {
        const status = getStatusElement();

        if (!status) {
            return;
        }

        status.textContent = message;
        status.dataset.state = type || "info";
    }

    function getRedirectUrl() {
        return new URL("customer-dashboard/index.html", window.location.href).href;
    }

    function rememberSignupPlan() {
        const selectedPlanInput = document.querySelector("#start-selected-plan");
        const params = new URLSearchParams(window.location.search);
        const selectedPlan = selectedPlanInput?.value || params.get("plan") || "";

        if (selectedPlan && selectedPlan !== "none") {
            window.localStorage.setItem("vextron_pending_plan", selectedPlan);
        }
    }

    buttons.forEach((button) => {
        button.addEventListener("click", async () => {
            const provider = button.dataset.oauthProvider;

            if (!hasSupabaseConfig()) {
                setStatus("Supabase is not connected yet.", "error");
                return;
            }

            if (!window.supabase?.createClient) {
                setStatus("Supabase library did not load. Check your internet connection or CDN access.", "error");
                return;
            }

            const client = window.supabase.createClient(config.url, config.anonKey);

            button.disabled = true;
            rememberSignupPlan();
            setStatus(`Redirecting to ${provider === "github" ? "GitHub" : "Google"}...`, "info");

            const { error } = await client.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: getRedirectUrl(),
                    queryParams: {
                        prompt: "select_account",
                    },
                },
            });

            if (error) {
                button.disabled = false;
                setStatus(error.message || "Social login failed. Please try again.", "error");
            }
        });
    });
}());
