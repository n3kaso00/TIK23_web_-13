const questions = [
    {
        question: "Mitä renessanssi tarkoittaa?",
        answers: [
            { text: "Antiikin kulttuurin elpymistä ja uudelleen syntymistä", correct: true},
            { text: "Taistelua lohikäärmeitä vastaan keskiaikaisessa Euroopassa", correct: false},
            { text: "Merirosvojen välistä kaupankäyntiä", correct: false},
            { text: "Muotitrendiä keskiajalta, jossa kaikki käyttivät mekkoja", correct: false},
        ]
    },
    {
        question: "Mitä on humanismi?",
        answers: [
            { text: "Ihmisen muuttumista osaksi kasvillisuutta", correct: false},
            { text: "1300-luvulla syntynyt kulttuurivirtaus, joka korosti ihmisarvoa ja ihmisyyttä", correct: true},
            { text: "Teoria, jonka mukaan ihmiset ovat salaa robotteja", correct: false},
            { text: "Historiallinen liike, joka kannusti ihmisiä olemaan vegaaneja", correct: false},
        ]
    },
    {
        question: "Milloin ja missä renessanssi kehittyi?",
        answers: [
            { text: "Italiasta, 1300-luvun lopussa", correct: true},
            { text: "Kreikasta, 1300-luvun lopussa", correct: false},
            { text: "Espanjasta, 1430-luvun lopussa", correct: false},
            { text: "Englannista 1300-luvun puolessa välissä. ", correct: false},
        ]
    },
    {
        question: "Minkälainen oli ihanteellinen ihmiskuva keskiaikana?",
        answers: [
            { text: "Rikas ja köyhiä halveksiva", correct: false},
            { text: "Merenkulkija ,joka purhehti rohkeasti etsimään kultaa", correct: false},
            { text: "Ylimielinen ja brutaali", correct: false},
            { text: "Nöyrä, hurskas ja kunnioitti kirkon auktoriteettiä", correct: true},
        ]
    },
    {
        question: "Minkälainen oli ihanteellinen ihmiskuva renessanssin aikana ?",
        answers: [
            { text: "Hurskas, nöyrä ja kunnioitti kirkon auktoriteettiä", correct: false},
            { text: "Merenkulkija ,joka purhehti rohkeasti etsimään kultaa", correct: false},
            { text: "Ei ihailtu kirjallisuutta ja taidetta. ", correct: false},
            { text: "Ihailtiin pukeutumista, ruokakulttuuria sekä ihailtiin hyveitä, kuten voimaa, kestävyyttä ja urheutta.", correct: true},
        ]
    }, 
    {
        question: "Miten renessanssin vaikutteet levisivät muualle?",
        answers: [
            { text: "Suositun tanssijaryhmän välityksellä, joka kiersi maailmaa", correct: false},
            { text: "Kaupan ja opiskelijoiden välityksellä", correct: true},
            { text: "Tutkimusmatkailijoiden mukana", correct: false},
            { text: "Salattujen maanalaisien tunneliverkostojen avulla, joita pitkin kulttuuriset salaseurat levittivät.", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Seuraava";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
         button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}



function showScore(){
    resetState();
    const maxScoreKey2 = 'renaissance_points';
    questionElement.innerHTML = `Sait ${score} / ${questions.length} pistettä!`;
    nextButton.style.display = "block;"
    localStorage.setItem(maxScoreKey2, score);
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();