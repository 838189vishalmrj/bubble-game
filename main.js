
let randomHitNubmer;
let timer = 60;
let score = 0;

function makeBubble(){
    let bubble = ""
    for(let i=1 ; i<=168 ; i++){
        const randomNumber = Math.floor(Math.random()*10)
        bubble += `<div class="bubble">${randomNumber}</div>`
    }
    document.querySelector("#pbtm").innerHTML=bubble;
}

function timerFunc(){
    const setintervalId = setInterval(()=>{
        if(timer >=0){
            document.querySelector("#timeNumber").textContent = timer;
            timer--;
        }else{
            clearInterval(setintervalId)
            document.querySelector("#pbtm").innerHTML = "<h1 class='game_over'>Game over</h1>"
        }
    },1000)
}


function hitGeneratFnc(){
    randomHitNubmer = Math.floor(Math.random()*10)
    document.querySelector("#hitNumber").textContent = randomHitNubmer;
}

function onBubbleClick(){
    document.querySelector("#pbtm").addEventListener("click",(e)=>{
       const bubbleValue =  Number(e.target.textContent);
       console.log(bubbleValue);
       if(randomHitNubmer === bubbleValue){
        document.querySelector("#scoreNumber").textContent = score+=10
        makeBubble();
        hitGeneratFnc();
        // timerFunc()
       }
    })
}

onBubbleClick()
hitGeneratFnc()
makeBubble();
timerFunc()