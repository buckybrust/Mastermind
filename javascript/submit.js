var empty1 = document.getElementById("empty1");
var empty2 = document.getElementById("empty2");
var empty3 = document.getElementById("empty3");
var empty4 = document.getElementById("empty4");
var emptyarea = document.getElementById("emptyarea");
var rownumber = 0;


function onSubmit() {
    rownumber++

    var empty1 = document.getElementById("empty1");
    var empty2 = document.getElementById("empty2");
    var empty3 = document.getElementById("empty3");
    var empty4 = document.getElementById("empty4");
    
    empty1.classList.add = ("row" + rownumber)
    empty1.style.width = empty2.style.width = empty3.style.width = empty4.style.width = "78px";
    empty1.style.height = empty2.style.height = empty3.style.height = empty4.style.height = "78px";
    empty1.style.border = empty2.style.border = empty3.style.border = empty4.style.border = "2px solid black";
    
    empty1.id = empty2.id = empty3.id = empty4.id = "";
    
    emptyarea.innerHTML += "<div class='empty' id='empty1' ondrop='drop(event)' ondragover='allowDrop(event)' onclick='paste(event)'></div><div class='empty' id='empty2' ondrop='drop(event)' ondragover='allowDrop(event)' onclick='paste(event)'></div><div class='empty' id='empty3' ondrop='drop(event)' ondragover='allowDrop(event)' onclick='paste(event)'></div><div class='empty' id='empty4' ondrop='drop(event)' ondragover='allowDrop(event)' onclick='paste(event)'></div>"
}
