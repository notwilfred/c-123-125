nosex=0
nosey=0
leftwristx=0;
rightwristx=0;
difference=0;


function setup(){
canvas=createCanvas(500,450);
canvas.position(560,80);
video=createCapture(VIDEO);
video.size(500,500); 
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}


function  modelloaded(){
console.log('posenet is initialised');
}


function gotposes(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("nosex="+nosex);
console.log("nosey="+nosey);

leftwristx=results[0].pose.leftWrist.x;
rightwristx=results[0].pose.rightWrist.x;
difference=floor(leftwristx-rightwristx);
console.log("leftwristx="+leftwristx);
console.log("rightwristx="+rightwristx);
console.log("difference="+difference);
}
}


function draw(){
background("white");
fill("pink");
stroke("pink");
document.getElementById("namesize").innerHTML="width and height of a name will be="+difference;}