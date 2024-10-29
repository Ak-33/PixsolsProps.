document.addEventListener('DOMContentLoaded', () => {
    // Select all clickable images
    const images = document.querySelectorAll('.mySlides16-9');

    // Function to handle image clicks
    images.forEach(image => {
        image.addEventListener('click', function(event) {
            // Prevent the event from bubbling up to the document
            event.stopPropagation();

            // Remove the enlarged class from all images
            images.forEach(img => img.classList.remove('enlarged'));

            // Add the enlarged class to the clicked image
            this.classList.add('enlarged');

            // Add a class to the body to darken the background
            document.body.classList.add('dark');
        });
    });

    // Function to reset all images and remove the dark background when clicking outside
    document.addEventListener('click', () => {
        images.forEach(img => img.classList.remove('enlarged'));
        document.body.classList.remove('dark'); // Remove dark background class
    });
});
