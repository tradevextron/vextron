(function () {
    const form = document.querySelector("#reset-password-form");

    if (!form) {
        return;
    }

    const passwordInput = document.querySelector("#reset-password");
    const confirmInput = document.querySelector("#reset-password-confirm");
    const submitButton = document.querySelector("#reset-submit");
    const status = document.querySelector("#reset-auth-status");
    const config = window.VEXTRON_SUPABASE || {};
    let client = null;

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

    async function initRecoverySession() {
        if (!hasSupabaseConfig()) {
            setStatus("Supabase is not connected yet.", "error");
            return;
        }

        if (!window.supabase?.createClient) {
            setStatus("Supabase library did not load. Check your internet connection or CDN access.", "error");
            return;
        }

        client = window.supabase.createClient(config.url, config.anonKey);

        const { data } = await client.auth.getSession();

        if (!data.session) {
            setStatus("Open this page from the reset link in your email.", "error");
            submitButton.disabled = true;
        }
    }

    initRecoverySession();

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const password = passwordInput.value;
        const passwordConfirm = confirmInput.value;

        if (!client) {
            setStatus("Password reset session is not ready. Reopen the reset link.", "error");
            return;
        }

        if (password.length < 8) {
            setStatus("Use at least 8 characters for your new password.", "error");
            passwordInput.focus();
            return;
        }

        if (password !== passwordConfirm) {
            setStatus("Passwords do not match.", "error");
            confirmInput.focus();
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = "Updating...";
        setStatus("Updating your password securely...", "info");

        const { error } = await client.auth.updateUser({
            password,
        });

        submitButton.disabled = false;
        submitButton.textContent = "Update Password";

        if (error) {
            setStatus(error.message || "Could not update password. Please request a new reset link.", "error");
            return;
        }

        form.reset();
        await client.auth.signOut();
        setStatus("Password updated. You can log in with your new password.", "success");
    });
}());
