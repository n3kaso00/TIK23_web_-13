const quizData = [
    {
      question: "Kenen poika farao oli uskomusten mukaan?",
      options: ["Aurinkojumala Ra:n", "Egyptin kuninkaan", "Horuksen", "Taivaan jumala Geb:in"],
      answer: "Aurinkojumala Ra:n"
    },
    {
      question: "Mitä pyramidit olivat?",
      options: ["Faraoiden asuntoja", "Faraoiden hautapaikkoja", "Kirjureiden asuntoja", "Jumalien kokoontumispaikkoja"],
      answer: "Faraoiden hautapaikkoja"
    },
    {
      question: "Mikä ammatti oli kaikkein arvostetuin Egyptissä?",
      options: ["Rakentaja", "Pappi", "Kirjuri", "sotapäällikkö"],
      answer: "Kirjuri"
    },
    {
      question: "Minkä vuoksi egyptiläiset palsamoivat vainajansa?",
      options: ["Jotta vainajan ruumis säilyisi kuoleman jälkeen", "Jotta papeilla olisi lisää töitä"],
      answer: "Jotta vainajan ruumis säilyisi kuoleman jälkeen"
    }
    // Add more questions here...
  ];

  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const countElement = document.getElementById("count");
  const startButton = document.getElementById('start');
  const restartButton = document.getElementById('restart');
  const quizContent = document.getElementById('quizcontent');
  const result = document.getElementById('result');
  const points = document.getElementById('points');

  startButton.addEventListener('click', startGame);
  restartButton.addEventListener('click', restartGame);
  
  function startGame() {
    startButton.style.display = 'none';
    document.querySelector('#quizcontent span').innerText = '';
    document.querySelector('#quizcontent h2').innerText = '';
    showQuestion(); // kysymys aloita-napin painalluksen jälkeen
  }

  function restartGame() {
    currentQuestion = 0;
    score = 0;
    quizContent.classList.remove('hidden');
    result.classList.add('hidden');
    showQuestion();
  }
  
  let currentQuestion = 0;
  let score = 0;
  let count = 20;
  let interval;

// Timerin toiminta ..

  function startTimer() {
    count = 20;
    countElement.innerText = `Aikaa jäljellä: ${count}`;
    interval = setInterval(function() {
        if (count === 0) {
            clearInterval(interval);
            document.getElementById('count').innerText = 'Done';
            alert("Aika loppui!");
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                showQuestion();
            } else {
                showResult();
            }
        } else {
          count--;
          countElement.innerText = `Aikaa jäljellä: ${count}`;
        }
      }, 1000);
  }
  
  
    function showQuestion() {
        clearInterval(interval);
        startTimer();

        const question = quizData[currentQuestion];
        questionElement.innerText = question.question;
  
        optionsElement.innerHTML = "";
        question.options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            optionsElement.appendChild(button);
            button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    clearInterval(interval);

    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
      alert("oikein!");
    } else {

      alert("Väärin. Oikea vastaus oli: " + answer)
    }
    
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  // lopputekstit..

  function showResult() {
    clearInterval(interval);
    points.textContent =`${score}/${quizData.length}`;
    quizContent.classList.add('hidden');
    result.classList.remove('hidden');
  }
  

    
  
