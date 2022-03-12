song="";
rightwristX=0;
rightwristY=0;
leftwristX=0;
leftwristY=0;
score_right_wrist=0;
score_left_wrist=0;


function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotposes);
}
 function gotposes(results){
     
    if(results.length>0){
        console.log(results);
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
        console.log("rightwristX :- "+rightwristX+"rightwirstY"+rightwristY);

        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        console.log("leftwristX :- "+leftwristX+"leftwirstY"+leftwristY);
    }
     
 }

function modelLoaded(){
    console.log("Posenet is Intialized");
}
 
function preload(){
    song=loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,500);
    fill("#FF6347");
    stroke("#FF0000");
    if (score_left_wrist>0.2){
        circle(leftwristX,leftwristY,20);
        InNumberleftwristY=Number(leftwristY);
        remove_decimal=floor(InNumberleftwristY);
        volume=remove_decimal/500;
        document.getElementById("volume").innerHTML="volume=  "+volume;
        song.setVolume(volume);
    } 
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function pause(){
    song.pause();
}


















