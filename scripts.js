window.addEventListener('scroll', function(e) {
    let distanceY = window.pageYOffset || document.documentElement.scrollTop,
        header = document.querySelector("nav");
    if (distanceY > 30) {
        if (!header.classList.contains("nav--scrolled")) {
            header.classList += " nav--scrolled";
        }
    } else {
        header.classList.remove("nav--scrolled");
    }
});

let menu = document.querySelector(".nav-items"),
    menuToggle = document.getElementById("nav-items-toggle"),
    nav = document.querySelector("nav");
//Navigation menu toggle
menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu(e);
});

nav.addEventListener("click", (e) => {
    e.stopPropagation();
});

document.body.addEventListener("click", hideMenu);

function toggleMenu(e) {
    let visibility = nav.getAttribute("data-mobile-visibility");
    if (visibility != "visible") {
        nav.setAttribute("data-mobile-visibility", "visible");
        nav.classList = "nav-items-shown";
    } else {
        nav.setAttribute("data-mobile-visibility", "hidden");
        nav.classList = "";
    }
}

function hideMenu() {
    nav.setAttribute("data-mobile-visibility", "hidden");
    nav.classList.remove("nav-items-shown");
}
function showMenu() {
    nav.setAttribute("data-visibility", "visible");
    nav.classList = "nav-items-shown";
}

//Header arrow
document.getElementById("header-arrow").addEventListener("click", () => {
    document.getElementById("why-me").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

//Smooth scroll for nav items linking to sections in document
let navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        hideMenu();
        document.getElementById(item.getAttribute("href")).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    })
});

//Service worker registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            //Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            //registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

window.addEventListener("beforeinstallprompt", function() {
    console.log("beforeinstallprompt")
});