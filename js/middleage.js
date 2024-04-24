(function(){

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Valitse oikea vastaus",
      answers: {
        a: { 
          text: "A",
          imagePath: "./images/keskiaika1.jpg"
        },
        b: { 
          text: "B",
          imagePath: "./images/kuva2.jpg"
        },
        c: { 
          text: "C",
          imagePath: "./images/kuva3.jpg"
        }
      },
      correctAnswer: "c"
    },
    {
      question: "Valitse oikea vastaus",
      answers: {
        a: { 
          text: "A",
          imagePath: "./images/kuva4.jpg"
        },
        b: { 
          text: "B",
          imagePath: "./images/kuva5.jpg"
        },
        c: { 
          text: "C",
          imagePath: "./images/kuva6.jpg"
        }
      },
      correctAnswer: "a"
    },
    {
      question: "Valitse oikea vastaus",
      answers: {
        a: { 
          text: "A",
          imagePath: "./images/kuva7.jpg"
        },
        b: { 
          text: "B",
          imagePath: "./images/kuva8.jpg"
        },
        c: { 
          text: "C",
          imagePath: "./images/kuva9.jpg"
        }
      },
      correctAnswer: "b"
    }
  ];

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);

  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

  function buildQuiz(){
    const output = myQuestions.map((currentQuestion, questionNumber) => {
      const answers = Object.entries(currentQuestion.answers).map(([letter, answer]) => `
        <label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          <img src="${answer.imagePath}" alt="${answer.text}">
          ${letter} : ${answer.text}
        </label>
      `).join("");
  
      return `
        <div class="slide">
          <div class="question">${currentQuestion.question}</div>
          <div class="answers">${answers}</div>
        </div>
      `;
    });
  
    quizContainer.innerHTML = output.join('');
  } 
 

  function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

})();