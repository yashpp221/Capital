// script.js
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  document.body.style.setProperty("--mouseX", mouseX);
  document.body.style.setProperty("--mouseY", mouseY);
});
// script.js
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});
