

$( document ).ready(function(){

    $(".button-collapse").sideNav();

// Snap SVG time - FIRST INTERACTIVE ***********
// Declare variables and attributes
var s = Snap("#svg1");
var skyrect = s.rect(0,0,5000,5000);
var sandrect = s.rect(0, 300, 5000, 1040);



var mast = s.rect(0, 0, 10, 120);
var sail = s.rect(0, 0, 100, 100);

var hull = s.circle(10, 100, 120);
var hullMask = s.rect(-140, 110, 6000, 70);


var g = s.group(sail, mast, hull, hullMask);

var board = document.getElementById("board");

var centerX = board.offsetWidth;
var centerY = board.offsetHeight;


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
  
    centerX = board.offsetWidth;
    centerY = board.offsetHeight;
    var newY = y === 350 ? 300: 350

    g.animate({
        transform: 'translate(' + 2 * centerX/ 5 + ',' + (200 - ((newY - y)/4)) + ")"}, 2400, );
    
    hullMask.animate
    ( {height: 50 - y/100}, 2400 );

    sandrect.animate
    ({y: y}, 2400, function(){
        aLoop(newY)

    })   
}

var Bob = function(){
    
    aLoop(350);
}
g.animate({ transform: 'translate(' + 2 * centerX/ 5 + ',' + centerY/3 + ')'}, 10, );
Bob()



// Changes the color of the sail
var sailcolor = document.querySelector("#colorChooser").value;

document.querySelector("#colorChooser").onchange = (e)=> {
    sailcolor = e.target.value;
    sail.attr({
        fill: sailcolor,
    });

}

})




