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

// call

for (let btn of callBtn) {
  btn.addEventListener("click", function () {
      if (coin < 0) {
          alert("❌ you don't have enough coin. you need 20 coin to call");
          return;
        }
        
    coin -= 20;
    coinCount.innerText = coin;

    const card = btn.closest("div#card");

    const service = card.querySelector(".service").innerText;
    const number = card.querySelector(".number").innerText;

    alert(`📞 Calling ${service} ${number}...`);

    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const li = document.createElement("div");
    li.innerHTML = `
        <div class="bg-gray-100 rounded-xl flex justify-between items-center p-4 space-y-3 ">
            <div>
                <h1 class = "font-bold">${service}</h1>
                <p>${number}</p>
            </div>
            <div>
                ${timeString}
            </div>
          </div>
    `;
    historyList.appendChild(li);
  });
}

// copy

for (let btnC of copyBtn) {
  btnC.addEventListener("click", function () {
    copy += 1;
    copyCount.innerText = copy;
  });
}

// heart

for (let btnH of heartBtn) {
  btnH.addEventListener("click", function () {
    heart += 1;
    heartCount.innerText = heart;
  });
}

// clear

clearBtn.addEventListener("click", function () {
  heart = 0;
  coin = 100;
  copy = 0;

  heartCount.innerText = heart;
  coinCount.innerText = coin;
  copyCount.innerText = copy;
  historyList.innerHTML = "";
});
