const canvas = document.getElementById('canvas1');

if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    //Thing in the middle
    ctx.fillStyle = "#1d3c59";
    ctx.strokeStyle = "transparent";
    ctx.arc(150, 220, 35, 0 * Math.PI, 2 * Math.PI);
    ctx.fill();

    //Upper Arrow
    ctx.strokeStyle = "#1d3c59";
    ctx.beginPath();
    ctx.lineWidth = 22;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.arc(150, 220, 100, 1 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(200,163);
    ctx.moveTo(230,155);
    ctx.lineTo(227,128);
    ctx.stroke();

    //Lower Arrow
    ctx.beginPath();
    ctx.arc(150, 220, 100, 0 * Math.PI, 0.8 * Math.PI);
    ctx.lineTo(95,279);
    ctx.moveTo(69,279);
    ctx.lineTo(70,310);
    ctx.stroke();

    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#ffffff";
    ctx.lineCap = "butt";
    ctx.lineJoin = "miter";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.rect(280, 170, 170, 120);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "#000000";
    ctx.fillRect(293,180, 80, 95);

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 20;
    
    ctx.beginPath();
    ctx.moveTo(300,200);
    ctx.lineTo(365,200);
    ctx.lineJoin = "bevel";
    ctx.moveTo(355.8,205);
    ctx.lineTo(338.9,239);
    ctx.moveTo(340,270);
    ctx.lineTo(340,235);
    ctx.stroke();

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 14;
    ctx.lineJoin = "mitel";
    ctx.beginPath();
    ctx.moveTo(390,230);
    ctx.lineTo(435,230);
    ctx.moveTo(435,268);
    ctx.lineTo(390,268);
    ctx.moveTo(394.6,267);
    ctx.lineTo(430.6,231);
    ctx.stroke();
}