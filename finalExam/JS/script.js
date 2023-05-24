const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var tileSheet = new Image();
tileSheet.addEventListener('load', eventSheetLoaded , false);
tileSheet.src = "Spritesheet/one1.png";

var tileSheet2 = new Image();
tileSheet2.addEventListener('load', eventSheetLoaded , false);
tileSheet2.src = "Spritesheet/four.png";

var mapIndexOffset = -1;
var mapRows = 9;
var mapCols = 10;
var tileMap1 = [
	[2,2,2,2,2,2,2,2,2,2]
	, [2,2,2,2,2,2,2,2,2,2]
	, [2,2,2,2,2,2,2,2,2,2]
	, [2,2,2,2,2,2,2,2,2,2]
	, [2,2,2,2,2,2,2,2,2,2]
	, [2,2,2,2,2,2,2,2,2,2]
	, [2,2,2,2,2,2,2,2,2,2]
	, [2,2,2,2,2,2,2,2,2,2]
	, [2,2,2,2,2,2,2,2,2,2]
	];

var tileMap2 = [
    [1,1,1,1,1,14,1,1,25,26]
    , [1,35,1,1,1,22,1,49,33,34]
    , [1,1,1,1,1,1,1,54,49,1]
    , [1,1,1,97,98,1,1,1,1,1]
    , [1,1,1,105,106,62,1,1,1,1]
    , [1,1,14,1,9,10,1,1,1,1]
    , [1,1,21,1,17,18,1,1,87,1]
    , [1,1,22,1,1,1,1,94,77,88]
    , [1,1,1,1,1,1,1,77,52,96]
    ];

var tileMap3 = [
    [6,6,6,6,6,6,6,1,1,1]
    , [1,1,1,1,1,1,6,1,1,1]
    , [1,1,1,1,1,1,6,46,1,1]
    , [6,6,1,1,1,1,6,6,6,6]
    , [1,6,1,1,1,1,6,1,1,1]
    , [1,6,1,6,1,1,6,1,1,1]
    , [1,6,1,6,1,1,6,1,1,1]
    , [1,6,1,6,45,1,6,1,1,1]
    , [1,6,6,6,6,6,6,1,1,1]
    ];

var animationFrames = [9,10,11,12,13,14,15,16];
var frameIndex = 0;
var rotation = 270;

var x = 240;
var y = 78;

var actionState = 0;

var dx = -1;
var dy = 0;	

    function eventSheetLoaded() 
    {
     startUp()
    }
    
    function drawScreen1() 
    {          
    x = x+dx;
	y = y+dy;
        for (var rowCtr=0;rowCtr<mapRows;rowCtr++) 
        {
            for (var colCtr=0;colCtr<mapCols;colCtr++)
            {
                 var tileId = tileMap1[rowCtr][colCtr]+mapIndexOffset;
                 var sourceX = Math.floor(tileId % 8) *32;
                 var sourceY = Math.floor(tileId / 8) *32;
                 context.drawImage(tileSheet, sourceX,
                 sourceY,32,32,colCtr*32,rowCtr*32,32,32);
            }
        }

        for (var rowCtr=0;rowCtr<mapRows;rowCtr++) 
        {
            for (var colCtr=0;colCtr<mapCols;colCtr++)
            {
                 var tileId = tileMap3[rowCtr][colCtr]+mapIndexOffset;
                 var sourceX = Math.floor(tileId % 8) *32;
                 var sourceY = Math.floor(tileId / 8) *32;
                 context.drawImage(tileSheet, sourceX,
                 sourceY,32,32,colCtr*32,rowCtr*32,32,32);
            }
        }

        if (x>140 && y==78 && actionState == 0)
        {
             context.save();
             context.setTransform(1,0,0,1,0,0)
             var angleInRadians = rotation * Math.PI / 180;
             context.translate(x+16, y+16);
             context.rotate(angleInRadians);
             
             var sourceX = Math.floor(animationFrames[frameIndex] % 8) *32;
             var sourceY = Math.floor(animationFrames[frameIndex] / 8) *32;
             
    
             context.drawImage(tileSheet2, sourceX, sourceY,32,32,-35,35,32,32);
             
             context.restore();
        }
        else if (x==140 && y<240 && actionState <= 1)
        {
            dx = 0;
            dy = 1;
            rotation = 180;
            actionState = 1;

             context.save();
             context.setTransform(1,0,0,1,0,0)
             var angleInRadians = rotation * Math.PI / 180;
             context.translate(x+16, y+16);
             context.rotate(angleInRadians);
             
             var sourceX = Math.floor(animationFrames[frameIndex] % 8) *32;
             var sourceY = Math.floor(animationFrames[frameIndex] / 8) *32;
            
             context.drawImage(tileSheet2, sourceX, sourceY,32,32,-68,-30,32,32);
             
             context.restore();
        }
        else if (x==140 && y>74 && actionState <= 2)
        {
            dx = 0;
            dy = -1;
            rotation = 360;
            actionState = 2;

             context.save();
             context.setTransform(1,0,0,1,0,0)
             var angleInRadians = rotation * Math.PI / 180;
             context.translate(x+16, y+16);
             context.rotate(angleInRadians);
             
             var sourceX = Math.floor(animationFrames[frameIndex] % 8) *32;
             var sourceY = Math.floor(animationFrames[frameIndex] / 8) *32;
            
             context.drawImage(tileSheet2, sourceX, sourceY,32,32,35,0,32,32);
             
             context.restore();
        }
        else if (x<210 && y==73 && actionState <= 3)
        {
            dx = 1;
            dy = 0;
            rotation = 90;
            actionState = 3;

             context.save();
             context.setTransform(1,0,0,1,0,0)
             var angleInRadians = rotation * Math.PI / 180;
             context.translate(x+16, y+16);
             context.rotate(angleInRadians);
             
             var sourceX = Math.floor(animationFrames[frameIndex] % 8) *32;
             var sourceY = Math.floor(animationFrames[frameIndex] / 8) *32;
            
             context.drawImage(tileSheet2, sourceX, sourceY,32,32,6,-68,32,32);
             
             context.restore();
        }
        else if (x>140 && y==73 && actionState <= 4)
        {
            dx = -1;
            dy = 0;	
            rotation = 270;
            actionState = 4;
             context.save();
             context.setTransform(1,0,0,1,0,0)
             var angleInRadians = rotation * Math.PI / 180;
             context.translate(x+16, y+16);
             context.rotate(angleInRadians);
             
             var sourceX = Math.floor(animationFrames[frameIndex] % 8) *32;
             var sourceY = Math.floor(animationFrames[frameIndex] / 8) *32;
             
    
             context.drawImage(tileSheet2, sourceX, sourceY,32,32,-39,35,32,32);
             
             context.restore();
        }
        else if (x==140 && y>-15 && actionState <= 5 && actionState > 3)
        {
            dx = 0;
            dy = -1;
            rotation = 360;
            actionState = 5;

             context.save();
             context.setTransform(1,0,0,1,0,0)
             var angleInRadians = rotation * Math.PI / 180;
             context.translate(x+16, y+16);
             context.rotate(angleInRadians);
             
             var sourceX = Math.floor(animationFrames[frameIndex] % 8) *32;
             var sourceY = Math.floor(animationFrames[frameIndex] / 8) *32;
            
             context.drawImage(tileSheet2, sourceX, sourceY,32,32,35,0,32,32);
             
             context.restore();
        }
        else if (x>-100 && y==-16 && actionState <= 6 && actionState > 4)
        {
            dx = -1;
            dy = 0;
            rotation = 270;
            actionState = 6;

             context.save();
             context.setTransform(1,0,0,1,0,0)
             var angleInRadians = rotation * Math.PI / 180;
             context.translate(x+16, y+16);
             context.rotate(angleInRadians);
             
             var sourceX = Math.floor(animationFrames[frameIndex] % 8) *32;
             var sourceY = Math.floor(animationFrames[frameIndex] / 8) *32;
            
             context.drawImage(tileSheet2, sourceX, sourceY,32,32,-32,38,32,32);
             
             context.restore();
        }
        for (var rowCtr=0;rowCtr<mapRows;rowCtr++) 
        {
            for (var colCtr=0;colCtr<mapCols;colCtr++)
            {
                 var tileId = tileMap2[rowCtr][colCtr]+mapIndexOffset;
                 var sourceX = Math.floor(tileId % 8) *32;
                 var sourceY = Math.floor(tileId / 8) *32;
                 context.drawImage(tileSheet, sourceX,
                 sourceY,32,32,colCtr*32,rowCtr*32,32,32);
            }
        }
        frameIndex++;
	
            if(frameIndex ==animationFrames.length) 
            {
                frameIndex=0;
            }
    }
    function startUp()
    {
        gameLoop();
    }
    function gameLoop() 
    {
        window.setTimeout(gameLoop, 25);
        drawScreen1();
        console.log('x = '+ x);
        console.log('y = '+ y);
    }