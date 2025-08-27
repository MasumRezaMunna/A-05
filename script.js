let heart = 0;
let coin = 100;
let copy = 0;

const heartCount = document.getElementById("heartCount");
const coinCount = document.getElementById("coinCount");
const copyCount = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");

const callBtn = document.getElementsByClassName("call-btn");
const copyBtn = document.getElementsByClassName("copy-btn");
const heartBtn = document.getElementsByClassName("heart");
const clearBtn = document.getElementById("clear-btn");

}

// copy

for(let btnC of copyBtn){
    btnC.addEventListener("click", function(){
    copy += 1;
    copyCount.innerText = copy;
})
}

// heart

for(let btnH of heartBtn){
    btnH.addEventListener("click", function(){
    heart += 1;
    heartCount.innerText = heart;
})
}

// clear

clearBtn.addEventListener("click", function(){
    heart = 0;
    coin = 100;
    copy = 0;
    
    heartCount.innerText = heart;
    coinCount.innerText = coin;
    copyCount.innerText = copy;
    historyList.innerHTML = "";
})