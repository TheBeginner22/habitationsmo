// script.js
document.addEventListener("DOMContentLoaded", function () {
    var introTextSection = document.getElementById("intro-text");

    setTimeout(function () {
        introTextSection.scrollIntoView({
            behavior: "smooth",
            duration: 2000 //seems not to be doing anything...
        });
    }, 2500); // Adjust the duration (in milliseconds) as needed
});
