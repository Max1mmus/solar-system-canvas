const canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    checkbox = document.querySelector(".checkbox"),
    pContent = document.querySelector("p");
canvas.width = 1000;
canvas.height = 800;

const w = canvas.width;
const h = canvas.height;
let time = 1;

pContent.textContent = "Start Animation";
checkbox.addEventListener("change", drawSystem);

function drawOrbit (radius, x, y, thickness) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.lineWidth = thickness;
    ctx.strokeStyle = "gray";
    ctx.stroke();
    ctx.closePath();
}

function drawPlanet (radius, color, x, y) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}


