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

function drawSystem(){

    ctx.clearRect(0, 0, w, h);

    /*
     Save the unrotated context of the canvas so we can restore it later.
     Save and restore are called before and after each operation
     to ensure that each rotation is applied independetnly.
    */
    ctx.save();

    /*
    Translate remaps (0, 0) position of canvas.
    Rotation centerpoint is always canvas origin.
    Set center point of rotation & draw a Sun on that position.
    */
    ctx.translate(w/2, h/2);

    // Sun
    drawPlanet(25, "yellow", 0, 0);

    // Mercury
    drawOrbit(40, 0, 0);
    ctx.rotate(time / 30);
    drawPlanet(5, "#97979F", 40, 0);

    // Venus
    drawOrbit(60, 0, 0, "1");
    ctx.rotate(time / 100 - (time / 90));
    drawPlanet(8, "#F6836E", 60, 0);

    // Earth
    drawOrbit(90, 0, 0, "1");
    ctx.rotate(time / 100 - (time / 80));
    drawPlanet(10, "#3E54E8", 90, 0);

    // Mars
    drawOrbit(120, 0, 0, "1");
    ctx.rotate(time / 120 - (time / 50));
    drawPlanet(7, "#E27B58", 120, 0);

    // Jupiter
    drawOrbit(220, 0, 0, "1");
    ctx.rotate(time / 120 - (time / 50));
    drawPlanet(45, "#D39C7E", 220, 0);

    // Saturn
    drawOrbit(300, 0, 0);
    ctx.rotate(time / 120 - (time / 90));
    drawOrbit(45, 300, 0, "5");
    drawPlanet(35, "#DAC29F", 300, 0);

    // Uranus, you never get old
    drawOrbit(340, 0, 0, "1");
    ctx.rotate(time / 120 - (time / 90));
    drawPlanet(32, "#B7D1F8", 340, 0);

    // Neptune
    drawOrbit(380, 0, 0, "1");
    ctx.rotate(time / 120 - (time / 140));
    drawPlanet(30, "#6081FF", 380, 0);

    ctx.restore();

    if (checkbox.checked) {
        pContent.textContent = "Stop animation";
        time++;
        setTimeout(function(){
            requestAnimationFrame(drawSystem);
        }, 1000/60);
    } else {
        pContent.textContent = "Start Animation";
        time = 1;
    }
}
requestAnimationFrame(drawSystem);