const canvas = document.getElementById('canvas1');
if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let cut = new Path2D();
    cut.arc(250, 250, 150, 0, 2 * Math.PI);
    ctx.clip(cut);

    ctx.fillStyle = "#8cf461";
    ctx.fillRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.moveTo(170, 367);
    ctx.strokeStyle = "#54d771";
    ctx.fillStyle = "#54d771";
    ctx.lineTo(320, 130);
    ctx.lineTo(520, 235);
    ctx.lineTo(260, 430);
    ctx.lineTo(170, 367);
    ctx.stroke();
    ctx.fill();

    
    ctx.setTransform(1,0,0,1,180, 150);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.strokeStyle = "#6d5555";
    ctx.lineWidth = 40;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.fillStyle = "#ffffff";
    ctx.lineTo(0, 200);
    ctx.lineTo(140, 200);
    ctx.lineTo(140, 0);
    ctx.lineTo(0, 0);
    ctx.stroke();
    ctx.fill();


    
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#6d5555";
    ctx.fillStyle = "#6d5555";
    ctx.setTransform(1,0,0,1,218, 235);
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(0, -35, 60, -35, 60, 0);
    ctx.quadraticCurveTo(60, 30, 30, 10);
    ctx.quadraticCurveTo(0, 30, 0, 0);
    ctx.stroke();
    ctx.fill();

    

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#443838";
    ctx.fillStyle = "#443838";
    ctx.moveTo(30, -27);
    ctx.quadraticCurveTo(60, -22, 60, 0);
    ctx.quadraticCurveTo(60, 30, 30, 10);
    ctx.lineTo(30, -27);
    ctx.stroke();
    ctx.fill();

    ctx.setTransform(1,0,0,1,208, 205);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#6d5555";
    ctx.fillStyle = "#6d5555";
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, 2 * Math.PI);
    ctx.moveTo(20, -18);
    ctx.arc(20, -18, 13, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.setTransform(1,0,0,1,208, 205);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.strokeStyle = "#443838";
    ctx.fillStyle = "#443838";
    ctx.moveTo(55, -18);
    ctx.arc(55, -18, 13, 0, 2 * Math.PI);
    ctx.moveTo(78, 0);
    ctx.arc(78, 0, 8, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();


    ctx.setTransform(1,0,0,1,200, 270);
    var grd1 = ctx.createLinearGradient(0, 0,100, 30);
    grd1.addColorStop(0, "#8cf45f");
    grd1.addColorStop(0.5, "#25421a");
    grd1.addColorStop(1, "black");
    ctx.fillStyle = grd1;
    ctx.fillRect(0, 0, 100, 20);
    ctx.fillRect(0, 30, 100, 20);

    ctx.setTransform(1,0,0,1,220, 120);
    ctx.strokeStyle = "#fea733";
    ctx.fillStyle = "#fea733";
    ctx.fillRect(0, 0, 30, 45);
    ctx.strokeStyle = "#e67225";
    ctx.fillStyle = "#e67225";
    ctx.fillRect(30, 0, 30, 45);

}


