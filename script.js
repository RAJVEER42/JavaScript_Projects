let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

// Start the game on any keypress
document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

// Flash effect for game-chosen button
function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(() => btn.classList.remove("gameflash"), 250);
}

// Flash effect for user-selected button
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => btn.classList.remove("userflash"), 150);
}

// Go to next level
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // Choose a random button/color
    let randomIndex = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log("Game sequence:", gameSeq);
    gameFlash(randomBtn);
}

// Check user's answer
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        document.body.style.backgroundColor = 'red';
        setTimeout(() => document.body.style.backgroundColor = 'white', 150);

        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start.`;
        reset();
    }
}

// Handle user button press
function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

// Add event listeners to all color buttons
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// Reset game state
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
