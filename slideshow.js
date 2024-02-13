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
  var x = document.getElementsByClassName("mySlides16-9");

  // If n is out of bounds, wrap around
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }

  // Hide all images
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  // Display the current image
  x[slideIndex - 1].style.display = "block";
}



