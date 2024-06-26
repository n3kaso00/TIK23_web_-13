/* KYSYMYKSET */

(function () {

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Valitse oikea vastaus",
      answers: {
        A: {
          text: "",
          imagePath: "./images/keskiaika11.jpg"
        },
        B: {
          text: "",
          imagePath: "./images/keskiaika21.jpg"
        },
        C: {
          text: "",
          imagePath: "./images/keskaika1.jpg"
        }
      },
      correctAnswer: "C"
    },
    {
      question: "Valitse oikea vastaus",
      answers: {
        A: {
          text: "",
          imagePath: "./images/keskiaika2.jpg"
        },
        B: {
          text: "",
          imagePath: "./images/keskiaika12.jpg"
        },
        C: {
          text: "",
          imagePath: "./images/keskiaika22.jpg"
        }
      },
      correctAnswer: "A"
    },
    {
      question: "Valitse oikea vastaus",
      answers: {
        A: {
          text: "",
          imagePath: "./images/keskiaika13.jpg"
        },
        B: {
          text: "",
          imagePath: "./images/keskiaika3.jpg"
        },
        C: {
          text: "",
          imagePath: "./images/keskiaika23.jpg"
        }
      },
      correctAnswer: "B"
    },
    {
      question: "Valitse oikea vastaus",
      answers: {
        A: {
          text: "",
          imagePath: "./images/keskiaika24.jpg"
        },
        B: {
          text: "",
          imagePath: "./images/keskiaika14.jpg"
        },
        C: {
          text: "(Canterburyn tuomiokirkko)",
          imagePath: "./images/keskiaika4.jpg"
        }
      },
      correctAnswer: "C"
    },
    {
      question: "Valitse oikea vastaus",
      answers: {
        A: {
          text: "",
          imagePath: "./images/keskiaika7.jpg"
        },
        B: {
          text: "",
          imagePath: "./images/keskiaika25.jpg"
        },
        C: {
          text: "",
          imagePath: "./images/keskiaika15.jpg"
        }
      },
      correctAnswer: "A"
    },
    {
      question: "Valitse oikea vastaus",
      answers: {
        A: {
          text: "",
          imagePath: "./images/keskiaika26.jpg"
        },
        B: {
          text: "",
          imagePath: "./images/keskiaika6.jpg"
        },
        C: {
          text: "",
          imagePath: "./images/keskiaika16.jpg"
        }
      },
      correctAnswer: "B"
    },
    {
      question: "Valitse oikea vastaus",
      answers: {
        A: {
          text: "",
          imagePath: "./images/keskiaika17.jpg"
        },
        B: {
          text: "",
          imagePath: "./images/keskiaika27.jpg"
        },
        C: {
          text: "(Notre Damen katedraali)",
          imagePath: "./images/keskiaika5.jpg"
        }
      },
      correctAnswer: "C"
    },
    {
      question: "Valitse oikea vastaus",
      answers: {
        A: {
          text: "",
          imagePath: "./images/keskiaika8.jpg"
        },
        B: {
          text: "",
          imagePath: "./images/keskaika18.jpg"
        },
        C: {
          text: "",
          imagePath: "./images/keskiaika28.jpg"
        }
      },
      correctAnswer: "A"
    },
    {
      question: "Valitse oikea vastaus",
      answers: {
        A: {
          text: "",
          imagePath: "./images/keskiaika19.jpg"
        },
        B: {
          text: "",
          imagePath: "./images/keskiaika9.jpg"
        },
        C: {
          text: "",
          imagePath: "./images/keskiaika29.jpg"
        }
      },
      correctAnswer: "B"
    },
    {
      question: "Valitse oikea vastaus",
      answers: {
        A: {
          text: "",
          imagePath: "./images/keskiaika30.jpg"
        },
        B: {
          text: "",
          imagePath: "./images/keskiaika10.jpg"
        },
        C: {
          text: "",
          imagePath: "./images/keskiaika20.jpg"
        }
      },
      correctAnswer: "B"
    },
  ];

  const finalSlide = document.getElementById('final-slide');

  /* Kysymykset päättyy */



  /* Edellinen, Seuraava, Lähetä napit */

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);

  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);


  /* Vastausten määrittely */

  function buildQuiz() {
    const output = myQuestions.map((currentQuestion, questionNumber) => {
      const answers = Object.entries(currentQuestion.answers).map(([letter, answer]) => `
        <label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          <span>${letter} : ${answer.text}</span>
          <img src="${answer.imagePath}" alt="${answer.text}" style="max-width: 100%; max-height: 200px;">
          
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


  /* Oikein/väärin vastaukset */

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const answerOptions = answerContainer.querySelectorAll(selector);

      answerOptions.forEach(option => {
        const optionValue = option.value;

        if (optionValue === currentQuestion.correctAnswer) {
          option.parentNode.style.color = 'lightgreen';
          numCorrect++;
        } else {
          option.parentNode.style.color = 'red';
          let h = document.createElement('h3');
          h.textContent = 'Oikea vastaus on ' + currentQuestion.correctAnswer;
          option.parentNode.appendChild(h)
        }


      });
    });


    /* Pisteiden laskeminen */

    const middleage_points = numCorrect;
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

    const maxScoreKey2 = 'middleage_points';
    localStorage.setItem(maxScoreKey2, middleage_points);
  }


    /* Edellinen, seuraava, lähetä nappien toiminta */
  
  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }

  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

})();