const page = document.getElementById("PAGE");
const themeButton = document.getElementById("THEME");
const dark = document.getElementById("DARK");
const light = document.getElementById("LIGHT");

themeButton.addEventListener("click", () => {
  if (page.className.includes("background_dark")) {
    page.classList.remove("background_dark");
    page.classList.add("background_light");
    light.classList.remove("none");
    dark.classList.add("none");
    light.classList.remove("display:none");
  } else if (page.className.includes("background_light")) {
    page.classList.remove("background_light");
    page.classList.add("background_dark");
    dark.classList.remove("none");
    light.classList.add("none");
  }
});
