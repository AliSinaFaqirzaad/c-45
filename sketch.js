var ball;
var player1Img ,player2Img;
var soccerGroundImg ,welcomingImg;

function preload(){
    ballImg = loadImage("images/ball.png");
    player1Img = loadImage("images/player1.png");
    player2Img = loadImage("images/player2.png");
    soccerGroundImg = loadImage("images/soccerGround.jpeg");
    welcomingImg = loadImage("images/welcoming.jpeg");
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    background(soccerGroundImg);

    ball = createImage(ballImg);
    
}