var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('CCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

   var width= screen.width;

   newWidth= screen.width - 70;
   newHeight= screen.height - 300;

   if (width < 992)
   {
       document.getElementById("CCanavs").width = newWidth;
       document.getElementById("CCanavs").height = newHeight;
       document.body.style.overflow = "hidden";
   }

    canvas.addEventListener("touchstart", ttouchstart);
    
    function ttouchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        
    }

   
    canvas.addEventListener("touchmove", ttouchmove);
    function ttouchmove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
       

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

