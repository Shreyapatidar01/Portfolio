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
//drag and drop
document.querySelectorAll(".subject-box").forEach(box => {
    box.addEventListener("click", () => {
        const targetId = box.getAttribute("data-target");
        const panel = document.getElementById(targetId);

        panel.style.display = (panel.style.display === "block") ? "none" : "block";
    });
});
//achivment section
function toggleAchievement(id) {
    const box = document.getElementById(id).closest(".subject-box");
    const content = document.getElementById(id);

    // toggle background color white/purple
    box.classList.toggle("open");

    // show/hide achievements
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
