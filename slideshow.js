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
  var images = document.getElementsByClassName("mySlides16-9");
  var videos = document.getElementsByClassName("videoSlides");

  // If n is out of bounds, wrap around
  if (n > images.length + videos.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = images.length + videos.length }

  // Hide all images and videos
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < videos.length; i++) {
    videos[i].style.display = "none";
  }

  // Display the current image or video
  if (slideIndex <= images.length) {
    images[slideIndex - 1].style.display = "block";
  } else {
    videos[slideIndex - images.length - 1].style.display = "block";
  }
}
