var path = window.location.pathname;
var pathelement = path.split('/').pop();

const cards = Array.from(document.querySelectorAll('.card')).filter( el => !el.classList.contains(pathelement) );
cards.forEach(el => el.remove());


ScrollReveal().reveal('.card');


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}