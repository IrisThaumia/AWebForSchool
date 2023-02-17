const canvas = document.getElementById('canvas1');

if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "#202020";
	ctx.fillRect(0, 150, 50, 350);
    ctx.beginPath();
    ctx.lineWidth = "25";
    ctx.strokeStyle = "#202020";
    ctx.moveTo(0, 150);
    ctx.lineTo(100, 150);
    ctx.bezierCurveTo(150, 150, 150, 250, 100, 250);
    ctx.lineTo(0, 250);
    ctx.stroke()
}