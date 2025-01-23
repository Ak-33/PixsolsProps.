var slideIndex = 1;

// Call showDivs after the page is fully loaded
window.addEventListener('load', function () {
  showDivs(slideIndex);
});

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  // Combine images and videos into one array
  var slides = document.querySelectorAll(".mySlides16-9, .videoSlides");

  // If n is out of bounds, wrap around
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";
}
