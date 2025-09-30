
const fieldWidth = 1080;
const fieldHeight = 1920;

document.body.style.backgroundColor = "#000";

let field = document.createElement("div");
document.body.appendChild(field);
field.style.position = "absolute";
field.style.transformOrigin = `0px 0px`;
field.style.width = fieldWidth + "px";
field.style.height = fieldHeight + "px";
field.style.overflow = "hidden";
field.style.transition = "background-color 4s ease"
field.style.backgroundColor = "sandybrown";

function fit() {
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let xScale = windowWidth / fieldWidth;
let yScale = windowHeight / fieldHeight;
let scale = Math.min(xScale, yScale);

let xMargin = (windowWidth - scale * fieldWidth) / 2;
let yMargin = (windowHeight - scale * fieldHeight) / 2;

field.style.transform = `scale(${scale})`;
field.style.left = `${xMargin}px`;
field.style.top = `${yMargin}px`;
}

fit();

addEventListener("resize", fit);
addEventListener("DOMContentLoaded", fit);