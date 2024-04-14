/**
 * Created by overmind1980 on 2015/10/25.
 */
var boyCount = 0;
var boySpeed = 15;
var boys= document.getElementById("boys");
var boyArray = document.getElementsByClassName("boy");
var boyTop = "";
var girl = document.getElementById("girl");
var score = 0;

function initial(){
    var playGround = document.getElementById("playGround");
    playGround.style.height = window.innerHeight + "px";
    setInterval("InsertBoy()",1000);
    setInterval("refresh()",40);
    addEventListener("touchstart",moveGirl);
    girl.style.left = (window.innerWidth/6 - 100) + "px";
    document.getElementById("score").style.fontSize = window.innerWidth*0.1+"px";
}

function moveGirl(event){
    var touch = event.touches[0];
    var touchX = parseInt(touch.clientX);

    if(touchX<window.innerWidth/3){
        girl.style.left =  (window.innerWidth/6 - 100) + "px";
    }else if(touchX<window.innerWidth/3*2){
        girl.style.left =  (window.innerWidth/2 - 100) + "px";
    }else{
        girl.style.left =  (window.innerWidth/6*5 - 100) + "px";
    }
}

function InsertBoy(){
    var boys = document.getElementById("boys");
    var row = parseInt(Math.random()*3);
    var boyTop = window.innerHeight+"px";
    var boyLeft = parseInt(window.innerWidth);

    if(row==0){
        boyLeft = parseInt(window.innerWidth/6 - 100) + "px";
    }else if(row==1){
        boyLeft = parseInt(window.innerWidth/2 - 100)+"px";
    }else{
        boyLeft = parseInt(window.innerWidth/6*5 - 100)+"px";
    }

    boys.innerHTML +="<div id=b"+boyCount+" class='boy' style='left:"+boyLeft+";'></div>";
    document.getElementById("b"+boyCount).style.top = boyTop;
    boyCount++;
}

function refresh(){
    boyArray = document.getElementsByClassName("boy");
    for(var i=0;i<boyArray.length;i++){
        boyTop = boyArray[i].style.top;
        boyTop = parseInt(boyTop.substring(0,boyTop.length-2));
        boyArray[i].top = boyTop-boySpeed+"px";
        boyArray[i].style.top = (boyTop - boySpeed )+"px";
        if(boyTop<-1000){
            boys.removeChild(boyArray[i]);
            score++;
            document.getElementById("score").innerHTML = "score:"+score;
        }
        if((boyTop<girl.style.top+5)&&(boyTop>girl.style.top-5)){
            var girlLeft = parseInt(girl.style.left.substring(0,girl.style.left.length));
            var boyLeft = parseInt(boyArray[i].style.left.substring(0,boyArray[i].style.left.length));

            if(Math.abs(girlLeft-boyLeft)<=30){
                alert("This is Fate!");
            }
        }
    }
}

