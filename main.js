// Logging to the console.
console.log("Hello, World");

////////////////////////////////////////
//  1) Name Alert

const userName = document.getElementById("user-name");
const okBtn = document.getElementById("user-name-btn");

okBtn.addEventListener("click", okBtnClicked);

function okBtnClicked(e) {
  e.preventDefault();
  alert(`Welcome, ${userName.value}!`);
  userName.value = "";
}

////////////////////////////////////////
// 2) Clickable Boxes
const box1 = document.getElementById("left");
const box2 = document.getElementById("right");

box1.addEventListener("click", updateClass);
box2.addEventListener("click", updateClass);

function updateClass(e) {
  console.log(e.target.parentElement);
  const parent = e.target.parentElement;
  if (parent.id === "left") {
    parent.style = "background-color: red";
  }
  if (parent.id === "right") {
    parent.style = "background-color: blue";
  }
}

////////////////////////////////////////
// 3) Color Picker
let bgColorValue = document.getElementById("color");
bgColorValue.value = "#e66465";
bgColorValue.addEventListener("change", pickedColor);

function pickedColor(e) {
  console.log("Color Picked!" + e.target.value);
  document.body.style = `background-color: ${e.target.value}`;
}
