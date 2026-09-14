document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.getElementById("cta-btn");
  const heroButton = document.getElementById("hero-action");

  ctaButton.addEventListener("click", () => {
    alert("Get Started clicked!");
  });

  heroButton.addEventListener("click", () => {
    const featuresSection = document.getElementById("features");
    featuresSection.scrollIntoView({ behavior: "smooth" });
  });
});
