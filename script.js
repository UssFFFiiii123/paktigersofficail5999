// Mobile menu
const btn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (btn && nav) {
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
}

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Home page slider
const slides = document.querySelectorAll(".slide");
if (slides.length) {
  const dotsBox = document.getElementById("dots");
  let i = 0, timer;
  const dots = [];
  slides.forEach((_, n) => {
    const d = document.createElement("button");
    d.className = "dot";
    d.setAttribute("aria-label", "Go to slide " + (n + 1));
    d.addEventListener("click", () => { show(n); restart(); });
    dotsBox.appendChild(d);
    dots.push(d);
  });
  function show(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("active", k === i));
    dots.forEach((d, k) => d.classList.toggle("active", k === i));
  }
  function restart() {
    clearInterval(timer);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer = setInterval(() => show(i + 1), 6500);
    }
  }
  document.getElementById("prev").addEventListener("click", () => { show(i - 1); restart(); });
  document.getElementById("next").addEventListener("click", () => { show(i + 1); restart(); });
  show(0);
  restart();
}
