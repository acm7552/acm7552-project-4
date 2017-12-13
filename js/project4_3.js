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
    var moon = s.circle(10, 100, 80);
    var sandrect = s.rect(0, 300, 5000, 1040);
    
    
    
    var mast = s.rect(0, 0, 10, 120);
    var sail = s.rect(0, 0, 100, 100);
    
    var hull = s.circle(10, 100, 120);
    var hullMask = s.rect(-140, 110, 6000, 70);
    
    
    var g = s.group(sail, mast, hull, hullMask);
    
    
    
    moon.attr(
    {
        fill: "#c9c9c9",
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
    

    var hours = 12;
    
    document.querySelector("#hourChooser").onchange = (e)=> {
        hours = e.target.value;
        
    }

    //Expanding on the first interactible
    var aLoop = function(y){
      
        centerX = board.offsetWidth;
        centerY = board.offsetHeight;
        var newY = y === 350 ? 300: 350
        
                  
        g.animate({
            transform: 'translate(' + 2 * centerX/ 5 + ',' + (200 - ((newY - y)/4)) + ")"}, hours * 200, );
        
        hullMask.animate
        ( {height: 50 - y/100}, hours * 200 );
            
        skyrect.animate
        ({fill: "black"}, hours * 200

        )
        sun.animate({
            transform: 'translate(10, 500)'}, hours * 200, 
        
        )
        sun.animate({
            fill: 'rgba(240, 36, 0, 1)'}, hours * 200
        
        )

        moon.animate({
            transform: 'translate(' + (2*centerX/3) + ',100)'}, hours * 200
    )

        sandrect.animate
        ({fill: "rgba(0, 0, 117, 1)"}, hours * 200
          
        )  
        sandrect.animate
        ({y: y}, hours * 200, function(){
            aLoop2(newY)
          
        })   
    }

    var aLoop2 = function(y){
        
          centerX = board.offsetWidth;
          centerY = board.offsetHeight;
          var newY = y === 350 ? 300: 350
          
                    
          g.animate({
              transform: 'translate(' + 2 * centerX/ 5 + ',' + (200 - ((newY - y)/4)) + ")"}, hours * 200, );
          
          hullMask.animate
          ( {height: 50 - y/100}, hours * 200);
              
          skyrect.animate
          ({fill: "rgba(34, 206, 249, 1)"}, hours * 200
  
          )
          sun.animate({
              transform: 'translate(10, 100)'}, hours * 200, 
          
          )
          sun.animate({
              fill: 'rgba(255, 240, 0, 1)'}, hours * 200
          
          )

          moon.animate({
            transform: 'translate(' + (2*centerX/3) + ',500)'}, hours * 200
    )
  
          sandrect.animate
          ({fill: "rgba(0, 0, 117, 1)"}, hours * 200
            
          )  
          sandrect.animate
          ({y: y}, hours * 200, function(){
              aLoop(newY)
            
          })   
      }
    
    
    var Bob = function(){
        
        aLoop(350);
    }
    g.animate({ transform: 'translate(' + 2 * centerX/ 5 + ',' + centerY/3 + ')'}, 10, );
    Bob()

})