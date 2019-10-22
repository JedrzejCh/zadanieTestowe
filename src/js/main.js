"use strict"


function scrollAnimation() {
  window.onload = function () {
    $(window).on('scroll', function () {
      const windowHeight2 = $(window).height();
      const scrollValue = $(this).scrollTop();
      const windowHeight = $(window).height();

      const $about = $(".about");
      const aboutFromTop = $about.offset().top
      const aboutHeight = $about.height()

      const $features = $(".features");
      const featuresFromTop = $features.offset().top
      const featuresHeight = $features.height()

      const $services = $(".services__offer");
      const servicesFromTop = $services.offset().top
      const servicesHeight = $services.height()

      const $services1 = $(".services__realizations");
      const services1FromTop = $services.offset().top
      const services1Height = $services.height()

      const $footer = $(".contact__form");
      const footerFromTop = $footer.offset().top
      const footerHeight = $footer.height()
      if (scrollValue > aboutFromTop - windowHeight2) {
        $about.addClass("active");
      }
      if (scrollValue > featuresFromTop - windowHeight2) {
        $features.addClass('active');
      }
      if (scrollValue > servicesFromTop - windowHeight2) {
        $services.addClass('active');
      }
      if (scrollValue > services1FromTop - windowHeight2) {
        $services1.addClass('active');
      }
      if (scrollValue > footerFromTop + footerHeight - windowHeight2) {
        $footer.addClass('active');
      }
    })
  }
}
scrollAnimation()


const sideMenuBtn = document.querySelector(".side-btn");
const sideMenu = document.querySelector(".sideMenu");


sideMenuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
})

