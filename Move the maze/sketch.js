var bg;
var pointStar, points;
var points2
var points3
var blue, plr;
var hole,blackHole;
var wall;
var score = 0;
var walls;

function preload() {
    bg = loadImage("stone.jpg")
    blue = loadImage("ballplayer.png")
    pointStar = loadImage("wind point.webp")
    pointStar2 = loadImage("fire point.webp")
    pointStar3 = loadImage("Water point.webp")
    hole = loadImage("hole.png")
}

function setup() {
    createCanvas(1366, 768)

    walls= createGroup()
    wall1 = createSprite(561, 608, 9, 122)
    wall2 = createSprite(810, 545, 240, 9)
    wall3 = createSprite(900, 665, 200, 9)
    wall4 = createSprite(700, 665, 200, 9)
    wall5 = createSprite(500, 665, 200, 9)
    wall6 = createSprite(300, 665, 200, 9)
    wall7 = createSprite(1091.8, 665, 200, 9)
    wall8 = createSprite(165, 665, 200, 9)
    wall9 = createSprite(811, 608, 9, 122)
    wall10 = createSprite(73, 385, 9, 560)
    wall11 = createSprite(688, 499, 9, 100)
    wall12 = createSprite(933, 499, 9, 100)
    wall13 = createSprite(1303, 385, 9, 560)
    wall14 = createSprite(740, 104, 1120, 9)
    wall15 = createSprite(930, 450, 245, 9)
    wall16 = createSprite(135, 450, 130, 9)
    wall17 = createSprite(1177, 560, 245, 9)
    wall18 = createSprite(560, 385, 9, 103)
    wall19 = createSprite(500, 440, 129, 9)
    wall20 = createSprite(327, 545, 235, 9)
    wall21 = createSprite(440, 490, 9, 103)
    wall22 = createSprite(443, 225, 9, 245)
    wall23 = createSprite(380, 335, 368.5, 9)
    wall24 = createSprite(200, 275, 9, 115)
    wall25 = createSprite(260, 223, 115, 10)
    wall26 = createSprite(314, 390, 9, 115)
    wall27 = createSprite(807, 397, 9, 115)
    wall28 = createSprite(749, 337, 125, 9)
    wall29 = createSprite(687, 280, 9, 120)
    wall30 = createSprite(629, 225, 125, 9)
    wall31 = createSprite(932, 278, 9, 116)
    wall32 = createSprite(1060, 225, 250, 9)
    wall33 = createSprite(1053, 341.5, 9, 225)
    wall34 = createSprite(808, 160, 9, 120)
    wall35 = createSprite(1235, 335, 127, 9)
    wall36 = createSprite(1175, 389, 9, 117)
    walls.add(wall1)
    walls.add(wall2)
    walls.add(wall3)
    walls.add(wall4)
    walls.add(wall5)
    walls.add(wall6)
    walls.add(wall7)
    walls.add(wall8)
    walls.add(wall9)
    walls.add(wall10)
    walls.add(wall11)
    walls.add(wall12)
    walls.add(wall13)
    walls.add(wall14)
    walls.add(wall15)
    walls.add(wall16)
    walls.add(wall17)
    walls.add(wall18)
    walls.add(wall19)
    walls.add(wall20)
    walls.add(wall21)
    walls.add(wall22)
    walls.add(wall23)
    walls.add(wall24)
    walls.add(wall25)
    walls.add(wall26)
    walls.add(wall27)
    walls.add(wall28)
    walls.add(wall29)
    walls.add(wall30)
    walls.add(wall31)
    walls.add(wall32)
    walls.add(wall33)
    walls.add(wall34)
    walls.add(wall35)
    walls.add(wall36)


    points = createSprite(265, 275)
    points.addImage(pointStar)
    points.scale = 0.37

    points2 = createSprite(483, 392)
    points2.addImage(pointStar2)
    points2.scale = 0.5

    points3 = createSprite(992, 283)
    points3.addImage(pointStar3)
    points3.scale = 0.47

    plr = createSprite(100, 100)
    plr.addImage(blue)
    plr.scale = 0.05
    plr.debug = true

    blackHole = createSprite(1245,650)
    blackHole.addImage(hole)
    blackHole.scale = 0.07
}   

function draw() {
    background(255)
    image(bg, 0, 0, width, height)
    fill("red");
    textSize(30);
    text("Score: " + score, 1000, 55);
    // move();
    minusOne();
    plusone();
    plus0ne();
    plusOne();
    if(keyIsDown(RIGHT_ARROW)){
        plr.x=plr.x+4
    }
    if(keyIsDown(LEFT_ARROW)){
        plr.x=plr.x-4
    }
    if(keyIsDown(DOWN_ARROW)){
        plr.y=plr.y+4
    }
    if(keyIsDown(UP_ARROW)){
        plr.y=plr.y-4
    }
    drawSprites()
}


 function move() {
     plr.x = mouseX;
     plr.y = mouseY;
     console.log(plr.x, plr.y)
 }



function minusOne() {
    if (walls.isTouching(plr)&&score>0) {
        score = score - 500;
        restitution = 1
        console.log("collided");
    }

}

function plusOne() {
    if (plr.isTouching(points)) {
        restitution = 1.0;
        score = score + 1000;
        points.destroy();
    }
}

function plus0ne() {
    if (plr.isTouching(points2)) {
        restitution = 1.0
        score = score + 1000;
        points2.destroy();
    }
}

function plusone() {
    if (plr.isTouching(points3)) {
        restitution = 1.0
        score = score + 1000;
        points3.destroy();
    }
}

function endGame(){
    if(plr.isTouching(blackHole)){
        blackHole.destroy();
    }
}