// navbar
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".scroll");
  if (window.pageYOffset > 0) {
    navbar.classList.add("nav-scroll");
    navbar.style.transition = "0.5s";
  } else {
    navbar.classList.remove("nav-scroll");
  }
});

window.addEventListener("scroll", function () {
  let nav = document.querySelector(".sticky");
  if (window.pageYOffset > 0) {
    nav.classList.add("nav-sticky");
    nav.style.transition = "0.5s";
  } else {
    nav.classList.remove("nav-sticky");
  }
});

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.querySelector(".main_menu").style.display = "none";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.querySelector(".main_menu").style.display = "flex";
}

