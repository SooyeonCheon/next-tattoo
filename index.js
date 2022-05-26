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
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

// slide show
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}