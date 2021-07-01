function preload() {
}

function setup(){
 canvas = createCanvas(640 , 480);
canvas.position(110 , 300);
Video = createCapture(VIDEO);
Video.hide();

tint_color= "";
}

function draw() {
    image(Video , 0 , 0 , 640 , 480);
    tint(tint_color);
}

function ADDFILTER(){
    tint_color = document.getElementById("filter_color").value;
}

function take_snapshot(){
    save('IMAGE.png');

}