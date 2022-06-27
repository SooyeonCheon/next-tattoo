window.addEventListener("scroll", function () {
    let nav = document.querySelector(".sticky");
    if (window.pageYOffset > 0) {
      nav.classList.add("nav-sticky");
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