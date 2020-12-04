document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

//Edin: navigatiebar mee bewegen wanneer gescrold wordt
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky")
} else {
  navbar.classList.remove("sticky");
}
}

// Daan: image slide:
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}

// Edin: tekst verbergen/verlengen:
function verleng(spel){
var dots = document.querySelector(`.game-grid-item[data-spel="${spel}"] .dots`);
var moreTxt = document.querySelector(`.game-grid-item[data-spel="${spel}"] .more`);
var btnTxt = document.querySelector(`.game-grid-item[data-spel="${spel}"] .verlengknop`);

if(dots.style.display === "none"){
  dots.style.display = "inline";
  btnTxt.textContent = "Lees meer";
  moreTxt.style.display = "none";
}else{
  dots.style.display = "none";
  btnTxt.textContent = "Lees minder"
  moreTxt.style.display = "inline"
}
}
