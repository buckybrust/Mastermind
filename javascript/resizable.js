var rs1 = document.getElementById("rs1");
var rs2 = document.getElementById("rs2");
var elmnt = document.getElementById("colorpicker")
var origpos;
var origwidth;
var origmargin;
elmnt.style.width = "240px";

// Set Resize Bars Height
resizeBars();

//console.log("test running");
function testFunction(e) {
    e = e || window.event;
    console.log("x = " + e.clientX + ", y = " + e.clientY);
    console.log("Coords Printed");

}
rs1.onmousedown = resizeL;
rs2.onmousedown = resizeR;

//Sets up for Resizing
function resizeR(e) {
    e = e || window.event;
    e.preventDefault();
    console.log("Resize The Right")


    //Gets original info
    origpos = e.clientX;
    origwidth = elmnt.style.width;
    origmargin = elmnt.style.left;
    console.log("Original Width = " + origwidth)
    console.log("Original Mouse XPos = " + origpos)
    console.log("Original Left Margin = " + origmargin)


    //Starts actual change
    document.onmouseup = closeDragElement;
    document.onmousemove = elementResizeR;
}

function elementResizeR(e) {
    e = e || window.event;
    e.preventDefault();
    var newpos = e.clientX;
    console.log(origpos - newpos)

    // Set New Width
    elmnt.style.width = (parseInt(origwidth.slice(0, -2)) - (origpos - newpos)) + "px";
    console.log(origpos - newpos)

    //if width exceeds limit bring it back
    var elmntwidth = parseInt(elmnt.style.width.slice(0, -2));
    if (elmntwidth > 500) {
        elmnt.style.width = "500px";
    }
    if (elmntwidth < 70) {
        elmnt.style.width = "70px";
    }


    //Set Resize Bars Correct Hight
    resizeBars();
}






//Sets up for Resizing
function resizeL(e) {
    e = e || window.event;
    e.preventDefault();
    console.log("Resize The Right")


    //Gets original info
    origpos = e.clientX;
    origwidth = elmnt.style.width;
    origLeft = elmnt.style.left;

    console.log("Original Width = " + origwidth)
    console.log("Original Mouse XPos = " + origpos)
    console.log("Original Left Margin = " + origmargin)


    //Starts actual change
    document.onmouseup = closeDragElement;
    document.onmousemove = elementResizeL;
}

function elementResizeL(e) {
    e = e || window.event;
    e.preventDefault();
    var newpos = e.clientX;
    console.log(newpos - origpos)
    
    
    if (parseInt(origwidth.slice(0, -2)) + (origpos - newpos) > 69 && parseInt(origwidth.slice(0, -2)) + (origpos - newpos) < 501) {
        elmnt.style.left = (parseInt(origLeft.slice(0, -2)) - (origpos - newpos)) + "px";
        
        
    }else if(parseInt(origwidth.slice(0, -2)) + (origpos - newpos) <= 69){
        
    }
    
    elmnt.style.width = (parseInt(origwidth.slice(0, -2)) + (origpos - newpos)) + "px";
    

    //if width exceeds limit bring it back
    var elmntwidth = parseInt(elmnt.style.width.slice(0, -2));
    if (elmntwidth > 500) {
        elmnt.style.width = "500px";
    }
    if (elmntwidth < 70) {
        elmnt.style.width = "70px";
    }


    //Set Resize Bars Correct Hight
    resizeBars();
}






function closeDragElement() {

    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
}

// Set Resize Bars Correct Height
function resizeBars() {
    rs1.style.height = rs2.style.height = (elmnt2.offsetHeight - document.getElementById("colorpickerheader").offsetHeight - 4) + "px";
}
