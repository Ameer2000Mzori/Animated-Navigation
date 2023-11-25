// selecting our elements
const iEl = document.querySelector("i") as HTMLElement;
const navLinks = document.getElementsByClassName("nav-Links")[0];

// our functions
const navHandler = () => {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    iEl.classList.replace("fa-bars", "fa-xmark");
  } else {
    navLinks.classList.add("active");
    iEl.classList.replace("fa-xmark", "fa-bars");
  }
};
// <i class="fa-solid fa-xmark"></i>

// our eventlsinters
iEl.addEventListener("click", navHandler);
