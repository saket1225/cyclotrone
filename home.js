var hamburger = document.querySelector(".hamburger");
var hamburger_open = false;

var menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    if (hamburger_open == false) {
        hamburger.classList.add("hamburger_open")
        menu.classList.add("menu_open")
        hamburger_open = true;
    }

    else if (hamburger_open == true) {
        hamburger.classList.remove("hamburger_open")
        menu.classList.remove("menu_open")
        hamburger_open = false;
    }
})




window.addEventListener("scroll", () => {
    var target = document.querySelector(".technoText")
    var scrolled = window.pageYOffset;
    var value = window.scrollY
    var rate = scrolled * 0.09;
    target.style.letterSpacing = ''+rate+'px'
})


website = document.querySelector(".website");
preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("loaded")
    website.classList.add("website_loaded")
})
