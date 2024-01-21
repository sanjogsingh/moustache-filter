nosex=0
nosey=0
function preload()
{
nose=loadImage("moustache-removebg-preview.png")

}

function setup()
{
    
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.hide()
video.size(300,300)
posenet=ml5.poseNet(video,modelLoaded)
posenet.on("pose",gotresults)

} 

function draw()
{
image(video,0,0,300,300)
// stroke("brown")
// fill("red")
// circle(nosex,nosey,30)
image(nose,nosex-32,nosey-15,70,70)

}
function TakePic()
{
save("picture.jpeg")
}

function modelLoaded()
{
    console.log("success")
}

function gotresults(results)
{
 console.log(results.length) 
 if (results.length!=0)
 {
    nosex=results[0].pose.nose.x
    nosey=results[0].pose.nose.y
    console.log("nose x = "+nosex)
    console.log("nose y = "+nosey)
 }
}