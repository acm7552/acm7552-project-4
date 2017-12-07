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

console.log(centerY);
console.log(5);



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

document.querySelector("#colorChooser").onchange = (e)=> {
    var color = e.target.value;
    sail.attr({
        fill: color,
    });
}

var Bob = function(){
    
    aLoop(350);
}
g.animate({ transform: 'translate(' + 2 * centerX/ 5 + ',' + centerY/3 + ')'}, 0, );
Bob()


})




