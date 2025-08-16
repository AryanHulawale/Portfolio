// Select the style switcher toggle button
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

// Add event listener for toggling the style switcher
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Close the style switcher when scrolling
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// Select all alternate styles
const alternateStyles = document.querySelectorAll(".alternate-style");

// Function to set an active style
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}




// Select the toggle button for day and night mode
const dayNight = document.querySelector(".day-night");

// Add event listener for click to toggle classes
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

// On window load, set the correct icon based on the current mode
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});
