object = [];
video = "";

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 380)
    video.hide();
}
function start()
{
    objectDetecter = ml5.objectDetecter('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
    object_name = document.getElementById("object_name").value;
}
function modeLoaded()
{
    console.log("modelLoaded");
    status = true;
   
}
function draw()
{
    image(video, 0, 0, 480, 380);
}