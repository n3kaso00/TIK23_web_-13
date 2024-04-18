const wordList = [
    {
        word: "rooma",
        hint: "kaupunki"
    },
    {
        word: "colosseum",
        hint: "areena"
    }
]

const inputs = document.querySelector(".inputs"),
resetBtn = document.querySelector(".reset-btn"),
hint = document.querySelector(".hint span"),
wrongLetter = document.querySelector(".wrong-letter span"),
typingInput = document.querySelector(".typing-input");

let word, incorrects = [];

function randomWord() {
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;
    console.log(ranObj);

    hint.innerText = ranObj.hint;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html = `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}

randomWord();

function initGame(e) {
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/)) {
        console.log(key);
        if(word.includes(key)) {
            for (let i = 0; i < array.length; i++) {
                if(word[i] === key) {
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            incorrects.push(key);
        }
    }
    wrongLetter.innerText = incorrects;
    typingInput.value = "";
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame)
document.addEventListener("keydown", () => typingInput.focus());