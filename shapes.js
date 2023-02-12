const canvas = document.getElementById('canvas1');

if (canvas.getContext) {

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(213,39,39,1)';
    ctx.lineWidth = 0;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 0, 100, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "#202020";
	ctx.fillRect(0, 150, 120, 350);
    ctx.fillRect(canvas.width / 2, 400, 250, 100);
    ctx.fillRect(400, 200, 250, 300);
    ctx.fillRect(((canvas.width / 2)-100), ((canvas.height / 2)-50), 75, 75);
    ctx.fillRect(((canvas.width / 2)+50), ((canvas.height / 2)-50), 75, 75);
    ctx.fillRect(((canvas.width / 2)-100), ((canvas.height / 2)+50), 75, 75);
    ctx.fillRect(((canvas.width / 2)+50), ((canvas.height / 2)+50), 75, 75);
    
    ctx.fillStyle = "#E0E0E0";
    ctx.beginPath();
    ctx.arc(((canvas.width / 2)-60), ((canvas.height / 2)-15), 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(((canvas.width / 2)+90), ((canvas.height / 2)-15), 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(((canvas.width / 2)-60), ((canvas.height / 2)+85), 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(((canvas.width / 2)+90), ((canvas.height / 2)+85), 15, 0, 2 * Math.PI);
    ctx.fill();
}