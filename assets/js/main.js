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