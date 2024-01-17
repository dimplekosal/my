
status ="";
object = [];

function preload() {

    }





function setup() {

    canvas = createCanvas(380,380);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting Object"
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
}


function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectdetector = detect(video,gotResult); 
}

function gotresults(error,results) {
    if(error) {
        console.log(error);
    
    }
    console.log(results)
    objects = results;
}



function draw() {
    image(video,0,0,380,380);
    if(status != "")
    {r= random(255);
    g = random(255);
    b = random(255);
        
        
        objectDectector.detect(video,gotResults);
        for (i = 0; i< objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Object Dectection";
            document.getElementById("Number_of_objects").innerHTML = "Number of objects detected  are :"+  Object.length;
            Fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke(r,g,b);
            
            rect(objects[i].x,objects[i].y ,object[i].width,object[i].height);
        }
    }

}
function start(){
    objectDectector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting Object";
}