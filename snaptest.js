window.onload = function() {


    //var s = Snap("#svg");

    //TESTING BASIC SHAPES AND ATTRIBUTES 
    // Circle with 80px radius
    //var circle = s.circle(90,120,80);
    // Square with 160px side width
    //var square = s.rect(210,40,160,160);
    // Ellipse with 80px vertical radius and 50px horizontal radius
    //var ellipse = s.ellipse(460,120,50,80);
    //testing attributes
    //circle.attr({
    //    fill: 'blue',
    //    stroke: 'coral',
    //    strokeOpacity: .6,
    //    strokeWidth: 10
    //  });
       
    //  square.attr({
    //    fill: 'lightblue',
    //    stroke: 'lightblue',
    //    strokeOpacity: .3,
    //    strokeWidth: 10
    //  });
       
    //  ellipse.attr({
    //    fill: 'mediumturquoise',
    //    stroke: 'mediumturquoise',
    //    strokeOpacity: .2,
    //    strokeWidth: 10
    //  });

    //var circle_1 = s.circle(300, 200, 140);
    //var circle_2 = s.circle(250, 200, 140);
     
    //var circles = s.group(circle_1, circle_2);
     
    //var ellipse = s.ellipse(275, 220, 170, 90);
     
    //circles.attr({
    //  fill: 'coral',
    //  fillOpacity: .6,
    //});
     
    //ellipse.attr({
    //  opacity: .4
    //});

    // basic getting started tutorial from http://snapsvg.io/start/

    var s = Snap("#svg"); // Step 1

    var bigCircle = s.circle(150, 150, 100); // Step 2

    bigCircle.attr({ //Step 3
        fill: "#bada55",
        stroke: "#000",
        strokeWidth: 5
    });

    var smallCircle = s.circle(100, 150, 70); //Step 4

    var discs = s.group(smallCircle, s.circle(200, 150, 70)); // Step 5

    discs.attr({ // Step 6
        fill: "#fff"
    });

    bigCircle.attr({ // Step 7
        mask: discs
    });
    smallCircle.animate({r: 50}, 2000); // Step 8
    discs.select("circle:nth-child(2)").animate({r: 50}, 1000); // Step 9

    var p = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({// Step 10, create a pattern
        fill: "none",
        stroke: "#bada55",
        strokeWidth: 5
    });

    p = p.pattern(0, 0, 10, 10); 
    
    bigCircle.attr({
        fill: p
    });

    discs.attr({ // Step 11 snap embedded patterns
        fill: Snap("#pattern")
    });

    discs.attr({fill: "r()#fff-#000"}); //Step 12 gradient fill

    discs.attr({fill: "R(150, 150, 100)#fff-#000"});// Step 13 sharing a gradient fill
    
}