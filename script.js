const componentSlots = document.querySelectorAll("[data-component]");

async function loadComponent(slot) {
    const name = slot.dataset.component;
    const response = await fetch(`components/${name}.html?v=20260719-1`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(`Could not load component: ${name}`);
    }

    slot.innerHTML = await response.text();
}

async function loadComponents() {
    try {
        await Promise.all(Array.from(componentSlots, loadComponent));
        document.body.classList.add("components-ready");
        initSmoothAnchorLinks();
        initNavbarDropdowns();
        initScrollReveals();
        initSectionNavState();
        initForexCalculator();
        initPricingCards();
        initPricingPlanLinks();
        initGetStartedPlan();
        initFaqAccordion();
        initMarketAnalysisReport();
        scrollToInitialHash();
    } catch (error) {
        console.error(error);
    }
}

function initNavbarDropdowns() {
    const dropdowns = document.querySelectorAll(".nav-dropdown");

    dropdowns.forEach((dropdown) => {
        const trigger = dropdown.querySelector(".nav-dropdown-trigger");

        if (!trigger) {
            return;
        }

        const setExpanded = (isExpanded) => {
            trigger.setAttribute("aria-expanded", String(isExpanded));
        };

        dropdown.addEventListener("mouseenter", () => setExpanded(true));
        dropdown.addEventListener("mouseleave", () => setExpanded(false));
        dropdown.addEventListener("focusin", () => setExpanded(true));
        dropdown.addEventListener("focusout", (event) => {
            if (!dropdown.contains(event.relatedTarget)) {
                setExpanded(false);
            }
        });
    });
}

function initSmoothAnchorLinks() {
    const anchorLinks = document.querySelectorAll('a[href*="#"]');
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    anchorLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const url = new URL(link.getAttribute("href"), window.location.href);
            const targetId = url.hash;
            const isSamePage = url.pathname === window.location.pathname || url.pathname.endsWith("/index.html") && (window.location.pathname === "/" || window.location.pathname.endsWith("/index.html"));

            if (!targetId || targetId === "#") {
                return;
            }

            if (!isSamePage) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();
            scrollToSection(target, prefersReducedMotion ? "auto" : "smooth");
            history.pushState(null, "", targetId);
        });
    });
}

function scrollToSection(target, behavior = "smooth") {
    const navbar = document.querySelector(".navbar");
    const navOffset = navbar ? navbar.getBoundingClientRect().height : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset - 18;

    window.scrollTo({
        top: Math.max(top, 0),
        behavior,
    });
}

function scrollToInitialHash() {
    const targetId = window.location.hash;

    if (!targetId || targetId === "#") {
        return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
        return;
    }

    requestAnimationFrame(() => {
        scrollToSection(target, "auto");
    });
}

function initSectionNavState() {
    const pricingSection = document.querySelector("#pricing");
    const pricingLinks = document.querySelectorAll('a[href$="#pricing"]');

    if (!pricingSection || !pricingLinks.length || !("IntersectionObserver" in window)) {
        return;
    }

    const observer = new IntersectionObserver(
        ([entry]) => {
            pricingLinks.forEach((link) => {
                link.classList.toggle("is-active", entry.isIntersecting);
            });
        },
        {
            threshold: 0.25,
            rootMargin: "-18% 0px -48% 0px",
        }
    );

    observer.observe(pricingSection);
}

function initScrollReveals() {
    const revealSections = document.querySelectorAll(".why-vextron, .how-it-works, .premium-system, .forex-calculator, .technology-infrastructure, .pricing-section, .faq-section, .cta-section");

    if (!revealSections.length) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        revealSections.forEach((section) => section.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.22,
            rootMargin: "0px 0px -12% 0px",
        }
    );

    revealSections.forEach((section) => observer.observe(section));
}

function initGetStartedPlan() {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");

    if (!plan) {
        return;
    }

    const option = document.querySelector(`.start-plan-options input[value="${plan.toLowerCase()}"]`);

    if (option) {
        option.checked = true;
    }
}

function initPricingCards() {
    const pricingCards = document.querySelectorAll(".pricing-card");
    const billingButtons = document.querySelectorAll(".pricing-billing-option");
    const priceFormatter = new Intl.NumberFormat("en-US");

    function setBillingPeriod(period) {
        billingButtons.forEach((button) => {
            const isActive = button.dataset.billing === period;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        pricingCards.forEach((card) => {
            const price = card.querySelector("[data-price]");
            const periodLabel = card.querySelector("[data-period]");
            const nextPrice = period === "yearly" ? card.dataset.yearlyPrice : card.dataset.monthlyPrice;

            if (!price || !periodLabel || !nextPrice) {
                return;
            }

            price.textContent = `$${priceFormatter.format(Number(nextPrice))}`;
            periodLabel.textContent = period === "yearly" ? "/year" : "/month";
        });
    }

    billingButtons.forEach((button) => {
        button.addEventListener("click", () => {
            setBillingPeriod(button.dataset.billing || "monthly");
        });
    });

    pricingCards.forEach((card) => {
        card.addEventListener("click", (event) => {
            if (event.target.closest("a")) {
                return;
            }

            card.classList.toggle("is-front");
        });

        card.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") {
                return;
            }

            event.preventDefault();
            card.classList.toggle("is-front");
        });
    });

    setBillingPeriod("monthly");
}

function initPricingPlanLinks() {
    const planLinks = document.querySelectorAll("[data-checkout-plan]");

    if (!planLinks.length) {
        return;
    }

    planLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            const plan = link.dataset.checkoutPlan;
            const billingPeriod = getCurrentBillingPeriod();
            window.location.href = `get-started.html?plan=${encodeURIComponent(plan)}&billing=${encodeURIComponent(billingPeriod)}`;
        });
    });
}

function getCurrentBillingPeriod() {
    return document.querySelector(".pricing-billing-option.is-active")?.dataset.billing || "monthly";
}

function initFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");

    if (!faqItems.length) {
        return;
    }

    function setAnswerHeight(item) {
        const answer = item.querySelector(".faq-answer");

        if (!answer) {
            return;
        }

        answer.style.maxHeight = item.classList.contains("is-open") ? `${answer.scrollHeight}px` : "0px";
    }

    faqItems.forEach((item) => {
        const button = item.querySelector(".faq-question");

        if (!button) {
            return;
        }

        setAnswerHeight(item);

        button.addEventListener("click", () => {
            const willOpen = !item.classList.contains("is-open");

            faqItems.forEach((nextItem) => {
                const nextButton = nextItem.querySelector(".faq-question");
                nextItem.classList.remove("is-open");
                nextButton?.setAttribute("aria-expanded", "false");
                setAnswerHeight(nextItem);
            });

            item.classList.toggle("is-open", willOpen);
            button.setAttribute("aria-expanded", String(willOpen));
            setAnswerHeight(item);
        });
    });

    window.addEventListener("resize", () => {
        faqItems.forEach(setAnswerHeight);
    });
}

function initMarketAnalysisReport() {
    const report = document.querySelector("[data-market-analysis]");

    if (!report) {
        return;
    }

    const title = report.querySelector("[data-analysis-title]");
    const summary = report.querySelector("[data-analysis-summary]");
    const windowLabel = report.querySelector("[data-analysis-window]");
    const published = report.querySelector("[data-analysis-published]");
    const bias = report.querySelector("[data-analysis-bias]");
    const sections = report.querySelector("[data-analysis-sections]");
    const news = report.querySelector("[data-analysis-news]");

    fetchMarketAnalysis()
        .then((response) => response.ok ? response.json() : Promise.reject(new Error("Report unavailable")))
        .then((data) => {
            title.textContent = data.title || "Daily Market Analysis";
            summary.textContent = data.summary || "Latest VEXTRON market analysis will appear here.";
            windowLabel.textContent = data.researchWindow || "4:00 AM - 6:00 AM IST";
            published.textContent = data.publishedAt ? formatDateTime(data.publishedAt) : "Awaiting first publish";
            bias.textContent = data.marketBias || "Awaiting connected data sources";

            sections.innerHTML = (data.sections || []).map((section) => `
                <article class="analytics-report-card">
                    <span>${escapeHtml(section.label || "Market")}</span>
                    <h3>${escapeHtml(section.headline || "Analysis pending")}</h3>
                    <ul>
                        ${(section.points || []).map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
                    </ul>
                </article>
            `).join("");

            const importantNews = data.importantNews || [];
            news.classList.toggle("is-visible", importantNews.length > 0);
            news.innerHTML = importantNews.length ? `
                <span>Important News Filter</span>
                <ul>${importantNews.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            ` : "";
        })
        .catch(() => {
            title.textContent = "Daily Market Analysis";
            summary.textContent = "The latest report could not be loaded. Please check the publishing system.";
            published.textContent = "Unavailable";
        });
}

function fetchMarketAnalysis() {
    return fetch("api/market-analysis/latest", { cache: "no-store" })
        .catch(() => fetch("data/market-analysis/latest.json", { cache: "no-store" }))
        .then((response) => response.ok ? response : fetch("data/market-analysis/latest.json", { cache: "no-store" }));
}

function formatDateTime(value) {
    return new Intl.DateTimeFormat("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
    }).format(new Date(value));
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function initForexCalculator() {
    const pairSearch = document.querySelector("#calc-pair-search");
    const pairDropdown = document.querySelector("#calc-pair-dropdown");

    if (!pairSearch || !pairDropdown) {
        return;
    }

    const fields = {
        direction: document.querySelector("#calc-direction"),
        entry: document.querySelector("#calc-entry"),
        exit: document.querySelector("#calc-exit"),
        size: document.querySelector("#calc-size"),
        button: document.querySelector("#calc-button"),
        hero: document.querySelector("#calc-result-hero"),
        profitLoss: document.querySelector("#calc-profit-loss"),
        summary: document.querySelector("#calc-summary"),
        pipValue: document.querySelector("#calc-pip-value"),
        move: document.querySelector("#calc-move"),
        sizeOutput: document.querySelector("#calc-size-output"),
        directionOutput: document.querySelector("#calc-direction-output"),
    };

    const pairs = [
        "EUR/USD", "GBP/USD", "USD/JPY", "USD/CHF", "AUD/USD", "NZD/USD", "USD/CAD",
        "EUR/GBP", "EUR/JPY", "EUR/CHF", "EUR/AUD", "EUR/CAD", "EUR/NZD",
        "GBP/JPY", "GBP/CHF", "GBP/AUD", "GBP/CAD", "GBP/NZD",
        "AUD/JPY", "AUD/CHF", "AUD/CAD", "AUD/NZD", "NZD/JPY", "NZD/CHF", "NZD/CAD",
        "CAD/JPY", "CAD/CHF", "CHF/JPY", "USD/SGD", "USD/HKD", "USD/CNH", "USD/MXN",
        "USD/ZAR", "USD/TRY", "USD/NOK", "USD/SEK", "USD/DKK", "EUR/NOK", "EUR/SEK",
        "EUR/DKK", "EUR/TRY", "EUR/ZAR", "EUR/SGD", "EUR/HKD", "EUR/PLN", "EUR/HUF",
        "GBP/SGD", "GBP/NOK", "GBP/SEK", "GBP/DKK", "GBP/ZAR", "GBP/TRY", "GBP/PLN",
        "AUD/SGD", "AUD/NOK", "AUD/SEK", "AUD/DKK", "AUD/CNH", "NZD/SGD", "NZD/SEK",
        "CAD/SGD", "CHF/SGD", "NOK/JPY", "SEK/JPY", "ZAR/JPY", "TRY/JPY",
        "USD/PLN", "USD/CZK", "USD/HUF", "USD/THB", "SGD/JPY",
        "XAU/USD", "BTC/USD", "ETH/USD",
    ];

    const quoteToUsd = {
        USD: 1,
        JPY: 0.0067,
        CHF: 1.12,
        CAD: 0.73,
        AUD: 0.66,
        NZD: 0.61,
        GBP: 1.27,
        EUR: 1.08,
        SGD: 0.74,
        HKD: 0.13,
        CNH: 0.14,
        MXN: 0.055,
        ZAR: 0.055,
        TRY: 0.031,
        NOK: 0.095,
        SEK: 0.095,
        DKK: 0.145,
        PLN: 0.25,
        CZK: 0.046,
        HUF: 0.0029,
        THB: 0.027,
    };

    const money = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
    });

    pairs.forEach((pair) => {
        const option = document.createElement("button");
        const group = document.createElement("span");
        option.className = "pair-option";
        option.type = "button";
        option.dataset.pair = pair;
        option.textContent = pair;
        group.textContent = getPairGroup(pair);
        option.appendChild(group);
        option.addEventListener("mousedown", (event) => {
            event.preventDefault();
            pairSearch.value = pair;
            updatePairDefaults();
        });
        pairDropdown.appendChild(option);
    });

    function normalizePair(value) {
        const cleaned = value.trim().toUpperCase().replace(/[\s_-]+/g, "/");

        if (cleaned.includes("/")) {
            return cleaned;
        }

        if (cleaned.length === 6) {
            return `${cleaned.slice(0, 3)}/${cleaned.slice(3)}`;
        }

        if (cleaned.endsWith("USD") && cleaned.length > 3) {
            return `${cleaned.slice(0, -3)}/USD`;
        }

        return cleaned || "EUR/USD";
    }

    function getPipSize(pair) {
        if (pair === "BTC/USD" || pair === "ETH/USD") {
            return 1;
        }

        if (pair === "XAU/USD" || pair.endsWith("/JPY")) {
            return 0.01;
        }

        return 0.0001;
    }

    function getContractSize(pair) {
        if (pair === "BTC/USD" || pair === "ETH/USD") {
            return 1;
        }

        return pair === "XAU/USD" ? 100 : 100000;
    }

    function updatePairDefaults() {
        const pair = normalizePair(pairSearch.value);
        setActivePair(pair);

        if (pair === "BTC/USD") {
            fields.entry.value = 65000;
            fields.exit.value = 65500;
            fields.size.value = 1;
        } else if (pair === "ETH/USD") {
            fields.entry.value = 3400;
            fields.exit.value = 3460;
            fields.size.value = 1;
        } else if (pair === "XAU/USD") {
            fields.entry.value = 2341.2;
            fields.exit.value = 2351.2;
            fields.size.value = 1;
        } else if (pair.endsWith("/JPY")) {
            fields.entry.value = 151.86;
            fields.exit.value = 152.21;
            fields.size.value = 1;
        } else {
            fields.entry.value = 1.0842;
            fields.exit.value = 1.0892;
            fields.size.value = 1;
        }

        calculate();
        closePairDropdown();
    }

    function setActivePair(pair) {
        pairDropdown.querySelectorAll(".pair-option").forEach((option) => {
            option.classList.toggle("is-active", option.dataset.pair === pair);
        });
    }

    function getPairGroup(pair) {
        if (pair === "BTC/USD" || pair === "ETH/USD") {
            return "Crypto";
        }

        if (pair === "XAU/USD") {
            return "Gold";
        }

        if (pair.includes("JPY")) {
            return "JPY Cross";
        }

        if (pair.startsWith("USD/")) {
            return "USD Pair";
        }

        return "Forex";
    }

    function renderPairDropdown(list) {
        pairDropdown.innerHTML = "";

        list.forEach((pair) => {
            const option = document.createElement("button");
            const group = document.createElement("span");
            option.className = "pair-option";
            option.type = "button";
            option.dataset.pair = pair;
            option.textContent = pair;
            group.textContent = getPairGroup(pair);
            option.appendChild(group);
            option.addEventListener("mousedown", (event) => {
                event.preventDefault();
                pairSearch.value = pair;
                updatePairDefaults();
            });
            pairDropdown.appendChild(option);
        });

        setActivePair(normalizePair(pairSearch.value));
    }

    function openPairDropdown() {
        pairDropdown.classList.add("is-open");
    }

    function closePairDropdown() {
        pairDropdown.classList.remove("is-open");
    }

    function filterPairDropdown() {
        const term = pairSearch.value.trim().toUpperCase().replace(/[\s_-]+/g, "");
        const filteredPairs = pairs.filter((pair) => pair.replace("/", "").includes(term) || pair.includes(term));
        renderPairDropdown(filteredPairs.length ? filteredPairs : pairs);
        openPairDropdown();
    }

    function calculate() {
        const pair = normalizePair(pairSearch.value);
        setActivePair(pair);
        const quote = pair.split("/")[1];
        const pipSize = getPipSize(pair);
        const pipValue = pipSize * getContractSize(pair) * (quoteToUsd[quote] || 1);
        const direction = fields.direction.value;
        const entry = Number(fields.entry.value);
        const exit = Number(fields.exit.value);
        const size = Math.max(Number(fields.size.value), 0);
        const rawMove = entry > 0 ? (exit - entry) / pipSize : 0;
        const signedMove = direction === "sell" ? -rawMove : rawMove;
        const profitLoss = signedMove * pipValue * size;
        const isCrypto = pair === "BTC/USD" || pair === "ETH/USD";
        const unitLabel = isCrypto ? "coin" : "lot";
        const moveLabel = isCrypto ? "points" : "pips";
        const directionLabel = direction === "sell" ? "Sell" : "Buy";

        fields.hero.classList.toggle("is-profit", profitLoss >= 0);
        fields.hero.classList.toggle("is-loss", profitLoss < 0);
        fields.profitLoss.textContent = money.format(profitLoss);
        fields.summary.textContent = `${pair} ${directionLabel} from ${entry || 0} to ${exit || 0} with ${size.toFixed(2)} ${unitLabel}${size === 1 ? "" : "s"}.`;
        fields.pipValue.textContent = money.format(pipValue);
        fields.move.textContent = `${signedMove.toFixed(1)} ${moveLabel}`;
        fields.sizeOutput.textContent = `${size.toFixed(2)} ${unitLabel}${size === 1 ? "" : "s"}`;
        fields.directionOutput.textContent = directionLabel;
    }

    pairSearch.addEventListener("change", updatePairDefaults);
    pairSearch.addEventListener("focus", () => {
        renderPairDropdown(pairs);
        openPairDropdown();
    });
    pairSearch.addEventListener("input", filterPairDropdown);
    document.addEventListener("mousedown", (event) => {
        if (!pairDropdown.contains(event.target) && event.target !== pairSearch) {
            closePairDropdown();
        }
    });
    Object.values(fields).forEach((field) => {
        if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement) {
            field.addEventListener("input", calculate);
        }
    });
    fields.button.addEventListener("click", calculate);

    pairSearch.value = "EUR/USD";
    updatePairDefaults();
}

loadComponents();

