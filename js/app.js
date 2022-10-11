const icon = document.querySelector(".icon");
const input = document.querySelector("input");

icon.addEventListener("click", (e) => {
  input.classList.toggle("active");
  input.focus();
});
