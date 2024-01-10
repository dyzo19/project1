document.addEventListener('DOMContentLoaded', function () {
    // Initialize the carousel
    var myCarousel = new bootstrap.Carousel(document.getElementById('ferrariheader2'));
  
    // Set the interval for automatic slide transition (adjust as needed)
    var intervalId = setInterval(function () {
      // Trigger the next slide manually
      myCarousel.next();
    }, 5000); // 5000 milliseconds (5 seconds)
  
    // Pause the interval when the mouse is over the carousel
    document.getElementById('ferrariheader2').addEventListener('mouseenter', function () {
      clearInterval(intervalId);
    });
  
    // Resume the interval when the mouse leaves the carousel
    document.getElementById('ferrariheader2').addEventListener('mouseleave', function () {
      intervalId = setInterval(function () {
        myCarousel.next();
      }, 5000);
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Initialize the carousel
    var myCarousel = new bootstrap.Carousel(document.getElementById('carlosheader'));

    // Set the interval for automatic slide transition (adjust as needed)
    var intervalId = setInterval(function () {
      // Trigger the next slide manually
      myCarousel.next();
    }, 5000); // 5000 milliseconds (5 seconds)

    // Pause the interval when the mouse is over the carousel
    document.getElementById('carlosheader').addEventListener('mouseenter', function () {
      clearInterval(intervalId);
    });

    // Resume the interval when the mouse leaves the carousel
    document.getElementById('carlosheader').addEventListener('mouseleave', function () {
      intervalId = setInterval(function () {
        myCarousel.next();
      }, 5000);
    });
  });
  