function alertWeb() {
  alert("Sorry, this page is currently under development.");
}

//side bar
const menu = document.querySelector('#book-menu');
const nav = document.querySelector('.navbar-nav');

menu.addEventListener('click', function() {
    nav.classList.toggle('active')
});

const hamburger = document.querySelector('#book-menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove('active')
  }
})

// Slick slider initialization
jQuery(document).ready(function($) {
  $('.posts-slider .slider__container').each(function() {
      var $this = $(this);
      var autoplay = $this.data('autoplay') || false;
      var infinite = $this.data('infinite') || false;

      $this.slick({
          autoplay: autoplay,
          autoplaySpeed: 3000, // Gambar akan berubah otomatis setiap 3 detik
          infinite: infinite,
          slidesToShow: 1, // Tampilkan satu slide penuh setiap kali
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          responsive: [
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1, // Tampilkan satu slide penuh pada layar kecil
                      slidesToScroll: 1
                  }
              }
          ]
      });
  });
});

// Toggle class active
// const navbarNav = document.querySelector(".navbar-nav");

// // ketika book-menu di klik
// document.querySelector("#book-menu").onclick = () => {
//   navbarNav.classList.toggle("active");
// };

// // klik sidebar bair ilang
// const book = document.querySelector("#book-menu");

// document.addEventListener("click", function (e) {
//   if (!book.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }
// });
