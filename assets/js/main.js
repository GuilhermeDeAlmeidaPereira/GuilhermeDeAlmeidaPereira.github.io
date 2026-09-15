(() => {
    "use strict";

    const copyEmailButton = document.getElementById("copy-email");

    if (copyEmailButton) {
        let resetEmailTimer;
        copyEmailButton.addEventListener("click", async () => {
            const email = "almeida.gui.pereira@gmail.com";
            let copied = false;
            window.clearTimeout(resetEmailTimer);
            if (navigator.clipboard?.writeText) {
                try {
                    await navigator.clipboard.writeText(email);
                    copied = true;
                } catch {
                    // Try the local fallback when clipboard access is denied.
                }
            }
            if (!copied) {
                const textarea = document.createElement("textarea");
                const previousFocus = document.activeElement;
                textarea.value = email;
                textarea.setAttribute("readonly", "");
                textarea.setAttribute("aria-label", "Email address to copy");
                textarea.style.cssText = "position:fixed;left:-9999px;top:0;";
                document.body.appendChild(textarea);
                try {
                    textarea.select();
                    textarea.setSelectionRange(0, email.length);
                    copied = document.execCommand("copy");
                } catch {
                    copied = false;
                } finally {
                    textarea.remove();
                    previousFocus?.focus({ preventScroll: true });
                }
            }
            copyEmailButton.textContent = copied ? "Email copied ✓" : "Copy unavailable";
            resetEmailTimer = window.setTimeout(() => {
                copyEmailButton.textContent = "Copy Email";
            }, 2500);
        });
    }

    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
    const navLinks = [...document.querySelectorAll(".nav-link")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    /* =========================================
       COPYRIGHT YEAR
    ========================================= */

    const currentYear = document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    /* =========================================
       HEADER SCROLL STATE
    ========================================= */

    if (header) {
        const updateHeader = () => {
            header.classList.toggle("scrolled", window.scrollY > 40);
        };

        window.addEventListener("scroll", updateHeader, { passive: true });
        updateHeader();
    }

    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    if (header && menuToggle && nav) {
        const mobileViewport = window.matchMedia("(max-width: 800px)");

        const setMenuOpen = (isOpen) => {
            header.classList.toggle("nav-open", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute("aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu");
        };

        // Mobile links remain available when JavaScript is disabled.
        document.documentElement.classList.add("nav-ready");
        setMenuOpen(false);

        menuToggle.addEventListener("click", () => {
            setMenuOpen(!header.classList.contains("nav-open"));
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                setMenuOpen(false);
                // Move keyboard focus to the destination after hiding the menu.
                if (mobileViewport.matches) {
                    document.querySelector(link.getAttribute("href"))?.focus({ preventScroll: true });
                }
            });
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && header.classList.contains("nav-open")) {
                setMenuOpen(false);
                menuToggle.focus();
            }
        });

        document.addEventListener("click", (event) => {
            if (!header.contains(event.target)) {
                setMenuOpen(false);
            }
        });

        header.addEventListener("focusout", (event) => {
            if (!header.contains(event.relatedTarget)) {
                setMenuOpen(false);
            }
        });

        mobileViewport.addEventListener("change", (event) => {
            // Avoid leaving focus inside navigation that becomes hidden.
            if (event.matches && nav.contains(document.activeElement)) {
                menuToggle.focus();
            }
            setMenuOpen(false);
        });
    }

    /* =========================================
       ONE-TIME SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && !reducedMotion.matches) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("is-pending");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0 });

        revealElements.forEach((element) => {
            element.classList.add("is-pending");
            revealObserver.observe(element);
        });

        // Keyboard navigation must never land on an invisible link.
        document.addEventListener("focusin", (event) => {
            let element = event.target.closest(".reveal");
            while (element) {
                element.classList.remove("is-pending");
                revealObserver.unobserve(element);
                element = element.parentElement?.closest(".reveal");
            }
        });

        reducedMotion.addEventListener("change", (event) => {
            if (event.matches) {
                revealObserver.disconnect();
                revealElements.forEach((element) => element.classList.remove("is-pending"));
            }
        });
    }

    /* =========================================
       ACTIVE SECTION NAVIGATION
    ========================================= */

    const sections = navLinks
        .map((link) => document.getElementById(link.hash.slice(1)))
        .filter(Boolean);

    const setActiveSection = (id) => {
        navLinks.forEach((link) => {
            const active = link.hash === "#" + id;
            link.classList.toggle("active", active);
            if (active) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    const syncHash = () => {
        const section = sections.find((item) => "#" + item.id === window.location.hash);
        if (section) {
            setActiveSection(section.id);
        }
    };

    if (sections.length) {
        setActiveSection(sections[0].id);
        syncHash();
        window.addEventListener("hashchange", syncHash);

        if ("IntersectionObserver" in window) {
            let sectionObserver;
            let resizeFrame;

            const observeSections = () => {
                sectionObserver?.disconnect();
                const visibleSections = new Set();
                // A narrow viewport band gives long and short sections equal weight.
                const top = Math.round(window.innerHeight * 0.2);
                const bottom = Math.round(window.innerHeight * 0.65);

                sectionObserver = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            visibleSections.add(entry.target);
                        } else {
                            visibleSections.delete(entry.target);
                        }
                    });
                    const active = sections.filter((section) => visibleSections.has(section)).pop();
                    if (active) {
                        setActiveSection(active.id);
                    }
                }, { rootMargin: `-${top}px 0px -${bottom}px 0px`, threshold: 0 });

                sections.forEach((section) => sectionObserver.observe(section));
            };

            observeSections();
            window.addEventListener("resize", () => {
                window.cancelAnimationFrame(resizeFrame);
                resizeFrame = window.requestAnimationFrame(observeSections);
            }, { passive: true });
        }
    }
})();
