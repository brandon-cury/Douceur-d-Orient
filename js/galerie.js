//menu phone
let closeMenu = document.getElementsByClassName("closeMenu")[0];
let checkinput = document.querySelector("input[id='menu']");
closeMenu.addEventListener("click", () => {
  checkinput.checked = false;
});
//newslatter
function newslatter(e) {
  e.preventDefault();
  let newslatter = document
    .getElementById("newslatterOverlay")
    .classList.toggle("active");
}
