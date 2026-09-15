const header = document.getElementById("header");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelectorAll(".nav-link");


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

function handleHeaderScroll() {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", handleHeaderScroll);

handleHeaderScroll();


/* =========================================
   MOBILE MENU
========================================= */

menuToggle.addEventListener("click", () => {

    const isOpen =
        header.classList.toggle("nav-open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        header.classList.remove("nav-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if ("IntersectionObserver" in window && !reducedMotion.matches) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("is-pending");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach((element) => {
        element.classList.add("is-pending");
        revealObserver.observe(element);
    });

    reducedMotion.addEventListener("change", (event) => {
        if (event.matches) {
            revealObserver.disconnect();
            revealElements.forEach((element) => {
                element.classList.remove("is-pending");
            });
        }
    });
}
