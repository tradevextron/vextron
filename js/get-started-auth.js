(function () {
    const form = document.querySelector("#start-form");

    if (!form) {
        return;
    }

    const fullNameInput = document.querySelector("#start-full-name");
    const emailInput = document.querySelector("#start-email");
    const phoneInput = document.querySelector("#start-phone");
    const selectedPlanInput = document.querySelector("#start-selected-plan");
    const passwordInput = document.querySelector("#start-password");
    const confirmInput = document.querySelector("#start-password-confirm");
    const contactHandleInput = document.querySelector("#start-contact-handle");
    const riskAgreementInput = document.querySelector("#start-risk-agreement");
    const submitButton = document.querySelector("#start-submit");
    const status = document.querySelector("#start-auth-status");
    const config = window.VEXTRON_SUPABASE || {};

    function setStatus(message, type) {
        if (!status) {
            return;
        }

        status.textContent = message;
        status.dataset.state = type || "info";
    }

    function getErrorMessage(error) {
        if (!error) {
            return "Signup failed. Please try again.";
        }

        if (typeof error === "string") {
            return error;
        }

        if (error.message) {
            return error.message;
        }

        if (error.error_description) {
            return error.error_description;
        }

        if (error.msg) {
            return error.msg;
        }

        return "Signup failed. Check SMTP settings, redirect URLs, password rules, and email rate limits.";
    }

    function getSelectedPlan() {
        const params = new URLSearchParams(window.location.search);
        const formPlan = selectedPlanInput?.value || "";
        const plan = (formPlan || params.get("plan") || "none").toLowerCase();
        const allowedPlans = ["basic", "pro", "elite", "none"];

        return allowedPlans.includes(plan) ? plan : "none";
    }

    function getSelectedBillingPeriod() {
        const params = new URLSearchParams(window.location.search);
        const billingPeriod = (params.get("billing") || "monthly").toLowerCase();

        return billingPeriod === "yearly" ? "yearly" : "monthly";
    }

    function hasSupabaseConfig() {
        return Boolean(
            config.url &&
            config.anonKey &&
            !config.url.includes("YOUR_SUPABASE") &&
            !config.anonKey.includes("YOUR_SUPABASE")
        );
    }

    function getRedirectUrl() {
        return new URL("customer-dashboard/index.html", window.location.href).href;
    }

    function syncPlanFromUrl() {
        if (!selectedPlanInput) {
            return;
        }

        selectedPlanInput.value = getSelectedPlan();
    }

    syncPlanFromUrl();

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const fullName = fullNameInput.value.trim();
        const phone = phoneInput.value.trim();
        const contactHandle = contactHandleInput.value.trim();
        const password = passwordInput.value;
        const passwordConfirm = confirmInput.value;
        const selectedPlan = getSelectedPlan();
        const selectedBillingPeriod = getSelectedBillingPeriod();

        if (!hasSupabaseConfig()) {
            setStatus("Supabase is not connected yet. Add your project URL and anon key in js/supabase-config.js.", "error");
            return;
        }

        if (!fullName) {
            setStatus("Enter your full name.", "error");
            fullNameInput.focus();
            return;
        }

        if (!emailInput.validity.valid) {
            setStatus("Enter a valid email address.", "error");
            emailInput.focus();
            return;
        }

        if (!phone) {
            setStatus("Enter your phone or WhatsApp number.", "error");
            phoneInput.focus();
            return;
        }

        if (selectedPlan === "none") {
            setStatus("Choose your VEXTRON plan.", "error");
            selectedPlanInput.focus();
            return;
        }

        if (password.length < 8) {
            setStatus("Use at least 8 characters for your password.", "error");
            passwordInput.focus();
            return;
        }

        if (password !== passwordConfirm) {
            setStatus("Passwords do not match.", "error");
            confirmInput.focus();
            return;
        }

        if (!riskAgreementInput.checked) {
            setStatus("Confirm the trading risk agreement before creating access.", "error");
            riskAgreementInput.focus();
            return;
        }

        if (!window.supabase?.createClient) {
            setStatus("Supabase library did not load. Check your internet connection or CDN access.", "error");
            return;
        }

        const client = window.supabase.createClient(config.url, config.anonKey);

        submitButton.disabled = true;
        submitButton.textContent = "Creating account...";
        setStatus("Creating your secure VEXTRON access...", "info");

        const { error } = await client.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: getRedirectUrl(),
                data: {
                    full_name: fullName,
                    phone,
                    selected_plan: selectedPlan,
                    selected_billing_period: selectedBillingPeriod,
                    contact_handle: contactHandle,
                    risk_agreement: true,
                    risk_agreement_at: new Date().toISOString(),
                    signup_source: "vextron_get_started",
                },
            },
        });

        submitButton.disabled = false;
        submitButton.textContent = "Get Started";

        if (error) {
            console.error("Signup failed:", error);
            setStatus(getErrorMessage(error), "error");
            return;
        }

        form.reset();
        await client.auth.signOut();
        setStatus("Account created. Check your email and verify your address before logging in.", "success");
    });
}());
