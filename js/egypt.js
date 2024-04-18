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
    }
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
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
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h2>Osasitko?</h2>
      <p>Pisteet: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();