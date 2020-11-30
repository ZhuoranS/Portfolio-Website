var slideIndex = 1;
showSlides(slideIndex);

window.onload = (()=>{
  var body = document.getElementsByTagName("main")[0];
  body.className+= "load";
});

// Next/previous controls
function plusSlide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function toSlide(n) {
  showSlides(slideIndex = n);
}

// Kets control
function right(e){
  if(e.keyCode === 39){
    plusSlide(1);
  }
}

function left(e){
  if(e.keyCode === 37){
    plusSlide(1);
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

