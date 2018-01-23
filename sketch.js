var Slider;
var thatgirldreaa;
var Bruno;

function setup(){
    createCanvas(600,400);
    background(0);
    
    //createSlider(min,max, default)
    Slider = createSlider(0,255,113);
    Slider.position(20,20);
    thatgirldreaa = createSlider(0,255,225);
    thatgirldreaa.position(20,50);
    Bruno = createSlider(0,255,60);
    Bruno.position(20,80);
}

function draw(){
    redValue = Slider.value();
    greenValue = thatgirldreaa.value();
    blueValue = Bruno.value();
    background(redValue,greenValue, blueValue);
}