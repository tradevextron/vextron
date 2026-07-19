(function () {
    const form = document.querySelector("#login-form");

    if (!form) {
        return;
    }

    const emailInput = document.querySelector("#login-email");
    const passwordInput = document.querySelector("#login-password");
    const submitButton = document.querySelector("#login-submit");
    const status = document.querySelector("#login-auth-status");
    const config = window.VEXTRON_SUPABASE || {};

    function setStatus(message, type) {
        if (!status) {
            return;
        }

        status.textContent = message;
        status.dataset.state = type || "info";
    }

    function hasSupabaseConfig() {
        return Boolean(
            config.url &&
            config.anonKey &&
            !config.url.includes("YOUR_SUPABASE") &&
            !config.anonKey.includes("YOUR_SUPABASE")
        );
    }

    function showInitialMessage() {
        const params = new URLSearchParams(window.location.search);

        if (params.get("verified") === "pending") {
            setStatus("Email verified. You can log in now.", "success");
        }
    }

    showInitialMessage();

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        if (!hasSupabaseConfig()) {
            setStatus("Supabase is not connected yet.", "error");
            return;
        }

        if (!emailInput.validity.valid) {
            setStatus("Enter a valid email address.", "error");
            emailInput.focus();
            return;
        }

        if (!password) {
            setStatus("Enter your password.", "error");
            passwordInput.focus();
            return;
        }

        if (!window.supabase?.createClient) {
            setStatus("Supabase library did not load. Check your internet connection or CDN access.", "error");
            return;
        }

        const client = window.supabase.createClient(config.url, config.anonKey);

        submitButton.disabled = true;
        submitButton.textContent = "Logging in...";
        setStatus("Checking your secure VEXTRON access...", "info");

        const { data, error } = await client.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            submitButton.disabled = false;
            submitButton.textContent = "Login";
            setStatus(error.message || "Login failed. Please check your details.", "error");
            return;
        }

        if (!data.user?.email_confirmed_at) {
            await client.auth.signOut();
            submitButton.disabled = false;
            submitButton.textContent = "Login";
            setStatus("Verify your email before logging in.", "error");
            return;
        }

        setStatus("Login successful. Redirecting...", "success");

        window.location.href = "customer-dashboard/index.html";
    });
}());
