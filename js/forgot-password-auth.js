(function () {
    const form = document.querySelector("#forgot-password-form");

    if (!form) {
        return;
    }

    const emailInput = document.querySelector("#forgot-email");
    const submitButton = document.querySelector("#forgot-submit");
    const status = document.querySelector("#forgot-auth-status");
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
            return "Could not send reset email. Please try again.";
        }

        if (error.name === "AuthRetryableFetchError") {
            return "Could not reach Supabase. Check your internet connection, refresh, and try again.";
        }

        if (typeof error === "string") {
            return error === "{}" ? "Could not send reset email. Check Supabase SMTP settings and Brevo verification." : error;
        }

        if (error.message && error.message !== "{}") {
            return error.message;
        }

        if (error.error_description) {
            return error.error_description;
        }

        if (error.msg) {
            return error.msg;
        }

        if (error.name) {
            return error.name;
        }

        return "Could not send reset email. Check SMTP settings, redirect URLs, and email rate limits.";
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
        return new URL("reset-password.html", window.location.href).href;
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (!hasSupabaseConfig()) {
            setStatus("Supabase is not connected yet.", "error");
            return;
        }

        if (!emailInput.validity.valid) {
            setStatus("Enter a valid email address.", "error");
            emailInput.focus();
            return;
        }

        if (!window.supabase?.createClient) {
            setStatus("Supabase library did not load. Check your internet connection or CDN access.", "error");
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
        setStatus("Sending password reset email...", "info");

        let error = null;

        try {
            const recoverUrl = new URL(`${config.url.replace(/\/$/, "")}/auth/v1/recover`);
            recoverUrl.searchParams.set("redirect_to", getRedirectUrl());

            const response = await fetch(recoverUrl.href, {
                method: "POST",
                headers: {
                    "apikey": config.anonKey,
                    "Authorization": `Bearer ${config.anonKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                }),
            });

            if (!response.ok) {
                const details = await response.json().catch(() => null);
                error = details || { message: `Password reset failed with status ${response.status}.` };
            }
        } catch (requestError) {
            error = requestError;
        }

        submitButton.disabled = false;
        submitButton.textContent = "Send Reset Link";

        if (error) {
            console.error("Password reset email failed:", error);
            setStatus(getErrorMessage(error), "error");
            return;
        }

        form.reset();
        setStatus("If an account exists for this email, a reset link has been sent.", "success");
    });
}());
