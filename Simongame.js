let gameSq=[];
let userSeq=[];
let random=["yellow","red","green","purple"];
let level=0;
let scores=[];
let started=false;
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;
        levelup();
    }

});
function flashup(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function levelup(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randomcolor=Math.floor(Math.random()*3);
    let randombtn=random[randomcolor];
    let randomindex=document.querySelector(`.${randombtn}`);
    gameSq.push(randombtn);
    console.log(gameSq);
    flashup(randomindex);
}
function check(index){
    
    if(userSeq[index]===gameSq[index]){
        if(userSeq.length==gameSq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        scores.push(level);
        const highestScore = Math.max(...scores);
        h3.innerHTML=`Game is over!! Your score: ${level} <br> Highest Score is: ${highestScore}<br> Press any key to try again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        resetto();
    }
    
}
function btnpress(){
    let btn=this;
   
    flashup(btn);
    let usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log(userSeq);
    check(userSeq.length-1);
    
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);

}
function resetto(){
    started=false;
    userSeq=[];
    gameSq=[];
    level=0;

}