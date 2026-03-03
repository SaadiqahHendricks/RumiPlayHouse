// Elements
const welcomeEl = document.getElementById("welcome-text");
const welcomeContainer = document.getElementById("welcome-container");
const pageContent = document.getElementById("page-content");
const menuButtons = document.querySelectorAll(".menu-btn");
const contentSections = document.querySelectorAll(".content-section");
const header = document.querySelector("header");

// Hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Welcome typewriter
const welcomeText = "Welcome to Rumi Playhouse 🌼";
let index = 0;

function typeWriter() {
  if (index < welcomeText.length) {
    welcomeEl.textContent += welcomeText.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  } else {
    setTimeout(fadeWelcomeOut, 1800);
  }
}

// Fade out welcome screen
function fadeWelcomeOut() {
  welcomeContainer.style.transition = "opacity 1s ease";
  welcomeContainer.style.opacity = 0;

  setTimeout(() => {
    welcomeContainer.style.display = "none";
    pageContent.classList.remove("hidden");

    contentSections.forEach((section, i) => {
      section.classList.toggle("active", i === 0);
    });
  }, 1000);
}

// Smooth section scroll
menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    const targetSection = document.getElementById(target);

    if (targetSection) {
      contentSections.forEach((section) =>
        section.classList.remove("active")
      );

      targetSection.classList.add("active");

      const offset = header.offsetHeight + 10;
      const position = targetSection.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });

      // Close menu on mobile after clicking
      navMenu.classList.remove("show");
    }
  });
});

// Start animation on load
document.addEventListener("DOMContentLoaded", () => {
  pageContent.classList.add("hidden");
  typeWriter();
});
