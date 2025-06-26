const welcomeEl = document.getElementById("welcome-text");
const welcomeContainer = document.getElementById("welcome-container");
const pageContent = document.getElementById("page-content");
const menuButtons = document.querySelectorAll(".menu-btn");
const contentSections = document.querySelectorAll(".content-section");

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

function fadeWelcomeOut() {
  welcomeContainer.style.opacity = 0;
  setTimeout(() => {
    welcomeContainer.style.display = "none";
    pageContent.classList.remove("hidden");
    // Show the first section active, hide others
    contentSections.forEach((section, i) => {
      if (i === 0) section.classList.add("active");
      else section.classList.remove("active");
    });
  }, 1000);
}

// Menu button click handlers
menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    // Remove active from all
    contentSections.forEach((section) => section.classList.remove("active"));
    // Add active to target
    const targetSection = document.getElementById(target);
    if (targetSection) targetSection.classList.add("active");
    // Scroll main container to top smoothly
    document.getElementById("main-container").scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  pageContent.classList.add("hidden");
  typeWriter();
});
