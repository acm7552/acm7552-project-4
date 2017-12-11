$( document ).ready(function(){
    
    $(".button-collapse").sideNav();
    
    // Snap SVG time - THIRD INTERACTIVE ***********
    // Declare variables and attributes
    var s = Snap("#svg3");
    var board = document.getElementById("board");
    
    var centerX = board.offsetWidth;
    var centerY = board.offsetHeight;

    var skyrect = s.rect(0,0,5000,5000);
    var sun = s.circle(10, 100, 80);
    var moon = s.circle(centerX-10, 500, 80);
    var sandrect = s.rect(0, 300, 5000, 1040);
    
    
    
    var mast = s.rect(0, 0, 10, 120);
    var sail = s.rect(0, 0, 100, 100);
    
    var hull = s.circle(10, 100, 120);
    var hullMask = s.rect(-140, 110, 6000, 70);
    
    
    var g = s.group(sail, mast, hull, hullMask);
    
    
    
    moon.attr(
    {
        fill: "#white",
    });

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
    
    sun.attr({
        fill: "yellow",
    });
    

    //Expanding on the first interactible
    var aLoop = function(y){
      
        centerX = board.offsetWidth;
        centerY = board.offsetHeight;
        var newY = y === 350 ? 300: 350
        
                  
        g.animate({
            transform: 'translate(' + 2 * centerX/ 5 + ',' + (200 - ((newY - y)/4)) + ")"}, 2400, );
        
        hullMask.animate
        ( {height: 50 - y/100}, 2400 );
            
        skyrect.animate
        ({fill: "black"}, 2400

        )
        sun.animate({
            transform: 'translate(10, 500)'}, 2400, 
        
        )
        sun.animate({
            fill: 'rgba(240, 36, 0, 1)'}, 2400 
        
        )

        moon.animate({
            transform: 'translate(' + centerX-10 + ',' + 
        100 + ')'}, 2400
    )

        sandrect.animate
        ({fill: "rgba(0, 0, 117, 1)"}, 2400
          
        )  
        sandrect.animate
        ({y: y}, 2400, function(){
            aLoop2(newY)
          
        })   
    }

    var aLoop2 = function(y){
        
          centerX = board.offsetWidth;
          centerY = board.offsetHeight;
          var newY = y === 350 ? 300: 350
          
                    
          g.animate({
              transform: 'translate(' + 2 * centerX/ 5 + ',' + (200 - ((newY - y)/4)) + ")"}, 2400, );
          
          hullMask.animate
          ( {height: 50 - y/100}, 2400 );
              
          skyrect.animate
          ({fill: "black"}, 2400
  
          )
          sun.animate({
              transform: 'translate(10, 100)'}, 2400, 
          
          )
          sun.animate({
              fill: 'rgba(240, 36, 0, 1)'}, 2400 
          
          )
  
          sandrect.animate
          ({fill: "rgba(0, 0, 117, 1)"}, 2400
            
          )  
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

})