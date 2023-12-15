// Function to determine if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) / 2 &&
        rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) / 2
    );
}

// Function to set the active class based on the section in the viewport
function setActiveSection() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav a');
    
    sections.forEach(function (section, index) {
        if (isElementInViewport(section)) {

            navLinks.forEach(function (navLink) {
                navLink.classList.remove('active');
            });

            navLinks[index].classList.add('active');
        }
    });
}

// Event listener for scroll events
window.addEventListener('scroll', setActiveSection);

// Event listener for initial page load
document.addEventListener('DOMContentLoaded', setActiveSection);
