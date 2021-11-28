window.addEventListener('load', initPage);

function initPage() {
  var accordions = document.querySelectorAll('.accordion');
  accordions.forEach((a) => {accordion(a)} )  
}

function accordion(a) {
  var sections = a.querySelectorAll('section');
  sections.forEach((s) => {
    var heading = s.querySelector('h4');
    headingOnClick = function () {
      s.classList.toggle('active');
    }
    heading.addEventListener('click', headingOnClick);
  });
}

function toggleMenu() {
  document.querySelector("body").classList.toggle('menu-expanded');
}