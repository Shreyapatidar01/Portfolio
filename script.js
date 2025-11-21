// Smooth scroll animations
document.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in, .slide-up").forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});

// Demo Contact Form
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message Sent Successfully!");
});
