const p1Button = document.querySelector("#player1");
const p2Button = document.querySelector("#player2");
const reset = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winNum = document.querySelector("#score");

let p1Score = 0;
let p2Score = 0;
let winningScore = 1;
let gameOver = false;


p1Button.addEventListener("click", () => {
    if (!gameOver) {
        p1Display.innerText = p1Score += 1;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add("win");
            p2Display.classList.add("lose");
        }
    }
});

p2Button.addEventListener("click", () => {
    if (!gameOver) {
        p2Display.innerText = p2Score += 1;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add("win");
            p1Display.classList.add("lose");
        }
    }
});

winNum.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    resetDisplay();
});

function resetDisplay() {
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1Display.classList.remove("win", "lose");
    p2Display.classList.remove("win", "lose");
}

reset.addEventListener("click", resetDisplay);