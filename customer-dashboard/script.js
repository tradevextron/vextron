"use strict";

function ensureSidebar() {
    if (document.querySelector(".sidebar")) {
        return;
    }

    document.body.insertAdjacentHTML("afterbegin", `
        <aside class="sidebar is-collapsed" aria-label="Customer dashboard sidebar">
            <button class="brand-lockup" type="button" aria-label="Expand sidebar" aria-expanded="false">
                <img class="brand-mark" src="image-assets/logo without bg.png" alt="">
                <img class="brand-wordmark" src="image-assets/written logo.png" alt="VEXTRON">
                <span class="rail-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" focusable="false">
                        <rect x="3" y="4" width="18" height="16" rx="3"></rect>
                        <path d="M9 4v16"></path>
                        <path d="m15 9 3 3-3 3"></path>
                    </svg>
                </span>
            </button>
            <nav class="sidebar-nav" aria-label="Dashboard navigation">
                <a class="nav-item dashboard-nav-item" href="index.html" data-page-link="dashboard">
                    <span class="nav-icon" aria-hidden="true">
                        <svg class="dashboard-icon" viewBox="0 0 24 24" focusable="false">
                            <path d="M4 11.5 12 5l8 6.5"></path>
                            <path d="M6.5 10.5V19h11v-8.5"></path>
                            <path d="M10 19v-5h4v5"></path>
                        </svg>
                    </span>
                    <span>Dashboard</span>
                </a>
                <div class="nav-group market-nav" data-nav-group="market">
                    <button class="nav-item sidebar-menu-item" type="button" data-nav-toggle aria-expanded="false">
                        <span class="nav-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" focusable="false">
                                <path d="M4 19V5"></path>
                                <path d="M4 19h16"></path>
                                <path d="m7 15 4-4 3 3 5-7"></path>
                                <path d="M15 7h4v4"></path>
                            </svg>
                        </span>
                        <span>Market Intelligence</span>
                        <span class="nav-chevron" aria-hidden="true">
                            <svg viewBox="0 0 24 24" focusable="false">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </span>
                    </button>
                    <div class="nav-dropdown market-dropdown">
                        <a class="nav-link" href="outlook.html" data-page-link="outlook">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <circle cx="11" cy="11" r="7"></circle>
                                    <path d="m16 16 4 4"></path>
                                    <path d="m8 11 2 2 4-5"></path>
                                </svg>
                            </span>
                            <span>OutLook</span>
                        </a>
                        <a class="nav-link" href="analytics.html" data-page-link="analytics">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M4 19V5"></path>
                                    <path d="M4 19h16"></path>
                                    <path d="M8 16v-5"></path>
                                    <path d="M12 16V8"></path>
                                    <path d="M16 16v-7"></path>
                                </svg>
                            </span>
                            <span>Analytics</span>
                        </a>
                        <a class="nav-link" href="economic-cal.html" data-page-link="economic-cal">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <rect x="4" y="5" width="16" height="15" rx="2"></rect>
                                    <path d="M8 3v4"></path>
                                    <path d="M16 3v4"></path>
                                    <path d="M4 10h16"></path>
                                    <path d="M8 14h2"></path>
                                    <path d="M14 14h2"></path>
                                </svg>
                            </span>
                            <span>Economic Cal</span>
                        </a>
                        <a class="nav-link" href="institutional-concepts.html" data-page-link="institutional-concepts">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M3 21h18"></path>
                                    <path d="M5 21V9l7-4 7 4v12"></path>
                                    <path d="M9 21v-7h6v7"></path>
                                    <path d="M9 10h.01"></path>
                                    <path d="M15 10h.01"></path>
                                </svg>
                            </span>
                            <span>Institutional Concepts</span>
                        </a>
                        <a class="nav-link" href="key-levels.html" data-page-link="key-levels">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M4 7h16"></path>
                                    <path d="M4 12h16"></path>
                                    <path d="M4 17h16"></path>
                                    <path d="M8 5v4"></path>
                                    <path d="M16 10v4"></path>
                                    <path d="M11 15v4"></path>
                                </svg>
                            </span>
                            <span>Key Levels</span>
                        </a>
                        <a class="nav-link" href="sentiments.html" data-page-link="sentiments">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M4 14h4l2-5 4 10 2-5h4"></path>
                                    <path d="M7 7a4 4 0 0 1 5 1 4 4 0 0 1 5-1"></path>
                                </svg>
                            </span>
                            <span>Sentiments</span>
                        </a>
                        <a class="nav-link" href="weekly-outlooks.html" data-page-link="weekly-outlooks">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M5 4h14v16H5z"></path>
                                    <path d="M8 8h8"></path>
                                    <path d="M8 12h8"></path>
                                    <path d="M8 16h5"></path>
                                </svg>
                            </span>
                            <span>Weekly OutLooks</span>
                        </a>
                    </div>
                </div>
                <div class="nav-group tools-nav" data-nav-group="tools">
                    <button class="nav-item sidebar-menu-item" type="button" data-nav-toggle aria-expanded="false">
                        <span class="nav-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" focusable="false">
                                <path d="M14.7 6.3a4 4 0 0 0-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5l-2.4 2.4-3-3z"></path>
                                <path d="M6.5 17.5 4 20"></path>
                            </svg>
                        </span>
                        <span>Execution Tools</span>
                        <span class="nav-chevron" aria-hidden="true">
                            <svg viewBox="0 0 24 24" focusable="false">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </span>
                    </button>
                    <div class="nav-dropdown tools-dropdown">
                        <a class="nav-link" href="trade-journal.html" data-page-link="trade-journal">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M5 4h14v16H5z"></path>
                                    <path d="M9 4v16"></path>
                                    <path d="M12 8h4"></path>
                                    <path d="M12 12h4"></path>
                                </svg>
                            </span>
                            <span>Trade Journal</span>
                        </a>
                        <a class="nav-link" href="pnl-tracker.html" data-page-link="pnl-tracker">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M4 19h16"></path>
                                    <path d="M7 16V8"></path>
                                    <path d="M12 16v-5"></path>
                                    <path d="M17 16V6"></path>
                                </svg>
                            </span>
                            <span>P&amp;L Tracker</span>
                        </a>
                        <a class="nav-link" href="risk-calculator.html" data-page-link="risk-calculator">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M12 3 5 6v5c0 4.2 2.7 7.9 7 10 4.3-2.1 7-5.8 7-10V6z"></path>
                                    <path d="M12 8v4"></path>
                                    <path d="M12 16h.01"></path>
                                </svg>
                            </span>
                            <span>Risk Calculator</span>
                        </a>
                        <a class="nav-link" href="position-size-calculator.html" data-page-link="position-size-calculator">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <rect x="5" y="3" width="14" height="18" rx="2"></rect>
                                    <path d="M8 7h8"></path>
                                    <path d="M8 11h2"></path>
                                    <path d="M14 11h2"></path>
                                    <path d="M8 15h2"></path>
                                    <path d="M14 15h2"></path>
                                </svg>
                            </span>
                            <span>Position Size Calculator</span>
                        </a>
                        <a class="nav-link" href="trading-economic-calendar.html" data-page-link="trading-economic-calendar">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <rect x="4" y="5" width="16" height="15" rx="2"></rect>
                                    <path d="M8 3v4"></path>
                                    <path d="M16 3v4"></path>
                                    <path d="M4 10h16"></path>
                                    <path d="M9 14h6"></path>
                                </svg>
                            </span>
                            <span>Economic Calendar</span>
                        </a>
                        <a class="nav-link" href="trading-checklist.html" data-page-link="trading-checklist">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M9 5h6"></path>
                                    <path d="M9 3h6v4H9z"></path>
                                    <path d="M6 5H5a2 2 0 0 0-2 2v12h18V7a2 2 0 0 0-2-2h-1"></path>
                                    <path d="m7 13 2 2 4-5"></path>
                                    <path d="M14 15h3"></path>
                                </svg>
                            </span>
                            <span>Trading Checklist</span>
                        </a>
                        <a class="nav-link" href="performance-analytics.html" data-page-link="performance-analytics">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M4 19V5"></path>
                                    <path d="M4 19h16"></path>
                                    <path d="m7 15 4-4 3 3 5-7"></path>
                                    <path d="M15 7h4v4"></path>
                                </svg>
                            </span>
                            <span>Performance Analytics</span>
                        </a>
                    </div>
                </div>
                <div class="nav-group education-nav" data-nav-group="education">
                    <button class="nav-item sidebar-menu-item" type="button" data-nav-toggle aria-expanded="false">
                        <span class="nav-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" focusable="false">
                                <path d="M22 10 12 5 2 10l10 5z"></path>
                                <path d="M6 12.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5"></path>
                                <path d="M22 10v6"></path>
                            </svg>
                        </span>
                        <span>Trading Education</span>
                        <span class="nav-chevron" aria-hidden="true">
                            <svg viewBox="0 0 24 24" focusable="false">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </span>
                    </button>
                    <div class="nav-dropdown education-dropdown">
                        <a class="nav-link" href="trading-psychology.html" data-page-link="trading-psychology">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M12 4a7 7 0 0 0-7 7v3l-2 3h4v3h5"></path>
                                    <path d="M12 4a7 7 0 0 1 7 7v9h-4"></path>
                                    <path d="M9 11h.01"></path>
                                    <path d="M15 11h.01"></path>
                                </svg>
                            </span>
                            <span>Trading Psychology</span>
                        </a>
                        <a class="nav-link" href="risk-management.html" data-page-link="risk-management">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M12 3 5 6v5c0 4.2 2.7 7.9 7 10 4.3-2.1 7-5.8 7-10V6z"></path>
                                    <path d="m9 12 2 2 4-5"></path>
                                </svg>
                            </span>
                            <span>Risk Management</span>
                        </a>
                        <a class="nav-link" href="technical-analysis.html" data-page-link="technical-analysis">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M4 19V5"></path>
                                    <path d="M4 19h16"></path>
                                    <path d="m7 15 3-4 3 2 4-6"></path>
                                </svg>
                            </span>
                            <span>Technical Analysis</span>
                        </a>
                        <a class="nav-link" href="fundamental-analysis.html" data-page-link="fundamental-analysis">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M4 20V8l8-4 8 4v12"></path>
                                    <path d="M3 20h18"></path>
                                    <path d="M8 20v-7h8v7"></path>
                                </svg>
                            </span>
                            <span>Fundamental Analysis</span>
                        </a>
                        <a class="nav-link" href="strategy-playbooks.html" data-page-link="strategy-playbooks">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M5 4h14v16H5z"></path>
                                    <path d="M9 4v16"></path>
                                    <path d="M12 8h4"></path>
                                    <path d="M12 12h4"></path>
                                    <path d="M12 16h3"></path>
                                </svg>
                            </span>
                            <span>Strategy Playbooks</span>
                        </a>
                        <a class="nav-link" href="quizzes.html" data-page-link="quizzes">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M9 5h6"></path>
                                    <path d="M9 3h6v4H9z"></path>
                                    <path d="M6 5H5a2 2 0 0 0-2 2v12h18V7a2 2 0 0 0-2-2h-1"></path>
                                    <path d="M8 12h.01"></path>
                                    <path d="M11 12h5"></path>
                                    <path d="M8 16h.01"></path>
                                    <path d="M11 16h5"></path>
                                </svg>
                            </span>
                            <span>Quizzes</span>
                        </a>
                    </div>
                </div>
                <div class="nav-group community-nav" data-nav-group="community">
                    <button class="nav-item sidebar-menu-item" type="button" data-nav-toggle aria-expanded="false">
                        <span class="nav-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" focusable="false">
                                <circle cx="9" cy="8" r="2.4"></circle>
                                <path d="M4.5 18a4.5 4.5 0 0 1 9 0"></path>
                                <path d="M15.5 10.5a2.4 2.4 0 1 0-1.8-4"></path>
                                <path d="M14.5 14.2a4.5 4.5 0 0 1 5 3.8"></path>
                            </svg>
                        </span>
                        <span>Community</span>
                        <span class="nav-chevron" aria-hidden="true">
                            <svg viewBox="0 0 24 24" focusable="false">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </span>
                    </button>
                    <div class="nav-dropdown community-dropdown">
                        <a class="nav-link" href="telegram-channel.html" data-page-link="telegram-channel">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M21 4 3 11l7 2 2 7z"></path>
                                    <path d="m10 13 4-4"></path>
                                </svg>
                            </span>
                            <span>Telegram Channel</span>
                        </a>
                        <a class="nav-link" href="discussions.html" data-page-link="discussions">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M4 5h16v11H7l-3 3z"></path>
                                    <path d="M8 9h8"></path>
                                    <path d="M8 13h5"></path>
                                </svg>
                            </span>
                            <span>Discussions</span>
                        </a>
                        <a class="nav-link" href="announcement.html" data-page-link="announcement">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M4 11v2a2 2 0 0 0 2 2h2l5 4V5L8 9H6a2 2 0 0 0-2 2z"></path>
                                    <path d="M16 9a3 3 0 0 1 0 6"></path>
                                </svg>
                            </span>
                            <span>Announcement</span>
                        </a>
                    </div>
                </div>
                <div class="nav-group account-nav" data-nav-group="account">
                    <button class="nav-item sidebar-menu-item" type="button" data-nav-toggle aria-expanded="false">
                        <span class="nav-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" focusable="false">
                                <circle cx="12" cy="8" r="4"></circle>
                                <path d="M4 21a8 8 0 0 1 16 0"></path>
                            </svg>
                        </span>
                        <span>Account</span>
                        <span class="nav-chevron" aria-hidden="true">
                            <svg viewBox="0 0 24 24" focusable="false">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </span>
                    </button>
                    <div class="nav-dropdown account-dropdown">
                        <a class="nav-link" href="profile.html" data-page-link="profile">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <circle cx="12" cy="8" r="4"></circle>
                                    <path d="M5 21a7 7 0 0 1 14 0"></path>
                                </svg>
                            </span>
                            <span>Profile</span>
                        </a>
                        <a class="nav-link" href="settings.html" data-page-link="settings">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path d="M12 2v3"></path>
                                    <path d="M12 19v3"></path>
                                    <path d="M2 12h3"></path>
                                    <path d="M19 12h3"></path>
                                    <path d="m4.9 4.9 2.1 2.1"></path>
                                    <path d="m17 17 2.1 2.1"></path>
                                    <path d="m19.1 4.9-2.1 2.1"></path>
                                    <path d="m7 17-2.1 2.1"></path>
                                </svg>
                            </span>
                            <span>Settings</span>
                        </a>
                        <a class="nav-link" href="account-help-support.html" data-page-link="account-help-support">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <circle cx="12" cy="12" r="9"></circle>
                                    <path d="M9.5 9a2.5 2.5 0 1 1 4 2c-.9.6-1.5 1.1-1.5 2"></path>
                                    <path d="M12 17h.01"></path>
                                </svg>
                            </span>
                            <span>Help &amp; Support</span>
                        </a>
                        <a class="nav-link" href="account-feedback.html" data-page-link="account-feedback">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M4 5h16v12H8l-4 4z"></path>
                                    <path d="m9 11 2 2 4-5"></path>
                                </svg>
                            </span>
                            <span>Feedback</span>
                        </a>
                        <a class="nav-link" href="logout.html" data-page-link="logout">
                            <span class="nav-link-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" focusable="false">
                                    <path d="M10 5H5v14h5"></path>
                                    <path d="M14 16l4-4-4-4"></path>
                                    <path d="M18 12H9"></path>
                                </svg>
                            </span>
                            <span>Logout</span>
                        </a>
                    </div>
                </div>
            </nav>
        </aside>
    `);
}

ensureSidebar();

function combineCommunityAndAccount() {
    const communityGroup = document.querySelector('[data-nav-group="community"]');
    const accountGroup = document.querySelector('[data-nav-group="account"]');

    if (!communityGroup || !accountGroup) {
        return;
    }

    const communityTitle = communityGroup.querySelector(".sidebar-menu-item > span:not(.nav-icon):not(.nav-chevron)");
    const communityDropdown = communityGroup.querySelector(".nav-dropdown");
    const accountDropdown = accountGroup.querySelector(".nav-dropdown");

    if (communityTitle) {
        communityTitle.textContent = "Member Hub";
    }

    if (communityDropdown && accountDropdown) {
        Array.from(accountDropdown.children).forEach((item) => {
            communityDropdown.appendChild(item);
        });

        [
            "announcement",
            "telegram-channel",
            "discussions",
            "profile",
            "settings",
            "account-help-support",
            "account-feedback",
            "logout",
        ].forEach((pageName) => {
            const link = communityDropdown.querySelector(`[data-page-link="${pageName}"]`);

            if (link) {
                communityDropdown.appendChild(link);
            }
        });
    }

    communityGroup.dataset.navGroup = "community-account";
    communityGroup.classList.add("community-account-nav");
    accountGroup.remove();
}

combineCommunityAndAccount();

function insertUpgradeCard() {
    const logoutLink = document.querySelector('[data-page-link="logout"]');

    if (!logoutLink || document.querySelector("[data-upgrade-card]")) {
        return;
    }

    logoutLink.insertAdjacentHTML("afterend", `
        <section class="sidebar-upgrade-card" data-upgrade-card hidden aria-label="Upgrade plan">
            <p class="upgrade-eyebrow" data-upgrade-eyebrow>Unlock More</p>
            <h2 data-upgrade-title>Upgrade To Pro</h2>
            <p data-upgrade-body>Get higher-level tools, education, and market intelligence.</p>
            <button class="upgrade-action" type="button" data-upgrade-action>Upgrade</button>
        </section>
    `);
}

insertUpgradeCard();

const navigationEntry = performance.getEntriesByType("navigation")[0];

if (navigationEntry?.type === "reload" && document.body.dataset.page !== "profile") {
    window.location.replace("profile.html");
}

const sidebar = document.querySelector(".sidebar");
const brandToggle = document.querySelector(".brand-lockup");
const navGroups = Array.from(document.querySelectorAll("[data-nav-group]"));
const pageLinks = Array.from(document.querySelectorAll("[data-page-link]"));
const groupedPageLinks = Array.from(document.querySelectorAll("[data-nav-group] .nav-dropdown [data-page-link]"));
const paymentGate = document.querySelector("[data-payment-gate]");
const paymentStatus = document.querySelector("[data-payment-status]");
const paymentRetry = document.querySelector("[data-payment-retry]");
const upgradeCard = document.querySelector("[data-upgrade-card]");
const upgradeTitle = document.querySelector("[data-upgrade-title]");
const upgradeBody = document.querySelector("[data-upgrade-body]");
const upgradeAction = document.querySelector("[data-upgrade-action]");
const notificationToggle = document.querySelector("[data-notification-toggle]");
const notificationDropdown = document.querySelector("[data-notification-dropdown]");
const notificationCount = document.querySelector("[data-notification-count]");
const mailToggle = document.querySelector("[data-mail-toggle]");
const mailDropdown = document.querySelector("[data-mail-dropdown]");
const mailCount = document.querySelector("[data-mail-count]");
const paidBadge = document.querySelector("[data-paid-badge]");
const profileLocation = document.querySelector("[data-profile-location]");
const profileAvatar = document.querySelector(".profile-avatar");
const profileAvatarInput = document.querySelector("[data-profile-avatar-input]");
const profileAvatarImage = document.querySelector("[data-profile-avatar-image]");
const editAvatarPreview = document.querySelector("[data-edit-avatar-preview]");
const profileAvatarStorageKey = "vextron_profile_avatar";
const avatarEditor = document.querySelector("[data-avatar-editor]");
const avatarPreview = document.querySelector("[data-avatar-preview]");
const avatarZoom = document.querySelector("[data-avatar-zoom]");
const avatarX = document.querySelector("[data-avatar-x]");
const avatarY = document.querySelector("[data-avatar-y]");
const avatarRotateLeft = document.querySelector("[data-avatar-rotate-left]");
const avatarRotateRight = document.querySelector("[data-avatar-rotate-right]");
const avatarReset = document.querySelector("[data-avatar-reset]");
const avatarSave = document.querySelector("[data-avatar-save]");
const avatarCancelButtons = Array.from(document.querySelectorAll("[data-avatar-cancel]"));
const activityOpen = document.querySelector("[data-activity-open]");
const activityModal = document.querySelector("[data-activity-modal]");
const activityClose = document.querySelector("[data-activity-close]");
const editProfileOpen = document.querySelector("[data-edit-profile-open]");
const editProfileModal = document.querySelector("[data-edit-profile-modal]");
const editProfileForm = document.querySelector("[data-edit-profile-form]");
const editProfileGrid = document.querySelector(".edit-profile-grid");
const editProfileCloseButtons = Array.from(document.querySelectorAll("[data-edit-profile-close]"));
const editAvatarUpload = document.querySelector("[data-edit-avatar-upload]");
const editProfileStorageKey = "vextron_profile_details";
const accountIdStorageKey = "vextron_account_id";

function setPanelDropdownOpen(toggle, dropdown, isOpen) {
    if (!toggle || !dropdown) {
        return;
    }

    dropdown.hidden = !isOpen;
    toggle.setAttribute("aria-expanded", String(isOpen));
}

function updatePanelCount(dropdown, countElement, itemSelector) {
    if (!dropdown || !countElement) {
        return;
    }

    const count = dropdown.querySelectorAll(itemSelector).length;
    countElement.textContent = `${count} New`;
}

function initNotificationDropdown() {
    if (!notificationToggle || !notificationDropdown) {
        return;
    }

    updatePanelCount(notificationDropdown, notificationCount, ".notification-item");

    notificationDropdown.querySelectorAll(".notification-item").forEach((item) => {
        function toggleNotificationItem() {
            const isExpanded = item.classList.toggle("is-expanded");
            item.setAttribute("aria-expanded", String(isExpanded));
        }

        item.addEventListener("click", toggleNotificationItem);
        item.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleNotificationItem();
            }
        });
    });

    notificationToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        setPanelDropdownOpen(mailToggle, mailDropdown, false);
        setPanelDropdownOpen(notificationToggle, notificationDropdown, notificationDropdown.hidden);
    });

    notificationDropdown.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}

function initMailDropdown() {
    if (!mailToggle || !mailDropdown) {
        return;
    }

    updatePanelCount(mailDropdown, mailCount, ".mail-item");

    mailToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        setPanelDropdownOpen(notificationToggle, notificationDropdown, false);
        setPanelDropdownOpen(mailToggle, mailDropdown, mailDropdown.hidden);
    });

    mailDropdown.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}

initNotificationDropdown();
initMailDropdown();

function setActivityModalOpen(isOpen) {
    if (!activityModal) {
        return;
    }

    activityModal.hidden = !isOpen;

    if (!isOpen) {
        activityOpen?.focus();
    }
}

function initActivityModal() {
    if (!activityOpen || !activityModal || !activityClose) {
        return;
    }

    activityOpen.addEventListener("click", () => {
        setActivityModalOpen(true);
    });

    activityClose.addEventListener("click", () => {
        setActivityModalOpen(false);
    });

    activityModal.addEventListener("click", (event) => {
        if (event.target === activityModal) {
            setActivityModalOpen(false);
        }
    });
}

initActivityModal();

const profileDetailFields = {
    name: document.querySelector("[data-profile-name]"),
    username: document.querySelector("[data-profile-username]"),
    accountUsername: document.querySelector("[data-account-username]"),
    accountId: document.querySelector("[data-account-id]"),
    email: document.querySelector("[data-account-email]"),
    dob: document.querySelector("[data-account-dob]"),
    phone: document.querySelector("[data-account-phone]"),
    timezone: document.querySelector("[data-account-timezone]"),
    location: document.querySelector("[data-profile-location]"),
    about: document.querySelector("[data-profile-about]"),
    tradingStyle: document.querySelector("[data-profile-trading-style]"),
    markets: document.querySelector("[data-profile-markets]"),
    timeframe: document.querySelector("[data-profile-timeframe]"),
    risk: document.querySelector("[data-profile-risk]"),
    holding: document.querySelector("[data-profile-holding]"),
    pairs: document.querySelector("[data-profile-pairs]"),
};

const editProfileInputs = {
    name: document.querySelector("[data-edit-name]"),
    username: document.querySelector("[data-edit-username]"),
    email: document.querySelector("[data-edit-email]"),
    phone: document.querySelector("[data-edit-phone]"),
    dob: document.querySelector("[data-edit-dob]"),
    location: document.querySelector("[data-edit-location]"),
    timezone: document.querySelector("[data-edit-timezone]"),
    about: document.querySelector("[data-edit-about]"),
    tradingStyle: document.querySelector("[data-edit-trading-style]"),
    markets: document.querySelector("[data-edit-markets]"),
    timeframe: document.querySelector("[data-edit-timeframe]"),
    risk: document.querySelector("[data-edit-risk]"),
    holding: document.querySelector("[data-edit-holding]"),
    pairs: document.querySelector("[data-edit-pairs]"),
};

ensureAccountId();

const phoneCodePicker = document.querySelector("[data-country-code-picker]");
const phoneCodeToggle = document.querySelector("[data-country-code-toggle]");
const phoneCodeMenu = document.querySelector("[data-country-code-menu]");
const phoneCodeLabel = document.querySelector("[data-country-code-label]");
const phoneBuilder = document.querySelector(".phone-builder");
const phoneValidation = document.querySelector("[data-phone-validation]");
const premiumSelects = Array.from(document.querySelectorAll("[data-premium-select]"));
const dobPicker = document.querySelector("[data-dob-picker]");
const dobToggle = document.querySelector("[data-dob-toggle]");
const dobCalendar = document.querySelector("[data-dob-calendar]");
const locationStatus = document.querySelector("[data-location-status]");
const aboutCounter = document.querySelector("[data-about-counter]");
const usernameCharacterLimit = 12;
const aboutCharacterLimit = 350;
const defaultCallingCode = "971";
let selectedCallingCode = defaultCallingCode;
let visibleDobDate = new Date();
let isApplyingVerifiedLocation = false;
let isVerifyingLocation = false;
const locationVerificationStorageKey = "vextron_verified_location";
const countryCallingCodeOptions = [
    // Country and territory calling codes based on international telephone input/libphonenumber style metadata.
    ["Afghanistan", "93"], ["Aland Islands", "358"], ["Albania", "355"], ["Algeria", "213"], ["American Samoa", "1-684"],
    ["Andorra", "376"], ["Angola", "244"], ["Anguilla", "1-264"], ["Antigua and Barbuda", "1-268"],
    ["Argentina", "54"], ["Armenia", "374"], ["Aruba", "297"], ["Australia", "61"], ["Austria", "43"],
    ["Azerbaijan", "994"], ["Bahamas", "1-242"], ["Bahrain", "973"], ["Bangladesh", "880"],
    ["Barbados", "1-246"], ["Belarus", "375"], ["Belgium", "32"], ["Belize", "501"], ["Benin", "229"],
    ["Bermuda", "1-441"], ["Bhutan", "975"], ["Bolivia", "591"], ["Bosnia and Herzegovina", "387"],
    ["Botswana", "267"], ["Brazil", "55"], ["British Virgin Islands", "1-284"], ["Brunei", "673"],
    ["Bulgaria", "359"], ["Burkina Faso", "226"], ["Burundi", "257"], ["Cambodia", "855"],
    ["Cameroon", "237"], ["Canada", "1"], ["Cape Verde", "238"], ["Caribbean Netherlands", "599"], ["Cayman Islands", "1-345"],
    ["Central African Republic", "236"], ["Chad", "235"], ["Chile", "56"], ["China", "86"],
    ["Christmas Island", "61"], ["Cocos (Keeling) Islands", "61"], ["Colombia", "57"], ["Comoros", "269"], ["Congo", "242"], ["Cook Islands", "682"], ["Costa Rica", "506"],
    ["Croatia", "385"], ["Cuba", "53"], ["Curacao", "599"], ["Cyprus", "357"], ["Czech Republic", "420"],
    ["DR Congo", "243"], ["Denmark", "45"], ["Djibouti", "253"], ["Dominica", "1-767"],
    ["Dominican Republic", "1-809"], ["Dominican Republic", "1-829"], ["Dominican Republic", "1-849"],
    ["Ecuador", "593"], ["Egypt", "20"], ["El Salvador", "503"],
    ["Equatorial Guinea", "240"], ["Eritrea", "291"], ["Estonia", "372"], ["Eswatini", "268"],
    ["Ethiopia", "251"], ["Falkland Islands", "500"], ["Faroe Islands", "298"], ["Fiji", "679"],
    ["Finland", "358"], ["France", "33"], ["French Guiana", "594"], ["French Polynesia", "689"],
    ["Gabon", "241"], ["Gambia", "220"], ["Georgia", "995"], ["Germany", "49"], ["Ghana", "233"],
    ["Gibraltar", "350"], ["Greece", "30"], ["Greenland", "299"], ["Grenada", "1-473"],
    ["Guadeloupe", "590"], ["Guam", "1-671"], ["Guatemala", "502"], ["Guernsey", "44"],
    ["Guinea", "224"], ["Guinea-Bissau", "245"], ["Guyana", "592"], ["Haiti", "509"], ["Honduras", "504"],
    ["Hong Kong", "852"], ["Hungary", "36"], ["Iceland", "354"], ["India", "91"], ["Indonesia", "62"],
    ["Iran", "98"], ["Iraq", "964"], ["Ireland", "353"], ["Isle of Man", "44"], ["Israel", "972"],
    ["Italy", "39"], ["Ivory Coast", "225"], ["Jamaica", "1-876"], ["Japan", "81"], ["Jersey", "44"],
    ["Jordan", "962"], ["Kazakhstan", "7"], ["Kenya", "254"], ["Kiribati", "686"], ["Kosovo", "383"],
    ["Kuwait", "965"], ["Kyrgyzstan", "996"], ["Laos", "856"], ["Latvia", "371"], ["Lebanon", "961"],
    ["Lesotho", "266"], ["Liberia", "231"], ["Libya", "218"], ["Liechtenstein", "423"], ["Lithuania", "370"],
    ["Luxembourg", "352"], ["Macau", "853"], ["Madagascar", "261"], ["Malawi", "265"], ["Malaysia", "60"],
    ["Maldives", "960"], ["Mali", "223"], ["Malta", "356"], ["Marshall Islands", "692"], ["Martinique", "596"],
    ["Mauritania", "222"], ["Mauritius", "230"], ["Mayotte", "262"], ["Mexico", "52"], ["Micronesia", "691"],
    ["Moldova", "373"], ["Monaco", "377"], ["Mongolia", "976"], ["Montenegro", "382"], ["Montserrat", "1-664"],
    ["Morocco", "212"], ["Mozambique", "258"], ["Myanmar", "95"], ["Namibia", "264"], ["Nauru", "674"],
    ["Nepal", "977"], ["Netherlands", "31"], ["New Caledonia", "687"], ["New Zealand", "64"],
    ["Nicaragua", "505"], ["Niger", "227"], ["Nigeria", "234"], ["Niue", "683"], ["Norfolk Island", "672"], ["North Korea", "850"],
    ["North Macedonia", "389"], ["Northern Mariana Islands", "1-670"], ["Norway", "47"], ["Oman", "968"],
    ["Pakistan", "92"], ["Palau", "680"], ["Palestine", "970"], ["Panama", "507"], ["Papua New Guinea", "675"], ["Pitcairn Islands", "64"],
    ["Paraguay", "595"], ["Peru", "51"], ["Philippines", "63"], ["Poland", "48"], ["Portugal", "351"],
    ["Puerto Rico", "1-787"], ["Puerto Rico", "1-939"], ["Qatar", "974"], ["Reunion", "262"], ["Romania", "40"], ["Russia", "7"],
    ["Rwanda", "250"], ["Saint Barthelemy", "590"], ["Saint Helena", "290"], ["Saint Kitts and Nevis", "1-869"],
    ["Saint Lucia", "1-758"], ["Saint Martin", "590"], ["Saint Pierre and Miquelon", "508"],
    ["Saint Vincent and the Grenadines", "1-784"], ["Samoa", "685"], ["San Marino", "378"],
    ["Sao Tome and Principe", "239"], ["Saudi Arabia", "966"], ["Senegal", "221"], ["Serbia", "381"],
    ["Seychelles", "248"], ["Sierra Leone", "232"], ["Singapore", "65"], ["Sint Maarten", "1-721"],
    ["Slovakia", "421"], ["Slovenia", "386"], ["Solomon Islands", "677"], ["Somalia", "252"],
    ["South Africa", "27"], ["South Korea", "82"], ["South Sudan", "211"], ["Spain", "34"], ["Sri Lanka", "94"],
    ["Sudan", "249"], ["Suriname", "597"], ["Sweden", "46"], ["Switzerland", "41"], ["Syria", "963"],
    ["Taiwan", "886"], ["Tajikistan", "992"], ["Tanzania", "255"], ["Thailand", "66"], ["Timor-Leste", "670"],
    ["Togo", "228"], ["Tokelau", "690"], ["Tonga", "676"], ["Trinidad and Tobago", "1-868"], ["Tunisia", "216"],
    ["Turkey", "90"], ["Turkmenistan", "993"], ["Turks and Caicos Islands", "1-649"], ["Tuvalu", "688"],
    ["Uganda", "256"], ["Ukraine", "380"], ["United Arab Emirates", "971"], ["United Kingdom", "44"],
    ["United States", "1"], ["United States Virgin Islands", "1-340"], ["Uruguay", "598"], ["Uzbekistan", "998"], ["Vanuatu", "678"], ["Vatican City", "39"],
    ["Venezuela", "58"], ["Vietnam", "84"], ["Wallis and Futuna", "681"], ["Yemen", "967"], ["Zambia", "260"],
    ["Zimbabwe", "263"],
];
const countryCallingCodes = countryCallingCodeOptions.reduce((codes, [country, code]) => {
    const countryKey = country.toLowerCase();

    if (!codes[countryKey]) {
        codes[countryKey] = code.replace(/\D/g, "");
    }

    return codes;
}, {
    uae: "971",
    uk: "44",
    usa: "1",
});
const timezoneCallingCodes = {
    "Asia/Calcutta": "91",
    "Asia/Kolkata": "91",
    "America/New_York": "1",
    "America/Chicago": "1",
    "America/Denver": "1",
    "America/Los_Angeles": "1",
    "Europe/London": "44",
    "Asia/Dubai": "971",
};

function getUsernameCore(username) {
    return String(username || "")
        .replace(/^@+/, "")
        .replace(/[.-]?vextron$/i, "")
        .replace(/[^a-z0-9]+/gi, "")
        .toLowerCase()
        .slice(0, usernameCharacterLimit);
}

function inferCallingCode(location) {
    const cleanLocation = String(location || "").toLowerCase();
    const countryMatch = Object.keys(countryCallingCodes)
        .sort((first, second) => second.length - first.length)
        .find((country) => cleanLocation.includes(country));

    if (countryMatch) {
        return countryCallingCodes[countryMatch];
    }

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timezoneCallingCodes[timezone] || defaultCallingCode;
}

function getCallingCode(location = profileDetailFields.location?.textContent || "") {
    return selectedCallingCode || inferCallingCode(location);
}

function getMatchingCallingCode(digits) {
    return [...new Set(countryCallingCodeOptions.map(([, code]) => code.replace(/\D/g, "")))]
        .sort((first, second) => second.length - first.length)
        .find((code) => digits.startsWith(code));
}

function setPhoneCode(code) {
    if (!code) {
        return;
    }

    const cleanCode = String(code).replace(/\D/g, "");
    const hasOption = countryCallingCodeOptions.some(([, optionCode]) => optionCode.replace(/\D/g, "") === cleanCode);

    if (hasOption) {
        selectedCallingCode = cleanCode;
        if (phoneCodeLabel) {
            phoneCodeLabel.textContent = `+${cleanCode}`;
        }

        phoneCodeMenu?.querySelectorAll(".country-code-option").forEach((option) => {
            const isSelected = option.dataset.code === cleanCode;
            option.classList.toggle("is-selected", isSelected);
            option.setAttribute("aria-selected", String(isSelected));
        });
    }
}

function getPhoneParts(phone, location = profileDetailFields.location?.textContent || "") {
    const rawPhone = String(phone || "").trim();
    const fallbackCode = getCallingCode(location);
    const digits = rawPhone.replace(/\D/g, "");

    if (!digits) {
        return {
            code: fallbackCode,
            national: "",
        };
    }

    if (rawPhone.startsWith("+") || rawPhone.startsWith("00")) {
        const internationalDigits = rawPhone.startsWith("00") ? digits.replace(/^00/, "") : digits;
        const matchedCode = getMatchingCallingCode(internationalDigits) || fallbackCode;

        return {
            code: matchedCode,
            national: internationalDigits.slice(matchedCode.length, 15),
        };
    }

    if (digits.startsWith(fallbackCode) && digits.length > fallbackCode.length + 6) {
        return {
            code: fallbackCode,
            national: digits.slice(fallbackCode.length, 15),
        };
    }

    return {
        code: fallbackCode,
        national: digits.replace(/^0+/, "").slice(0, 15 - fallbackCode.length),
    };
}

function formatMobileNumber(phone, location = profileDetailFields.location?.textContent || "") {
    const { code, national } = getPhoneParts(phone, location);

    if (!national) {
        return "";
    }

    const normalizedNumber = `+${code}${national}`;
    const phoneNumber = parsePhoneNumberStrict(normalizedNumber, code);

    return phoneNumber?.isValid?.() ? phoneNumber.number : normalizedNumber;
}

function parsePhoneNumberStrict(phone, callingCode) {
    const parser = window.libphonenumber?.parsePhoneNumberFromString || window.libphonenumber?.parsePhoneNumber;

    if (!parser) {
        return null;
    }

    try {
        return parser(phone, {
            defaultCallingCode: callingCode,
            extract: false,
        });
    } catch (error) {
        return null;
    }
}

function validateMobileNumber(phone, location = profileDetailFields.location?.textContent || "") {
    const { code, national } = getPhoneParts(phone, location);
    const fullNumber = `+${code}${national}`;

    if (!national) {
        return {
            isValid: true,
            message: "",
        };
    }

    const phoneNumber = parsePhoneNumberStrict(fullNumber, code);

    if (phoneNumber) {
        if (!phoneNumber.isPossible()) {
            return {
                isValid: false,
                message: "Number length is not valid for this country code.",
            };
        }

        if (!phoneNumber.isValid()) {
            return {
                isValid: false,
                message: "Number is not valid for the selected country code.",
            };
        }

        const numberType = phoneNumber.getType?.();

        if (numberType && !["MOBILE", "FIXED_LINE_OR_MOBILE"].includes(numberType)) {
            return {
                isValid: false,
                message: "This does not look like a mobile number.",
            };
        }

        return {
            isValid: true,
            message: `Valid mobile number: ${phoneNumber.number}`,
        };
    }

    if (national.length < 6) {
        return {
            isValid: false,
            message: "Number is too short for a genuine mobile number.",
        };
    }

    if (`${code}${national}`.length > 15) {
        return {
            isValid: false,
            message: "International numbers cannot be more than 15 digits.",
        };
    }

    if (/^(\d)\1+$/.test(national)) {
        return {
            isValid: false,
            message: "Number looks fake. Use a genuine mobile number.",
        };
    }

    if (/^(123456|012345|987654|000000)/.test(national)) {
        return {
            isValid: false,
            message: "Number pattern looks invalid.",
        };
    }

    return {
        isValid: true,
        message: `Valid format: +${code}${national}`,
    };
}

function updatePhoneValidation() {
    if (!editProfileInputs.phone || !phoneValidation || !phoneBuilder) {
        return true;
    }

    const validation = validateMobileNumber(
        editProfileInputs.phone.value,
        editProfileInputs.location?.value || profileDetailFields.location?.textContent || ""
    );

    phoneValidation.textContent = validation.message;
    phoneValidation.classList.toggle("is-valid", Boolean(validation.message) && validation.isValid);
    phoneValidation.classList.toggle("is-invalid", !validation.isValid);
    phoneBuilder.classList.toggle("is-valid", Boolean(validation.message) && validation.isValid);
    phoneBuilder.classList.toggle("is-invalid", !validation.isValid);
    editProfileInputs.phone.setCustomValidity(validation.isValid ? "" : validation.message);

    return validation.isValid;
}

function setCountryCodeMenuOpen(isOpen) {
    if (!phoneCodePicker || !phoneCodeToggle || !phoneCodeMenu) {
        return;
    }

    phoneCodePicker.classList.toggle("is-open", isOpen);
    phoneCodeToggle.setAttribute("aria-expanded", String(isOpen));
    phoneCodeMenu.hidden = !isOpen;
}

function closePremiumSelects(exceptSelect = null) {
    premiumSelects.forEach((select) => {
        if (select === exceptSelect) {
            return;
        }

        select.classList.remove("is-open");
        select.classList.remove("opens-up");
        select.querySelector(".premium-select-button")?.setAttribute("aria-expanded", "false");
        const menu = select.querySelector(".premium-select-menu");
        if (menu) {
            menu.hidden = true;
        }
    });
}

function setPremiumSelectValue(select, value) {
    const inputName = select.dataset.input;
    const input = editProfileInputs[inputName];
    const label = select.querySelector("[data-premium-select-label]");
    const options = getPremiumSelectOptions(inputName);
    const cleanValue = options.includes(value) ? value : options[0] || "";

    if (input) {
        input.value = cleanValue;
    }

    if (label) {
        label.textContent = cleanValue;
    }

    select.querySelectorAll(".premium-select-option").forEach((option) => {
        option.classList.toggle("is-selected", option.dataset.value === cleanValue);
    });
}

function positionPremiumSelectMenu(select) {
    const menu = select.querySelector(".premium-select-menu");
    const button = select.querySelector(".premium-select-button");

    if (!menu || !button) {
        return;
    }

    const buttonRect = button.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - buttonRect.bottom;
    const spaceAbove = buttonRect.top;
    const shouldOpenUp = spaceBelow < 240 && spaceAbove > spaceBelow;

    select.classList.toggle("opens-up", shouldOpenUp);
    menu.style.maxHeight = `${Math.max(140, Math.min(210, (shouldOpenUp ? spaceAbove : spaceBelow) - 24))}px`;
}

function syncPremiumSelectsFromInputs() {
    premiumSelects.forEach((select) => {
        const input = editProfileInputs[select.dataset.input];
        setPremiumSelectValue(select, input?.value || "");
    });
}

function initPremiumSelects() {
    premiumSelects.forEach((select) => {
        const options = String(select.dataset.options || "").split("|").filter(Boolean);
        const input = editProfileInputs[select.dataset.input];
        const selectedValue = options.includes(input?.value) ? input.value : options[0] || "";

        select.innerHTML = `
            <button class="premium-select-button" type="button" aria-expanded="false">
                <span data-premium-select-label>${selectedValue}</span>
                <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path d="m7 10 5 5 5-5"></path>
                </svg>
            </button>
            <div class="premium-select-menu" hidden>
                ${options.map((option) => `<button class="premium-select-option" type="button" data-value="${option}">${option}</button>`).join("")}
            </div>
        `;

        setPremiumSelectValue(select, selectedValue);

        const button = select.querySelector(".premium-select-button");
        const menu = select.querySelector(".premium-select-menu");

        button?.addEventListener("click", (event) => {
            event.stopPropagation();
            const isOpen = menu?.hidden ?? true;
            closePremiumSelects(select);
            select.classList.toggle("is-open", isOpen);
            button.setAttribute("aria-expanded", String(isOpen));
            if (menu) {
                menu.hidden = !isOpen;
                if (isOpen) {
                    positionPremiumSelectMenu(select);
                    menu.querySelector(".is-selected")?.scrollIntoView({ block: "nearest" });
                }
            }
        });

        menu?.addEventListener("click", (event) => {
            event.stopPropagation();
        });

        select.querySelectorAll(".premium-select-option").forEach((option) => {
            option.addEventListener("click", () => {
                setPremiumSelectValue(select, option.dataset.value || option.textContent || "");
                closePremiumSelects();
                button?.focus();
            });
        });
    });
}

function repositionOpenPremiumSelects() {
    premiumSelects
        .filter((select) => select.classList.contains("is-open"))
        .forEach(positionPremiumSelectMenu);
}

function populateCountryCodeMenu() {
    if (!phoneCodeMenu || phoneCodeMenu.children.length) {
        return;
    }

    phoneCodeMenu.setAttribute("role", "listbox");

    countryCallingCodeOptions.forEach(([country, code]) => {
        const cleanCode = code.replace(/\D/g, "");
        const option = document.createElement("button");
        option.className = "country-code-option";
        option.type = "button";
        option.dataset.code = cleanCode;
        option.setAttribute("role", "option");
        option.innerHTML = `<span>${country}</span><span>+${code}</span>`;
        option.addEventListener("click", () => {
            setPhoneCode(cleanCode);
            syncPhoneInputCountryCode();
            updatePhoneValidation();
            setCountryCodeMenuOpen(false);
            phoneCodeToggle?.focus();
        });
        phoneCodeMenu.appendChild(option);
    });

    setPhoneCode(defaultCallingCode);
}

function syncPhoneInputCountryCode() {
    if (!editProfileInputs.phone) {
        return;
    }

    const phoneParts = getPhoneParts(
        editProfileInputs.phone.value,
        editProfileInputs.location?.value || profileDetailFields.location?.textContent || ""
    );
    setPhoneCode(phoneParts.code);

    if (editProfileInputs.phone.value !== phoneParts.national) {
        editProfileInputs.phone.value = phoneParts.national;
    }

    updatePhoneValidation();
}

function formatDobValue(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

function parseDobValue(value) {
    const cleanValue = String(value || "");
    const match = cleanValue.match(/^(\d{2})-(\d{2})-(\d{4})$/);

    if (match) {
        const [, day, month, year] = match;
        const date = new Date(Number(year), Number(month) - 1, Number(day));

        return Number.isNaN(date.getTime()) ? null : date;
    }

    const isoMatch = cleanValue.match(/^(\d{4})-(\d{2})-(\d{2})$/);

    if (!isoMatch) {
        return null;
    }

    const [, year, month, day] = isoMatch;
    const date = new Date(Number(year), Number(month) - 1, Number(day));

    return Number.isNaN(date.getTime()) ? null : date;
}

function setDobCalendarOpen(isOpen) {
    if (!dobPicker || !dobCalendar) {
        return;
    }

    dobPicker.classList.toggle("is-open", isOpen);
    dobCalendar.hidden = !isOpen;
}

function renderDobCalendar() {
    if (!dobCalendar) {
        return;
    }

    const selectedDate = parseDobValue(editProfileInputs.dob?.value);
    const year = visibleDobDate.getFullYear();
    const month = visibleDobDate.getMonth();
    const monthLabel = visibleDobDate.toLocaleString("en-US", { month: "long" });
    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: 101 }, (_, index) => currentYear - index);
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const previousMonthDays = new Date(year, month, 0).getDate();
    const cells = [];

    for (let index = firstDay - 1; index >= 0; index -= 1) {
        cells.push({
            label: previousMonthDays - index,
            muted: true,
        });
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
        cells.push({
            label: day,
            date: new Date(year, month, day),
            muted: false,
        });
    }

    while (cells.length % 7 !== 0) {
        cells.push({
            label: cells.length - firstDay - daysInMonth + 1,
            muted: true,
        });
    }

    dobCalendar.innerHTML = `
        <div class="dob-calendar-header">
            <button type="button" data-dob-prev aria-label="Previous month">&#8592;</button>
            <div class="dob-calendar-title">
                <button class="dob-title-box" type="button" data-dob-year-toggle aria-expanded="false">
                    <strong>${monthLabel}</strong>
                    <span>${year}</span>
                </button>
            </div>
            <button type="button" data-dob-next aria-label="Next month">&#8594;</button>
        </div>
        <div class="dob-year-panel" data-dob-year-panel hidden>
            ${yearOptions.map((optionYear) => `<button class="dob-year-option${optionYear === year ? " is-selected" : ""}" type="button" data-dob-year="${optionYear}">${optionYear}</button>`).join("")}
        </div>
        <div class="dob-weekdays" aria-hidden="true">
            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
        </div>
        <div class="dob-days">
            ${cells.map((cell) => {
                const isSelected = selectedDate &&
                    cell.date &&
                    selectedDate.getFullYear() === cell.date.getFullYear() &&
                    selectedDate.getMonth() === cell.date.getMonth() &&
                    selectedDate.getDate() === cell.date.getDate();

                const dobValue = cell.date ? formatDobValue(cell.date) : "";
                return `<button class="dob-day${cell.muted ? " is-muted" : ""}${isSelected ? " is-selected" : ""}" type="button" ${cell.date ? `data-dob-day="${dobValue}"` : "disabled"}>${cell.label}</button>`;
            }).join("")}
        </div>
    `;

    dobCalendar.querySelector("[data-dob-prev]")?.addEventListener("click", () => {
        visibleDobDate = new Date(year, month - 1, 1);
        renderDobCalendar();
    });

    dobCalendar.querySelector("[data-dob-next]")?.addEventListener("click", () => {
        visibleDobDate = new Date(year, month + 1, 1);
        renderDobCalendar();
    });

    const yearPanel = dobCalendar.querySelector("[data-dob-year-panel]");
    const yearToggle = dobCalendar.querySelector("[data-dob-year-toggle]");

    yearToggle?.addEventListener("click", () => {
        const isOpen = yearPanel?.hidden;
        yearPanel.hidden = !isOpen;
        yearToggle.setAttribute("aria-expanded", String(isOpen));
        if (isOpen) {
            yearPanel.querySelector(".is-selected")?.scrollIntoView({ block: "center" });
        }
    });

    dobCalendar.querySelectorAll("[data-dob-year]").forEach((button) => {
        button.addEventListener("click", () => {
            visibleDobDate = new Date(Number(button.dataset.dobYear), month, 1);
            renderDobCalendar();
        });
    });

    dobCalendar.querySelectorAll("[data-dob-day]").forEach((button) => {
        button.addEventListener("click", () => {
            const date = parseDobValue(button.dataset.dobDay);
            if (!date) {
                return;
            }
            editProfileInputs.dob.value = formatDobValue(date);
            setDobCalendarOpen(false);
            editProfileInputs.dob.focus();
        });
    });
}

function getBrowserPosition(options = {}) {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation is not supported in this browser."));
            return;
        }

        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}

async function verifyCurrentLocation() {
    if (!editProfileInputs.location || isVerifyingLocation) {
        return;
    }

    isVerifyingLocation = true;
    editProfileInputs.location.disabled = true;
    setLocationStatus("Checking your current location...", "");

    try {
        const position = await getBrowserPosition({
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 12000,
        });
        const location = await reverseGeocodeLocation(position.coords);

        if (!location) {
            throw new Error("Unable to resolve location.");
        }

        isApplyingVerifiedLocation = true;
        editProfileInputs.location.value = location;
        isApplyingVerifiedLocation = false;
        window.localStorage.setItem(locationVerificationStorageKey, JSON.stringify({
            location,
            latitude: Number(position.coords.latitude.toFixed(5)),
            longitude: Number(position.coords.longitude.toFixed(5)),
            verifiedAt: new Date().toISOString(),
        }));
        setLocationStatus("Verified using current device location.", "valid");
        syncPhoneInputCountryCode();
    } catch (error) {
        console.error("Unable to verify location:", error);
        setLocationStatus("Location permission is needed to verify this.", "invalid");
    } finally {
        editProfileInputs.location.disabled = false;
        isVerifyingLocation = false;
    }
}

function formatUsername(username) {
    const cleanUsername = getUsernameCore(username);
    return cleanUsername ? `@${cleanUsername}-vextron` : "";
}

function formatAccountUsername(username) {
    const cleanUsername = getUsernameCore(username);
    return cleanUsername ? `${cleanUsername}-vextron` : "";
}

function setTextContent(element, value, fallback = "Not Added") {
    if (!element) {
        return;
    }

    const cleanValue = String(value || "").trim();
    element.textContent = cleanValue || fallback;
}

function isNotAddedValue(value) {
    return String(value || "").trim().toLowerCase() === "not added";
}

function setOptionalTextContent(element, value) {
    if (!element) {
        return;
    }

    element.textContent = String(value || "").trim();
}

function normalizeProfileEmail(email) {
    const cleanEmail = String(email || "").trim();
    const mockEmails = new Set(["raza@mail.com"]);

    return mockEmails.has(cleanEmail.toLowerCase()) ? "" : cleanEmail;
}

function hashAccountSeed(seed) {
    return Array.from(String(seed || ""))
        .reduce((hash, character) => ((hash << 5) - hash + character.charCodeAt(0)) >>> 0, 2166136261)
        .toString(36)
        .toUpperCase()
        .padStart(6, "0")
        .slice(0, 6);
}

function createSystemAccountId(seed = "") {
    const year = new Date().getFullYear();
    const suffix = seed ? hashAccountSeed(seed) : crypto.randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase();

    return `VX-${year}-${suffix}`;
}

function setAccountId(accountId) {
    if (!profileDetailFields.accountId) {
        return;
    }

    profileDetailFields.accountId.textContent = accountId;
}

function ensureAccountId(user) {
    const metadataAccountId = user?.user_metadata?.account_id || user?.user_metadata?.accountId;
    const savedAccountId = window.localStorage.getItem(accountIdStorageKey);
    const accountId = metadataAccountId || (user?.id ? createSystemAccountId(user.id) : savedAccountId || createSystemAccountId());

    window.localStorage.setItem(accountIdStorageKey, accountId);
    setAccountId(accountId);

    return accountId;
}

function trimAboutText(value) {
    return String(value || "").slice(0, aboutCharacterLimit);
}

function getDetectedTimezoneLabel() {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    const offsetMinutes = -new Date().getTimezoneOffset();
    const sign = offsetMinutes >= 0 ? "+" : "-";
    const absoluteMinutes = Math.abs(offsetMinutes);
    const hours = Math.floor(absoluteMinutes / 60);
    const minutes = String(absoluteMinutes % 60).padStart(2, "0");
    const shortZone = timeZone.split("/").pop()?.replace(/_/g, " ") || timeZone;

    return `${shortZone} / UTC ${sign}${hours}:${minutes}`;
}

function getPremiumSelectOptions(inputName) {
    const select = premiumSelects.find((item) => item.dataset.input === inputName);
    return String(select?.dataset.options || "").split("|").filter(Boolean);
}

function normalizePremiumSelectValue(inputName, value) {
    const options = getPremiumSelectOptions(inputName);
    return options.includes(value) ? value : options[0] || "";
}

function getEditableFieldValue(element) {
    const value = element?.textContent || "";
    return isNotAddedValue(value) ? "" : value;
}

function sanitizeProfileDetails(details = {}) {
    const cleanDetails = { ...details };

    cleanDetails.name = String(cleanDetails.name || "").trim() || "Mohammed Raza";
    cleanDetails.username = getUsernameCore(cleanDetails.username || "");
    if (cleanDetails.username === "raza") {
        cleanDetails.username = "";
    }
    cleanDetails.email = normalizeProfileEmail(cleanDetails.email);
    cleanDetails.phone = cleanDetails.phone ? formatMobileNumber(cleanDetails.phone, cleanDetails.location) : "";
    cleanDetails.dob = isNotAddedValue(cleanDetails.dob) ? "" : String(cleanDetails.dob || "").trim();
    cleanDetails.location = isNotAddedValue(cleanDetails.location) ? "" : String(cleanDetails.location || "").trim();
    cleanDetails.timezone = getDetectedTimezoneLabel();
    cleanDetails.about = isNotAddedValue(cleanDetails.about) ? "" : trimAboutText(cleanDetails.about);
    cleanDetails.tradingStyle = normalizePremiumSelectValue("tradingStyle", cleanDetails.tradingStyle);
    cleanDetails.markets = normalizePremiumSelectValue("markets", cleanDetails.markets);
    cleanDetails.timeframe = normalizePremiumSelectValue("timeframe", cleanDetails.timeframe);
    cleanDetails.risk = normalizePremiumSelectValue("risk", cleanDetails.risk);
    cleanDetails.holding = normalizePremiumSelectValue("holding", cleanDetails.holding);
    cleanDetails.pairs = normalizePremiumSelectValue("pairs", cleanDetails.pairs);

    return cleanDetails;
}

function initializeProfileRuntimeDefaults() {
    setTextContent(profileDetailFields.timezone, getDetectedTimezoneLabel(), getDetectedTimezoneLabel());
}

function updateAboutCounter() {
    if (!editProfileInputs.about || !aboutCounter) {
        return;
    }

    if (editProfileInputs.about.value.length > aboutCharacterLimit) {
        editProfileInputs.about.value = trimAboutText(editProfileInputs.about.value);
    }

    const count = editProfileInputs.about.value.length;
    aboutCounter.textContent = `${count} / ${aboutCharacterLimit}`;
    aboutCounter.classList.toggle("is-near-limit", count >= aboutCharacterLimit * 0.9);
}

function getVerifiedLocationRecord() {
    try {
        return JSON.parse(window.localStorage.getItem(locationVerificationStorageKey) || "null");
    } catch (error) {
        return null;
    }
}

function setLocationStatus(message = "", state = "") {
    if (!locationStatus) {
        return;
    }

    locationStatus.textContent = message;
    locationStatus.classList.toggle("is-valid", state === "valid");
    locationStatus.classList.toggle("is-invalid", state === "invalid");
}

function applyProfileDetails(details) {
    const cleanDetails = sanitizeProfileDetails(details);

    setTextContent(profileDetailFields.name, cleanDetails.name, "Full Name");
    setOptionalTextContent(profileDetailFields.username, formatUsername(cleanDetails.username));
    setTextContent(profileDetailFields.accountUsername, formatAccountUsername(cleanDetails.username), "Not Added");
    setTextContent(profileDetailFields.email, cleanDetails.email);
    setTextContent(profileDetailFields.phone, cleanDetails.phone);
    setTextContent(profileDetailFields.dob, cleanDetails.dob);
    setOptionalTextContent(profileDetailFields.location, cleanDetails.location);
    setTextContent(profileDetailFields.timezone, cleanDetails.timezone, getDetectedTimezoneLabel());
    setTextContent(profileDetailFields.about, cleanDetails.about);
    setTextContent(profileDetailFields.tradingStyle, cleanDetails.tradingStyle);
    setTextContent(profileDetailFields.markets, cleanDetails.markets);
    setTextContent(profileDetailFields.timeframe, cleanDetails.timeframe);
    setTextContent(profileDetailFields.risk, cleanDetails.risk);
    setTextContent(profileDetailFields.holding, cleanDetails.holding);
    setTextContent(profileDetailFields.pairs, cleanDetails.pairs);
}

function readProfileDetailsFromInputs() {
    const details = Object.fromEntries(
        Object.entries(editProfileInputs).map(([key, input]) => [key, input?.value || ""])
    );

    return sanitizeProfileDetails(details);
}

function syncEditProfileInputs(details) {
    const cleanDetails = sanitizeProfileDetails(details);

    Object.entries(editProfileInputs).forEach(([key, input]) => {
        if (!input) {
            return;
        }

        if (key === "phone") {
            const phoneParts = getPhoneParts(cleanDetails.phone, cleanDetails.location);
            setPhoneCode(phoneParts.code);
            input.value = phoneParts.national;
            return;
        }

        input.value = key === "about" ? trimAboutText(cleanDetails[key]) : cleanDetails[key] || "";
    });
    updateAboutCounter();
    syncPremiumSelectsFromInputs();
}

function getCurrentProfileDetails() {
    return sanitizeProfileDetails({
        name: profileDetailFields.name?.textContent || "",
        username: getUsernameCore(profileDetailFields.username?.textContent || ""),
        email: getEditableFieldValue(profileDetailFields.email),
        phone: getEditableFieldValue(profileDetailFields.phone),
        dob: getEditableFieldValue(profileDetailFields.dob),
        location: getEditableFieldValue(profileDetailFields.location),
        timezone: profileDetailFields.timezone?.textContent || getDetectedTimezoneLabel(),
        about: getEditableFieldValue(profileDetailFields.about),
        tradingStyle: getEditableFieldValue(profileDetailFields.tradingStyle),
        markets: getEditableFieldValue(profileDetailFields.markets),
        timeframe: getEditableFieldValue(profileDetailFields.timeframe),
        risk: getEditableFieldValue(profileDetailFields.risk),
        holding: getEditableFieldValue(profileDetailFields.holding),
        pairs: getEditableFieldValue(profileDetailFields.pairs),
    });
}

function setEditProfileModalOpen(isOpen) {
    if (!editProfileModal) {
        return;
    }

    if (isOpen) {
        if (editProfileGrid) {
            editProfileGrid.scrollTop = 0;
        }
        closePremiumSelects();
        setDobCalendarOpen(false);
        syncEditProfileInputs(getCurrentProfileDetails());
        if (editProfileInputs.timezone) {
            editProfileInputs.timezone.value = getDetectedTimezoneLabel();
        }
        updatePhoneValidation();
        const verifiedRecord = getVerifiedLocationRecord();
        const currentLocation = editProfileInputs.location?.value || "";
        setLocationStatus(
            verifiedRecord?.location?.trim().toLowerCase() === currentLocation.trim().toLowerCase()
                ? "Verified using current device location."
                : "",
            verifiedRecord?.location?.trim().toLowerCase() === currentLocation.trim().toLowerCase() ? "valid" : ""
        );
    }

    editProfileModal.hidden = !isOpen;

    if (!isOpen) {
        editProfileOpen?.focus();
    }
}

function initEditProfileModal() {
    if (!editProfileOpen || !editProfileModal || !editProfileForm) {
        return;
    }

    populateCountryCodeMenu();
    initPremiumSelects();

    const savedDetails = JSON.parse(window.localStorage.getItem(editProfileStorageKey) || "null");

    editProfileInputs.username?.addEventListener("beforeinput", (event) => {
        if (!event.data || event.inputType?.startsWith("delete")) {
            return;
        }

        const input = event.currentTarget;
        const nextValue = `${input.value.slice(0, input.selectionStart || 0)}${event.data}${input.value.slice(input.selectionEnd || 0)}`;

        if (getUsernameCore(nextValue).length > usernameCharacterLimit) {
            event.preventDefault();
        }
    });

    editProfileInputs.username?.addEventListener("input", (event) => {
        const input = event.currentTarget;
        const limitedUsername = getUsernameCore(input.value);

        if (input.value !== limitedUsername) {
            input.value = limitedUsername;
        }
    });

    editProfileInputs.phone?.addEventListener("input", (event) => {
        syncPhoneInputCountryCode();
    });

    editProfileInputs.about?.addEventListener("input", updateAboutCounter);

    editProfileInputs.dob?.addEventListener("click", () => {
        const selectedDate = parseDobValue(editProfileInputs.dob.value);
        visibleDobDate = selectedDate || new Date();
        renderDobCalendar();
        setDobCalendarOpen(true);
    });

    dobToggle?.addEventListener("click", (event) => {
        event.stopPropagation();
        const selectedDate = parseDobValue(editProfileInputs.dob?.value);
        visibleDobDate = selectedDate || visibleDobDate || new Date();
        renderDobCalendar();
        setDobCalendarOpen(dobCalendar?.hidden ?? true);
    });

    dobPicker?.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    phoneCodeToggle?.addEventListener("click", (event) => {
        event.stopPropagation();
        setCountryCodeMenuOpen(phoneCodeMenu?.hidden ?? true);
    });

    phoneCodeMenu?.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    editProfileGrid?.addEventListener("scroll", repositionOpenPremiumSelects, { passive: true });
    window.addEventListener("resize", repositionOpenPremiumSelects);

    editProfileInputs.location?.addEventListener("click", verifyCurrentLocation);
    editProfileInputs.location?.addEventListener("focus", verifyCurrentLocation);
    editProfileInputs.location?.addEventListener("change", syncPhoneInputCountryCode);

    if (savedDetails) {
        const cleanSavedDetails = sanitizeProfileDetails(savedDetails);
        window.localStorage.setItem(editProfileStorageKey, JSON.stringify(cleanSavedDetails));
        applyProfileDetails(cleanSavedDetails);
    }

    editProfileOpen.addEventListener("click", () => {
        setEditProfileModalOpen(true);
    });

    editProfileCloseButtons.forEach((button) => {
        button.addEventListener("click", () => {
            setEditProfileModalOpen(false);
        });
    });

    editProfileModal.addEventListener("click", (event) => {
        if (event.target === editProfileModal) {
            setEditProfileModalOpen(false);
        }
    });

    editProfileForm.addEventListener("submit", (event) => {
        event.preventDefault();
        syncPhoneInputCountryCode();

        if (!updatePhoneValidation()) {
            editProfileInputs.phone?.reportValidity();
            editProfileInputs.phone?.focus();
            return;
        }

        const details = readProfileDetailsFromInputs();
        applyProfileDetails(details);
        window.localStorage.setItem(editProfileStorageKey, JSON.stringify(details));
        setEditProfileModalOpen(false);
    });
}

initEditProfileModal();
initializeProfileRuntimeDefaults();

function setProfileAvatar(imageSource) {
    if (!profileAvatar || !profileAvatarImage || !imageSource) {
        return;
    }

    profileAvatarImage.src = imageSource;
    profileAvatarImage.hidden = false;
    profileAvatar.classList.add("has-image");

    if (editAvatarPreview) {
        editAvatarPreview.src = imageSource;
        editAvatarPreview.hidden = false;
        editAvatarPreview.closest(".edit-profile-picture-preview")?.classList.add("has-image");
    }
}

function initProfileAvatarUpload() {
    if (!profileAvatar || !profileAvatarInput || !profileAvatarImage) {
        return;
    }

    let editorImage = null;
    let editorImageSource = "";
    let editorRotation = 0;

    const savedAvatar = window.localStorage.getItem(profileAvatarStorageKey);
    setProfileAvatar(savedAvatar);

    function resetAvatarEditorControls() {
        if (avatarZoom) {
            avatarZoom.value = "1";
        }

        if (avatarX) {
            avatarX.value = "0";
        }

        if (avatarY) {
            avatarY.value = "0";
        }

        editorRotation = 0;
    }

    function drawAvatarPreview() {
        if (!avatarPreview || !editorImage) {
            return;
        }

        const context = avatarPreview.getContext("2d");
        const size = avatarPreview.width;
        const zoom = Number(avatarZoom?.value || 1);
        const offsetX = Number(avatarX?.value || 0);
        const offsetY = Number(avatarY?.value || 0);
        const rotation = (editorRotation * Math.PI) / 180;
        const isSideways = Math.abs(editorRotation % 180) === 90;
        const sourceWidth = isSideways ? editorImage.naturalHeight : editorImage.naturalWidth;
        const sourceHeight = isSideways ? editorImage.naturalWidth : editorImage.naturalHeight;
        const scale = Math.max(size / sourceWidth, size / sourceHeight) * zoom;
        const drawWidth = editorImage.naturalWidth * scale;
        const drawHeight = editorImage.naturalHeight * scale;

        context.clearRect(0, 0, size, size);
        context.save();
        context.beginPath();
        context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        context.clip();
        context.translate(size / 2 + offsetX, size / 2 + offsetY);
        context.rotate(rotation);
        context.drawImage(editorImage, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
        context.restore();
    }

    function openAvatarEditor(imageSource) {
        if (!avatarEditor || !avatarPreview) {
            setProfileAvatar(imageSource);
            window.localStorage.setItem(profileAvatarStorageKey, imageSource);
            return;
        }

        editorImageSource = imageSource;
        editorImage = new Image();
        resetAvatarEditorControls();

        editorImage.addEventListener("load", drawAvatarPreview, { once: true });
        editorImage.src = editorImageSource;
        avatarEditor.hidden = false;
    }

    function closeAvatarEditor() {
        if (avatarEditor) {
            avatarEditor.hidden = true;
        }

        profileAvatarInput.value = "";
    }

    editAvatarUpload?.addEventListener("click", () => {
        profileAvatarInput.click();
    });

    profileAvatarInput.addEventListener("change", () => {
        const file = profileAvatarInput.files?.[0];

        if (!file) {
            return;
        }

        if (!file.type.startsWith("image/")) {
            profileAvatarInput.value = "";
            return;
        }

        const reader = new FileReader();

        reader.addEventListener("load", () => {
            const imageSource = String(reader.result || "");
            openAvatarEditor(imageSource);
        });

        reader.readAsDataURL(file);
    });

    [avatarZoom, avatarX, avatarY].forEach((control) => {
        control?.addEventListener("input", drawAvatarPreview);
    });

    avatarRotateLeft?.addEventListener("click", () => {
        editorRotation = (editorRotation - 90 + 360) % 360;
        drawAvatarPreview();
    });

    avatarRotateRight?.addEventListener("click", () => {
        editorRotation = (editorRotation + 90) % 360;
        drawAvatarPreview();
    });

    avatarReset?.addEventListener("click", () => {
        resetAvatarEditorControls();
        drawAvatarPreview();
    });

    avatarCancelButtons.forEach((button) => {
        button.addEventListener("click", closeAvatarEditor);
    });

    avatarEditor?.addEventListener("click", (event) => {
        if (event.target === avatarEditor) {
            closeAvatarEditor();
        }
    });

    avatarSave?.addEventListener("click", () => {
        if (!avatarPreview) {
            return;
        }

        const imageSource = avatarPreview.toDataURL("image/png");
        setProfileAvatar(imageSource);
        window.localStorage.setItem(profileAvatarStorageKey, imageSource);
        closeAvatarEditor();
    });
}

initProfileAvatarUpload();

document.addEventListener("click", () => {
    setPanelDropdownOpen(notificationToggle, notificationDropdown, false);
    setPanelDropdownOpen(mailToggle, mailDropdown, false);
    setCountryCodeMenuOpen(false);
    setDobCalendarOpen(false);
    closePremiumSelects();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        if (premiumSelects.some((select) => select.classList.contains("is-open"))) {
            closePremiumSelects();
            return;
        }

        if (dobCalendar && !dobCalendar.hidden) {
            setDobCalendarOpen(false);
            editProfileInputs.dob?.focus();
            return;
        }

        if (phoneCodeMenu && !phoneCodeMenu.hidden) {
            setCountryCodeMenuOpen(false);
            phoneCodeToggle?.focus();
            return;
        }

        if (activityModal && !activityModal.hidden) {
            setActivityModalOpen(false);
            return;
        }

        if (editProfileModal && !editProfileModal.hidden) {
            setEditProfileModalOpen(false);
            return;
        }

        if (avatarEditor && !avatarEditor.hidden) {
            avatarEditor.hidden = true;
            profileAvatarInput.value = "";
            profileAvatar?.focus();
            return;
        }

        const hadOpenPanel = Boolean(
            (notificationDropdown && !notificationDropdown.hidden) ||
            (mailDropdown && !mailDropdown.hidden)
        );

        setPanelDropdownOpen(notificationToggle, notificationDropdown, false);
        setPanelDropdownOpen(mailToggle, mailDropdown, false);

        if (hadOpenPanel) {
            (notificationToggle || mailToggle)?.focus();
        }
    }
});

function initSidebarScroller() {
    if (!sidebar || document.querySelector(".sidebar-scrollbar")) {
        return;
    }

    const scroller = document.createElement("div");
    const upArrow = document.createElement("button");
    const track = document.createElement("div");
    const thumb = document.createElement("div");
    const downArrow = document.createElement("button");
    let dragStartY = 0;
    let dragStartScrollTop = 0;
    let hideTimer = 0;
    let syncFrame = 0;
    let isDragging = false;

    scroller.className = "sidebar-scrollbar";
    scroller.setAttribute("aria-hidden", "true");
    upArrow.className = "sidebar-scrollbar-arrow is-up";
    upArrow.type = "button";
    upArrow.tabIndex = -1;
    upArrow.innerHTML = '<svg viewBox="0 0 24 24" focusable="false"><path d="m7 14 5-5 5 5"></path></svg>';
    track.className = "sidebar-scrollbar-track";
    thumb.className = "sidebar-scrollbar-thumb";
    downArrow.className = "sidebar-scrollbar-arrow is-down";
    downArrow.type = "button";
    downArrow.tabIndex = -1;
    downArrow.innerHTML = '<svg viewBox="0 0 24 24" focusable="false"><path d="m7 10 5 5 5-5"></path></svg>';
    track.appendChild(thumb);
    scroller.append(upArrow, track, downArrow);
    sidebar.insertAdjacentElement("afterend", scroller);

    function syncSidebarScroller() {
        const scrollableDistance = sidebar.scrollHeight - sidebar.clientHeight;
        const trackHeight = track.clientHeight;

        if (scrollableDistance <= 0 || trackHeight <= 0) {
            scroller.classList.remove("is-visible");
            return;
        }

        const thumbHeight = Math.max(28, (sidebar.clientHeight / sidebar.scrollHeight) * trackHeight);
        const maxThumbTop = Math.max(0, trackHeight - thumbHeight);
        const thumbTop = (sidebar.scrollTop / scrollableDistance) * maxThumbTop;

        thumb.style.height = `${thumbHeight}px`;
        thumb.style.transform = `translate(-50%, ${thumbTop}px)`;
        scroller.classList.add("is-visible");
    }

    function scheduleSidebarScrollerSync() {
        if (syncFrame) {
            return;
        }

        syncFrame = window.requestAnimationFrame(() => {
            syncFrame = 0;
            syncSidebarScroller();
        });
    }

    function showSidebarScroller() {
        if (!scroller.classList.contains("is-visible")) {
            return;
        }

        window.clearTimeout(hideTimer);
        scroller.classList.add("is-active");
        hideTimer = window.setTimeout(() => {
            if (isDragging) {
                return;
            }

            scroller.classList.remove("is-active");
        }, 900);
    }

    function scrollSidebarBy(amount) {
        sidebar.scrollBy({
            top: amount,
            behavior: "smooth",
        });
    }

    thumb.addEventListener("pointerdown", (event) => {
        isDragging = true;
        dragStartY = event.clientY;
        dragStartScrollTop = sidebar.scrollTop;
        thumb.setPointerCapture(event.pointerId);
        window.clearTimeout(hideTimer);
        scroller.classList.add("is-active");
    });

    thumb.addEventListener("pointermove", (event) => {
        if (!thumb.hasPointerCapture(event.pointerId)) {
            return;
        }

        const scrollableDistance = sidebar.scrollHeight - sidebar.clientHeight;
        const trackTravel = track.clientHeight - thumb.offsetHeight;

        if (scrollableDistance <= 0 || trackTravel <= 0) {
            return;
        }

        const dragDistance = event.clientY - dragStartY;
        sidebar.scrollTop = dragStartScrollTop + (dragDistance / trackTravel) * scrollableDistance;
        scheduleSidebarScrollerSync();
        showSidebarScroller();
    });

    function stopThumbDrag(event) {
        isDragging = false;

        if (thumb.hasPointerCapture(event.pointerId)) {
            thumb.releasePointerCapture(event.pointerId);
        }

        showSidebarScroller();
    }

    thumb.addEventListener("pointerup", stopThumbDrag);
    thumb.addEventListener("pointercancel", stopThumbDrag);

    upArrow.addEventListener("click", () => {
        scrollSidebarBy(-80);
        showSidebarScroller();
    });
    downArrow.addEventListener("click", () => {
        scrollSidebarBy(80);
        showSidebarScroller();
    });
    sidebar.addEventListener("pointerenter", showSidebarScroller);
    sidebar.addEventListener("focusin", showSidebarScroller);
    scroller.addEventListener("pointerenter", showSidebarScroller);
    scroller.addEventListener("pointerleave", () => {
        hideTimer = window.setTimeout(() => {
            if (isDragging) {
                return;
            }

            scroller.classList.remove("is-active");
        }, 500);
    });
    sidebar.addEventListener("scroll", () => {
        scheduleSidebarScrollerSync();
        showSidebarScroller();
    }, { passive: true });
    window.addEventListener("resize", () => {
        syncSidebarScroller();
        showSidebarScroller();
    });
    window.requestAnimationFrame(() => {
        syncSidebarScroller();
        showSidebarScroller();
    });
}

initSidebarScroller();

function setDropdownOpen(group, isOpen) {
    if (!group) {
        return;
    }

    const toggle = group.querySelector("[data-nav-toggle]");

    group.classList.toggle("is-open", isOpen);
    toggle?.setAttribute("aria-expanded", String(isOpen));
    window.requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
}

function closeAllDropdowns() {
    navGroups.forEach((group) => setDropdownOpen(group, false));
    keepStaticSidebarDropdownsOpen();
}

function openAllDropdowns() {
    navGroups.forEach((group) => setDropdownOpen(group, true));
}

function keepStaticSidebarDropdownsOpen() {
    ["community-account"].forEach((groupName) => {
        const group = navGroups.find((navGroup) => navGroup.dataset.navGroup === groupName);
        setDropdownOpen(group, true);
    });
}

if (sidebar && brandToggle) {
    brandToggle.addEventListener("click", () => {
        const isCollapsed = sidebar.classList.toggle("is-collapsed");

        if (isCollapsed) {
            window.sessionStorage.removeItem("vextron_keep_nav_group_open");
            closeAllDropdowns();
        } else {
            openAllDropdowns();
        }

        brandToggle.setAttribute("aria-expanded", String(!isCollapsed));
        brandToggle.setAttribute(
            "aria-label",
            isCollapsed ? "Expand sidebar" : "Collapse sidebar"
        );
    });
}

navGroups.forEach((group) => {
    const toggle = group.querySelector("[data-nav-toggle]");

    toggle?.addEventListener("click", () => {
        const isStaticGroup = group.dataset.navGroup === "community-account";

        if (isStaticGroup) {
            keepStaticSidebarDropdownsOpen();
            toggle.blur();
            return;
        }

        setDropdownOpen(group, !group.classList.contains("is-open"));
    });
});

groupedPageLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const group = link.closest("[data-nav-group]");
        const groupName = group?.dataset.navGroup;

        if (groupName) {
            window.sessionStorage.setItem("vextron_keep_nav_group_open", groupName);
        }
    });
});

function syncCurrentPageLink() {
    const currentPage = document.body.dataset.page || "dashboard";

    pageLinks.forEach((link) => {
        const isCurrent = link.dataset.pageLink === currentPage;

        link.classList.toggle("is-current", isCurrent);

        if (isCurrent) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    navGroups.forEach((group) => {
        const isCurrentGroup = Boolean(
            group.querySelector(`.nav-dropdown [data-page-link="${currentPage}"]`)
        );

        group.classList.toggle("is-current", isCurrentGroup);
    });
}

syncCurrentPageLink();
keepStaticSidebarDropdownsOpen();

const openGroupName = window.sessionStorage.getItem("vextron_keep_nav_group_open");

if (openGroupName) {
    const groupToOpen = navGroups.find((group) => group.dataset.navGroup === openGroupName);

    setDropdownOpen(groupToOpen, true);
    window.sessionStorage.removeItem("vextron_keep_nav_group_open");
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
    const token = session.access_token;
    let accountState = null;

    try {
        accountState = await fetchAccountState(token);
    } catch (error) {
        console.error("Unable to load account payment state:", error);
        setPaymentStatus("Checking payment access. Continue to payment if your plan is not active yet.", true);
    }

    const profilePlan = accountState?.profile?.selected_plan || "";
    const profileBillingPeriod = accountState?.profile?.selected_billing_period || "";
    const pendingPlan = window.localStorage.getItem("vextron_pending_plan");
    const pendingBillingPeriod = window.localStorage.getItem("vextron_pending_billing_period");
    const savedPlan = metadata.selected_plan || metadata.plan || "";
    let selectedPlan = profilePlan || savedPlan || pendingPlan || "none";

    if (pendingPlan && pendingPlan !== savedPlan && client) {
        try {
            await client.auth.updateUser({
                data: {
                    selected_plan: pendingPlan,
                    selected_billing_period: pendingBillingPeriod || profileBillingPeriod || getSelectedBillingPeriod(user),
                },
            });
            selectedPlan = pendingPlan;
        } catch (error) {
            console.error("Unable to save selected plan:", error);
        }
    }

    ensureAccountId(user);
    updateUpgradeCard({
        session,
        user,
        selectedPlan,
        subscription: accountState?.subscription,
    });
    updatePaidBadge(accountState?.subscription);
    updateProfileLocation(user);
    await requirePaymentBeforeAccess({
        session,
        user,
        selectedPlan,
        accountState,
        billingPeriod: profileBillingPeriod || pendingBillingPeriod || getSelectedBillingPeriod(user),
    });
}

function setProfileLocation(location) {
    if (!profileLocation || !location) {
        return;
    }

    profileLocation.textContent = location;
}

function getSavedProfileLocation(user) {
    const metadata = user?.user_metadata || {};
    const savedLocation = metadata.location || metadata.profile_location;

    if (savedLocation) {
        return savedLocation;
    }

    const locationParts = [
        metadata.city,
        metadata.state || metadata.region,
        metadata.country,
    ].filter(Boolean);

    return locationParts.join(", ");
}

async function reverseGeocodeLocation({ latitude, longitude }) {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    );
    const result = await response.json().catch(() => ({}));
    const address = result.address || {};
    const locationParts = [
        address.city || address.town || address.village || address.county,
        address.state,
        address.country,
    ].filter(Boolean);

    return locationParts.join(", ");
}

function updateProfileLocation(user) {
    const savedLocation = getSavedProfileLocation(user);

    if (savedLocation) {
        setProfileLocation(savedLocation);
        return;
    }

    if (!navigator.geolocation || !profileLocation) {
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            try {
                const location = await reverseGeocodeLocation(position.coords);
                setProfileLocation(location);
                window.localStorage.setItem(locationVerificationStorageKey, JSON.stringify({
                    location,
                    latitude: Number(position.coords.latitude.toFixed(5)),
                    longitude: Number(position.coords.longitude.toFixed(5)),
                    verifiedAt: new Date().toISOString(),
                }));
            } catch (error) {
                console.error("Unable to resolve profile location:", error);
            }
        },
        () => {},
        {
            enableHighAccuracy: false,
            maximumAge: 86400000,
            timeout: 8000,
        }
    );
}

function getSelectedBillingPeriod(user) {
    const metadata = user?.user_metadata || {};
    const billingPeriod = metadata.selected_billing_period || metadata.billing_period || "monthly";

    return billingPeriod === "yearly" ? "yearly" : "monthly";
}

async function fetchAccountState(token) {
    if (!token) {
        throw new Error("Missing session token.");
    }

    if (!window.VEXTRON_API_BASE_URL) {
        throw new Error("VEXTRON_API_BASE_URL is not configured.");
    }

    const profileResponse = await fetch(`${window.VEXTRON_API_BASE_URL}/api/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const profileResult = await profileResponse.json().catch(() => ({}));

    if (!profileResponse.ok) {
        throw new Error(profileResult.error || "Unable to check your subscription.");
    }

    return profileResult;
}

function normalizePlanName(plan) {
    const normalized = String(plan || "").toLowerCase();

    if (normalized.includes("elite")) {
        return "elite";
    }

    if (normalized.includes("pro")) {
        return "pro";
    }

    if (normalized.includes("basic")) {
        return "basic";
    }

    return "";
}

function isActiveSubscription(subscription) {
    return ["active", "trialing"].includes(subscription?.status);
}

function updatePaidBadge(subscription) {
    if (!paidBadge) {
        return;
    }

    paidBadge.hidden = !isActiveSubscription(subscription);
}

function getUpgradeTargetPlan({ selectedPlan, subscription }) {
    const activePlan = isActiveSubscription(subscription) ? normalizePlanName(subscription.plan) : "";
    const currentPlan = activePlan || normalizePlanName(selectedPlan);

    if (currentPlan === "pro") {
        return "elite";
    }

    if (currentPlan === "basic" || !currentPlan) {
        return "pro";
    }

    return "";
}

function updateUpgradeCard({ session, user, selectedPlan, subscription }) {
    if (!upgradeCard || !upgradeAction) {
        return;
    }

    const targetPlan = getUpgradeTargetPlan({ selectedPlan, subscription });

    if (!targetPlan) {
        upgradeCard.hidden = true;
        return;
    }

    const label = targetPlan === "elite" ? "Elite" : "Pro";
    const currentPlan = normalizePlanName(subscription?.plan) || normalizePlanName(selectedPlan) || "basic";

    upgradeCard.hidden = false;
    upgradeCard.dataset.targetPlan = targetPlan;
    upgradeCard.dataset.currentPlan = currentPlan;

    if (upgradeTitle) {
        upgradeTitle.textContent = `Upgrade To ${label}`;
    }

    if (upgradeBody) {
        upgradeBody.textContent = targetPlan === "elite"
            ? "Move beyond Pro with the full Elite toolkit and premium trading support."
            : "Step up from Basic with sharper tools, deeper education, and better market insight.";
    }

    upgradeAction.textContent = `Get ${label}`;
    upgradeAction.onclick = async () => {
        if (!session?.access_token) {
            window.location.href = "../login.html";
            return;
        }

        const billingPeriod = getSelectedBillingPeriod(user);

        try {
            upgradeAction.disabled = true;
            upgradeAction.textContent = "Loading...";
            window.localStorage.setItem("vextron_pending_plan", targetPlan);
            await startPlanCheckout({
                token: session.access_token,
                plan: targetPlan,
                billingPeriod,
            });
        } catch (error) {
            console.error("Unable to start upgrade checkout:", error);
            upgradeAction.disabled = false;
            upgradeAction.textContent = `Try ${label} Again`;
        }
    };
}

function hasActiveSubscription(subscription, selectedPlan) {
    const subscribedPlan = normalizePlanName(subscription?.plan);
    const requestedPlan = normalizePlanName(selectedPlan);

    if (!subscription || !subscribedPlan || !requestedPlan) {
        return false;
    }

    return isActiveSubscription(subscription) && subscribedPlan === requestedPlan;
}

function setPaymentStatus(message, canRetry = false, retryLabel = "Continue To Payment") {
    if (paymentGate) {
        paymentGate.hidden = false;
    }

    if (paymentStatus) {
        paymentStatus.textContent = message;
    }

    if (paymentRetry) {
        paymentRetry.hidden = !canRetry;

        if (canRetry) {
            paymentRetry.textContent = retryLabel;
        }
    }
}

function clearPendingCheckout() {
    window.localStorage.removeItem("vextron_pending_plan");
    window.localStorage.removeItem("vextron_pending_billing_period");
    window.localStorage.removeItem("vextron_checkout_started_at");
}

function isReturningFromCheckout(selectedPlan) {
    const pendingPlan = window.localStorage.getItem("vextron_pending_plan");
    const checkoutStartedAt = Number(window.localStorage.getItem("vextron_checkout_started_at") || 0);
    const startedRecently = checkoutStartedAt && Date.now() - checkoutStartedAt < 30 * 60 * 1000;

    return Boolean(startedRecently && normalizePlanName(pendingPlan) === normalizePlanName(selectedPlan));
}

async function waitForSubscriptionActivation({ token, selectedPlan, attempts = 6 }) {
    for (let index = 0; index < attempts; index += 1) {
        await new Promise((resolve) => window.setTimeout(resolve, index === 0 ? 2500 : 3500));

        const accountState = await fetchAccountState(token);

        if (hasActiveSubscription(accountState?.subscription, selectedPlan)) {
            return accountState;
        }
    }

    return null;
}

function showPlanRequiredGate() {
    setPaymentStatus("Choose a VEXTRON plan to unlock your dashboard.", true, "Choose A Plan");

    if (paymentRetry) {
        paymentRetry.onclick = () => {
            window.location.href = "../index.html#pricing";
        };
    }
}

function setCheckoutRetryAction({ token, plan, billingPeriod }) {
    if (!paymentRetry) {
        return;
    }

    paymentRetry.onclick = async () => {
        try {
            paymentRetry.disabled = true;
            await startPlanCheckout({ token, plan, billingPeriod });
        } catch (error) {
            console.error("Unable to open payment page:", error);
            setPaymentStatus(error.message || "Unable to open payment. Please try again.", true);
            paymentRetry.disabled = false;
        }
    };
}

async function requirePaymentBeforeAccess({ session, user, selectedPlan, accountState, billingPeriod }) {
    if (!session?.access_token) {
        return;
    }

    if (!normalizePlanName(selectedPlan)) {
        showPlanRequiredGate();
        return;
    }

    const token = session.access_token;

    try {
        const profileResult = accountState;

        if (profileResult) {
            updateUpgradeCard({
                session,
                user,
                selectedPlan,
                subscription: profileResult.subscription,
            });
            updatePaidBadge(profileResult.subscription);
        }

        if (hasActiveSubscription(profileResult?.subscription, selectedPlan)) {
            if (paymentGate) {
                paymentGate.hidden = true;
            }

            clearPendingCheckout();
            return;
        }

        if (isReturningFromCheckout(selectedPlan)) {
            setPaymentStatus("Verifying your payment. This can take a moment...", false);
            const activatedState = await waitForSubscriptionActivation({ token, selectedPlan });

            if (hasActiveSubscription(activatedState?.subscription, selectedPlan)) {
                clearPendingCheckout();
                updatePaidBadge(activatedState.subscription);

                if (paymentGate) {
                    paymentGate.hidden = true;
                }

                return;
            }

            setPaymentStatus("Payment is not active yet. Continue once Paddle finishes processing.", true);

            setCheckoutRetryAction({ token, plan: selectedPlan, billingPeriod });
            return;
        }

        await startPlanCheckout({ token, plan: selectedPlan, billingPeriod });
    } catch (error) {
        console.error("Payment gate failed:", error);
        setPaymentStatus(error.message || "We could not start payment automatically. Please continue to payment.", true);
        setCheckoutRetryAction({ token, plan: selectedPlan, billingPeriod });
    }
}

async function startPlanCheckout({ token, plan, billingPeriod }) {
    if (!window.VEXTRON_API_BASE_URL) {
        throw new Error("Payment API is not configured.");
    }

    if (!normalizePlanName(plan)) {
        throw new Error("Choose a valid plan before payment.");
    }

    setPaymentStatus("Preparing your secure payment...");
    window.localStorage.setItem("vextron_pending_plan", plan);
    window.localStorage.setItem("vextron_pending_billing_period", billingPeriod);
    window.localStorage.setItem("vextron_checkout_started_at", String(Date.now()));

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
