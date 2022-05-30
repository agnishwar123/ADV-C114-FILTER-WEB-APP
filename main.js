noseX = 0;
noseY = 0;

function preload(){
    moustache = loadImage('https://i.postimg.cc/CLMWd4Q9/moustache.png');
}

function setup(){
    canvas = createCanvas(450, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -45;
        noseY = results[0].pose.nose.y -5;
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y)
    }
}

function draw(){
    image(video, 0, 0, 450, 300);
    image(moustache, noseX, noseY, 90, 40);
}

function take_snapshot(){
    save('Myfilter.png');
}