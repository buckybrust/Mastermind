
//Global Variables
var button = document.getElementById("button");
var i = 0;
var el = 20;
var selectedElement
var keyType
//Event Listeners
document.addEventListener("keypress", function(event){keypress(event.key)});


//Game

function keypress(key){
    console.log("key pressed: " + key);
    keyType = 0
    if(key == 1){keyType = "red"}else if(key == 2){keyType = "blue"}else if(key == 3){keyType = "green"}else if(key == 4){keyType = "gold"}else if(key == 5){keyType = "purple"}else if(key == 6){keyType = "orange"}else if(key == 7){keyType = "black"}else if(key == 8){keyType = "white"}else{selectedKeyPress(key)}
    
    if (keyType != 0){
        clearSelected();
        document.getElementById(keyType).classList.add("selected");
    }
}

function selectedKeyPress(key){
    if(key == "j"){key = "empty1"
    }else if(key == "k"){key = "empty2"
    }else if(key == "l"){key = "empty3"
    }else if(key == ";"){key = "empty4"}
    applyColor(key);
    
}

function applyColor(targetId){
    var selectedElement = document.getElementsByClassName("selected")[0];
    target = document.getElementById(targetId);
    if(target != null && target != undefined ){
    target.style.backgroundColor = selectedElement.style.backgroundColor;
    target.style.border = "10px solid gray"
    target.style.width = target.style.height = "62px"
    var target1 = target;
    //console.log(target)
    window.setTimeout(function(){
        target1.style.border = "1px solid gray"
        target1.style.width = target1.style.height = "80px"
    }, 300)
    }
}

function allowDrop(ev){
    ev.preventDefault();
    clearSelected();
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id)
}

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.style.backgroundColor = data
    console.log(data);
}

function select(ev){
    clearSelected();
    ev.target.classList.add("selected")
    //console.log(ev.target.classList)
    i = 0;
    
}
function paste(ev){
    if (document.getElementsByClassName("selected").length == 1){
        applyColor(ev.target.id);
    }else{
        console.log("Error: Class Name List of 'selected' is " + document.getElementsByClassName("selected").length)}
}

function clearSelected(){
    for(i = 0; i < document.getElementsByClassName("selected").length; i++){
    //console.log(i);
    document.getElementsByClassName("selected")[i].classList.remove("selected");
    }
}