var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "#00A355"
ctx.fillRect(125, 115, 150, 35);

ctx.fillStyle = "#00A355"
ctx.fillRect(90, 150, 220, 50);

// Roue gauche
ctx.beginPath();
ctx.fillStyle = "#CDCDCD"
ctx.arc(115, 230, 30, 0, 2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black"
ctx.arc(115, 230, 30, 0, 2*Math.PI);
ctx.stroke();

// Roue droite
ctx.beginPath();
ctx.fillStyle = "#CDCDCD"
ctx.arc(285, 230, 30, 0, 2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black"
ctx.arc(285, 230, 30, 0, 2*Math.PI);
ctx.stroke();
