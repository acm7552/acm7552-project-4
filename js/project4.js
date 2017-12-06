$( document ).ready(function(){

    $(".button-collapse").sideNav();

// Snap SVG time - FIRST INTERACTIVE ***********
// Declare variables and attributes
var s = Snap("#svg1");
var skyrect = s.rect(0,0,5000,5000);
var sandrect = s.rect(0, 300, 5000, 1040);



var sail = s.rect("50%", "40%", "8vw", "8vw");

var mast = s.rect("49%", "40%", "1vw", "17vw");

var hull = s.circle("50%", "55%", "10vw");
var hullMask = s.rect("15%", "60%", "65vw", "7vw");





skyrect.attr(
{
    fill: "#22cef9",
});

sandrect.attr(
{
    fill: "#0655d3",
});

hull.attr(
{
    fill:  "red", //"#4f3e22",
    mask: hullMask,

});

hullMask.attr({
    fill: "#ffffff",
});

mast.attr({
    fill: "#4f3e22",
});

sail.attr({
    fill: "white",
});





//FUNCTIONS

//We loop a bobbing animation forever for the first interactible
var aLoop = function(y){
  
  
    var newY = y === 350 ? 300: 350

    sandrect.animate
    ({y: y}, 2400, function(){
        aLoop(newY)

    })
  
   
}

var Bob = function(){
    aLoop(350);
}

Bob()
})



