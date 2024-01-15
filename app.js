let gameSeq = [];
let userSeq =[];
let btns = ["yellow","red","green","purple"];

let started = false ;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
    }
    levelUp();
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250)
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText = `Level ${level}`;
    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];
    let randbtn = document.querySelector(`.${randColor}`)
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnflash(randbtn);
}

function checkAns(idx){
    // let idx = level-1;
    if(gameSeq[idx]===userSeq[idx]){
         if(gameSeq.length==userSeq.length){
            setTimeout(levelUp(),1000);
         }
    }else{
        h3.innerHTML=`Game over!Your score was <b>${level}</b>.<br>Press any key to start game`;
        highestScore(level);
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 200);
        
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    btnflash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    // console.log(userSeq);

}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

