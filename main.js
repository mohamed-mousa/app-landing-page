import "./style.css";

const menuBtn = document.getElementById("menu");
const menubar = document.querySelector("[role='menubar']");

menuBtn.addEventListener("click", () => {
  const isOpen = JSON.parse(menuBtn.getAttribute("aria-expanded"));
  menuBtn.setAttribute("aria-expanded", !isOpen);
  menubar.classList.toggle("hidden");
  menubar.classList.toggle("flex");
});
