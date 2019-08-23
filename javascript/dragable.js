if (el = 20) {
    console.log("selected.js launched successfully")
}

//Setting Global Variables
var palletewidth = "229px"
var isleft = false;
var rs1 = document.getElementById("rs1");
var rs2 = document.getElementById("rs2");
var elmnt2 = document.getElementById("colorpicker")


//Make Resizebars the Same Height as Main
rs1.style.height = rs2.style.height = (elmnt2.offsetHeight - document.getElementById("colorpickerheader").offsetHeight - 4) + "px";

//Start Program
dragElement(document.getElementById("colorpicker"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    //use the header to move the div
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    //rs1.onmousedown = dragResizeLeft;
    //rs2.onmousedown = dragResizeRight;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;

        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }


    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // if width or top is not set set it
        if (elmnt.style.width <= 0) {
            elmnt.style.width = palletewidth;
            elmnt.style.left = "0px";
        }

        //console.log("Height with padding and border: " + elmnt.offsetHeight + "px");

        //move element up or down
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";

        //if element is past the top set it top
        if (parseInt(elmnt.style.top.slice(0, -2)) < 0) {
            elmnt.style.top = "0px"
        }

        //if element is past the bottom set it to the bottom
        if (parseInt(elmnt.style.top.slice(0, -2)) + elmnt.offsetHeight > window.innerHeight) {
            elmnt.style.top = (window.innerHeight - elmnt.offsetHeight) + "px";
        }


        // move element left or right
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

        //if element is past the left set it left
        if (parseInt(elmnt.style.left.slice(0, -2)) < 0) {
            elmnt.style.left = "0px"
        }

        //if elemnt is past right set it to right
        if (parseInt(elmnt.style.width.slice(0, -2)) + parseInt(elmnt.style.left.slice(0, -2)) > window.innerWidth - 5) {
            elmnt.style.left = (window.innerWidth - 5 - parseInt(elmnt.style.width.slice(0, -2))) + "px";
        }

    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
