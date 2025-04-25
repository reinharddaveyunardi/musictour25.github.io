const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
        if (window.scrollY >= 900) {
            navbar.classList.add("scrolled__white");
        } else {
            navbar.classList.remove("scrolled__white");
        }
    } else {
        navbar.classList.remove("scrolled");
    }
});
