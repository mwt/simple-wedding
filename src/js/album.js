//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  "use strict";

  /*=============================================================================
   Simple Lightbox Section
  =============================================================================*/

  // Initialize the image gallery lightbox
  new SimpleLightbox({ elements: ".image-gallery a", urlAttribute: "data-lightbox" });

  /*=============================================================================
   Mobile Navbar Section
  =============================================================================*/

  const mobileNavbar = document.getElementById("navbarToggle");

  mobileNavbar.addEventListener("click", (e) => {
    // Toggle the aria-expanded attribute
    e.currentTarget.setAttribute(
      "aria-expanded",
      e.currentTarget.getAttribute("aria-expanded") === "true"
        ? "false"
        : "true"
    );

    // Toggle the collapsed class (doesn't do anything, but bootstrap does it)
    e.currentTarget.classList.toggle("collapsed");

    // Toggle the show class
    const navbar = document.getElementById("navbarResponsive");
    navbar.classList.toggle("show");
  });
});
