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
    let navbar = document.querySelector(".sticky");
    if (window.pageYOffset > 0) {
      navbar.classList.add("nav-sticky");
      navbar.style.transition = "0.5s";
    } else {
      navbar.classList.remove("nav-sticky");
    }
  });