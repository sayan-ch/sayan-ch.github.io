(function () {
  function bindMobileNav(nav) {
    var menuBtn = nav.querySelector(".menu-toggle");
    var navLinks = nav.querySelectorAll(".navbar-nav a");

    if (!menuBtn) {
      return;
    }

    menuBtn.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("menu-open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("menu-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".navbar").forEach(bindMobileNav);
  });
})();
