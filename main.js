function onClick() {
  let button;
  button = document.getElementById("button");
  button.classList.toggle("is-visible-mobile");
  console.log(button);
  document.getElementById("sideBar").style.width = "250px";
}
function closeBar() {
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("button").classList.toggle("is-visible-mobile");
}
