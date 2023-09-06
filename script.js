const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove('active');
  }
});

$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    prevArrow: false,
    nextArrow: false
  });
});
