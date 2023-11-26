document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.querySelector(".loading").style.opacity = 0;
      setTimeout(function () {
        document.querySelector(".loading").style.display = "none";
      }, 500); // Adjust the delay as needed for the fade-out animation
    }, 3000); // Adjust the loading duration (3 seconds in this example)
});
  