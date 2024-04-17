const quizData = [
    {
        kysymys: "kuinka monta pyramidia oli vuonna 1990",
        vaihtoehdot: ["kolme", "kaksi", "viisi", "kuusikymmentä"],
        vastaus: "kolme"
    },
    {
        kysymys: "",
        vaihtoehdot: [],
        vastaus: ""
    },
    // Add more questions here...
];

const kysymysElement = document.getElementById("Kysymys");
const vaihtoehdotElement = document.getElementById("Vaihtoehdot");
const vastaaButton = document.getElementById("Vastaa");

let currentkysymys = 0;
let score = 0;

function showkysymys() {
    const Kysymys = quizData[currentkysymys];
    kysymysElement.innerText = Kysymys.kysymys

    vaihtoehdotElement.innerHTML = "";
    Kysymys.vaihtoehdot.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        vaihtoehdotElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const vastaus = quizData[currentkysymys].vastaus;

    if (selectedButton.innerText === vastaus) {
        score++;
    }

    currentkysymys++;

    if (currentkysymys < quizData.length) {
        showkysymys();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.innerHTML = `
        <h1>Onnea, testi valmis!</h1>
        <p>Pisteesi: ${score}/${quizData.length}</p>
        `;
}

showkysymys();
