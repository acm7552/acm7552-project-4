$( document ).ready(function(){

    $(".button-collapse").sideNav();


    // Snap SVG time - FIRST INTERACTIVE ***********
    // Declare variables and attributes

    var s = Snap("#svg2");
    
    var skyrect = s.rect(0,0,5000,5000);
    
    
    
    var mast = s.rect(50, 50, 1, 12);
    var sail = s.rect(50, 50, 10, 10);
    
    var hull = s.circle(51, 60, 12);
    var hullMask = s.rect(36, 61, 600, 7);

    var g = s.group(sail, mast, hull, hullMask);
    
    var board = document.getElementById("board");
    
    var centerX = board.offsetWidth;
    var centerY = board.offsetHeight;

    var islandarray = [];
    var maskarray = []

    

    //Randomly place islands on the board
    for (i = 0; i < 7; i++)
    {
        var newX = ((Math.random() * centerX) + 70) * .7;
        var newY = ((Math.random() * centerY) + 70)  * .7;
        var island = s.circle(newX, newY, 25);
        var island2 = s.circle(newX + 30, newY, 23);
        var islemask = s.rect(newX-50, newY - 90, 800, 90);
        var islemask2 = s.rect(newX-50, newY - 90, 800, 90);

        maskarray.push(islemask);

        islemask.attr(
        {
            fill: "#ffffff",
        }
        )
        islemask2.attr(
        {
            fill: "#ffffff",
        }
        )
        island.attr(
        {
            fill: "#fcd37b",
            mask: maskarray[i],
        }
        )
        island2.attr(
        {
            fill: "#fcd37b",
            mask: islemask2,
                
        }
        )

        

        islandarray.push(island);
        islandarray.push(island2);
    }
    

    skyrect.attr(
    {
        fill: "#22cef9",
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


    

    
    var aLoop = function(){
        
          centerX = board.offsetWidth;
          centerY = board.offsetHeight;  
      
           
          g.animate({
              transform: 'translate(' + 0 + ',' + 
              centerY/3 + ")"}, 2000,function(){
                aLoop2()
              })          
      }
      var aLoop2 = function(){
        
          centerX = board.offsetWidth;
          centerY = board.offsetHeight;  
      g.animate({
        transform: 'translate(' + centerX/3 + ',' + 
          0 + ")"}, 2000, function(){
            aLoop3()
          })  
        }

        var aLoop3 = function(){
            
              centerX = board.offsetWidth;
              centerY = board.offsetHeight;  
          g.animate({
            transform: 'translate(' + 2*centerX/3 + ',' + 
              centerY/3 + ")"}, 2000, function(){
                aLoop4()
              })  
            }

            var aLoop4 = function(){
                
                  centerX = board.offsetWidth;
                  centerY = board.offsetHeight;  
              g.animate({
                transform: 'translate(' + centerX/3 + ',' + 
                  2*centerY/3 + ")"}, 2000, function(){
                    aLoop()
                  })  
                }



   
    

    aLoop();
    // Changes the color of the sail
var sailcolor = document.querySelector("#colorChooser").value;

document.querySelector("#colorChooser").onchange = (e)=> {
    sailcolor = e.target.value;
    sail.attr({
        fill: sailcolor,
    });

}

  
 
    
})