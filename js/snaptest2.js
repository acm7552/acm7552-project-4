window.onload = function() {

    // Define variables
    var s = Snap("#svg");
    var dragging = 0;
    var handleGroup;

    // function to add handles
    function addHandleFunc() {
        if( dragging == 0 ) {
            dragging = 1;
            var bb = this.getBBox();
            var handle = new Array();
            handle[0] = s.circle(bb.x,bb.y,10).attr({class: 'handler'});;
            handle[1] = s.circle(bb.x+bb.width, bb.y, 10).attr({class: 'handler'});
            handleGroup = s.group(this, handle[0], handle[1]);
            handleGroup.drag(moveScale,start,stop);
        } 
        else 
        {
            dragging = 0;
            s.append(this);
            handleGroup.selectAll('handler').remove();
            handleGroup.remove();
        }
    }

    var start = function() {
        this.data('origTransform', this.transform().local);
    }

    var moveScale = function(dx,dy) {
        var scale = 1 + dx / 50;
        this.attr({
                transform: this.data('origTransform') + (this.data('origTransform') ? "S" : "s") + scale
        });
    }


    var stop = function() {
        
    };

    //these functions let us move the transforms as well
    var move = function(dx,dy) {
        if( dragging == 0 ) {
            this.attr({
                    transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
                   });
                }
    }

    
    var stopMove = function() {
        console.log('finished dragging');
    }   

    var myRect = s.rect( 100,100,100,100 ).attr({fill: 'blue'});
    var myElipse = s.circle(30, 35, 90, 20).attr({fill: 'red'});
    // var x = s.group(myRect, myElipse);

    var g = s.g();
    // Design my own svg in Illustrator
    var image = g.image("svgs/Artboard 1.svg", 300, 0, 200, 200);

    myRect.dblclick( addHandleFunc );;
    myElipse.dblclick( addHandleFunc );;
    image.dblclick( addHandleFunc );;


    myRect.drag(move, start, stopMove );
    myElipse.drag(move, start, stopMove );
    image.drag(move, start, stopMove);
    // x.drag(move, start, stopMove);

    s.text(85,220, 'Click and drag these objects around!');
    s.text(85,240, 'Or double click to enable handles for scaling!');

    

    // I should be able to drag them around, or double click for scaling
    
}