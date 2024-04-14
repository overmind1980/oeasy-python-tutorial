
var startTime = new Date();
var score = 0;
var IsMouseLiving = false;
function initial(){
    var height = parseInt(window.innerHeight *.25);
    var width = parseInt(window.innerWidth *.25);
    var sheet = document.styleSheets[0];
    sheet.insertRule(".row{height:"+height,3);
    sheet.insertRule(".column{width:"+width+"px;height:"+height+"px;}",3);
    sheet.insertRule("#playground{width:"+width*3+"px;}",3);
    setInterval("refresh()",100);
    setInterval("born()",1000);
    var places = document.getElementsByClassName("column");
    for(var i=0;i<places.length;i++){
        places[i].addEventListener("mousedown",clickMouse,false);
        places[i].addEventListener("touchstart",clickMouse,false);
    }
}

function clickMouse(){
    var place = document.getElementById(this.id);
    if(place.className=="column ShowMouse"){
        place.className="column HideMouse";
        IsMouseLiving = false;
        var boom = document.getElementById("boom");
        boom.style.left = event.clientX+"px";
        boom.style.top = event.clientY+"px";
        boom.style.display = "block";
        setTimeout("BoomDisapear()",300);
    }
}

function BoomDisapear(){
    var boom = document.getElementById("boom");
    boom.style.display = "none";
    score ++;
}

function refresh(){
    var now = new Date();
    document.getElementById("time").innerHTML="Time:"+(now - startTime)/1000;
    document.getElementById("score").innerHTML="Score:"+score;
}

function born() {
    if (!IsMouseLiving) {
        var number = Math.round(Math.random() * 8);
        console.log(number);
        var place = document.getElementById("place" + number);
        console.log(place);
        place.classList.remove("HideMouse");
        place.classList.add("ShowMouse");
        IsMouseLiving = true;
    }
    else{
        ;
    }
}