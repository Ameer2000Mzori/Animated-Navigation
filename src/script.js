// selecting our elements
var iEl = document.querySelector("i");
var navLinks = document.getElementsByClassName("nav-Links")[0];
// our functions
var navHandler = function () {
    if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        iEl.classList.replace("fa-bars", "fa-xmark");
    }
    else {
        navLinks.classList.add("active");
        iEl.classList.replace("fa-xmark", "fa-bars");
    }
};
// <i class="fa-solid fa-xmark"></i>
// our eventlsinters
iEl.addEventListener("click", navHandler);
