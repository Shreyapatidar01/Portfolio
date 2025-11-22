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
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  });
}

// --- Close all panels ---
function closeAllPanels() {
  document.querySelectorAll(".panel").forEach(panel => {
    panel.style.display = "none";
  });
  document.querySelectorAll(".subject-box").forEach(box => {
    box.classList.remove("open", "open-achievement");
  });
}

// --- Assignment Toggle ---
function toggleAssignment(id) {
  const panel = document.getElementById(id);
  const box = panel.closest(".subject-box");
  if (!panel) return;

  // If already open, just close it
  if (panel.style.display === "block") {
    panel.style.display = "none";
    box.classList.remove("open");
  } else {
    closeAllPanels();
    panel.style.display = "block";
    box.classList.add("open");
  }
}

// --- Achievement Toggle ---
function toggleAchievement(id) {
  const panel = document.getElementById(id);
  const box = panel.closest(".subject-box");
  if (!panel) return;

  // If already open, just close it
  if (panel.style.display === "block") {
    panel.style.display = "none";
    box.classList.remove("open-achievement");
  } else {
    closeAllPanels();
    panel.style.display = "block";
    box.classList.add("open-achievement");
  }
}

// Click handlers for assignments
document.querySelectorAll(".assignment-box").forEach(box => {
  box.querySelector(".subject-btn").addEventListener("click", () => {
    const targetId = box.getAttribute("data-target");
    toggleAssignment(targetId);
  });
});

// Click handlers for achievements
document.querySelectorAll(".achievement-box").forEach(box => {
  box.querySelector(".subject-btn").addEventListener("click", () => {
    const targetId = box.getAttribute("data-target");
    toggleAchievement(targetId);
  });
});
