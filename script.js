const body = document.querySelector("body");

const sidebar = body.querySelector(".slidebar");
const toggle = body.querySelector(".toggle");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
