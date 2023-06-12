// Define quiz questions and options
const quiz = [
    {
      question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
      options: ["120 metres", "180 metres", "324 metres", "150 metres"],
      answer: 3
    },
    {
      question: "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
      options: ["200 m", "225 m", "245 m", "250 m"],
      answer: 2
    },
    {
      question: "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
      options: ["45 km/hr", "50 km/hr", "54 km/hr", "55 km/hr"],
      answer: 1
    }
  ];
  
  let currentQuestion = 0;
  const startButton = document.getElementById('start-btn');
  const questionContainer = document.getElementById('question-container');
  const questionElement = document.getElementById('question');
  const options = document.getElementsByClassName('option');
  const messageElement = document.getElementById('message');
  const previousButton = document.getElementById('previous-btn');
  const nextButton = document.getElementById('next-btn');
  const appName = document.getElementById('appName');
  const appName1 = document.getElementById('appName1');
  const appName2 = document.getElementById('appName2');

  const scoreBored = document.getElementById('score-bord');
  var score=0;
  
  // Function to initialize the quiz
  function startQuiz() {
    previousButton.style.display='none';
    nextButton.style.display='none';   
    startButton.addEventListener('click', () => {
      score=0;
      appName.innerHTML='Quiz started';
      appName1.style.display='none';
      appName2.style.display='none';

      appName.style.fontSize='18px';
      appName.style.color='#28ff5a'
      startButton.style.display = 'none';
      questionContainer.style.display = 'block';
      previousButton.style.display='block';
      nextButton.style.display='block';
      showQuestion();
    });
  }
  
  // Function to display the current question
  function showQuestion() {
    const currentQuizQuestion = quiz[currentQuestion];
    questionElement.innerText = currentQuizQuestion.question;
    
    for (let i = 0; i < options.length; i++) {
      options[i].style.display='block';
      options[i].innerText = currentQuizQuestion.options[i];
      options[i].addEventListener('click', checkAnswer);
    }
  
    messageElement.innerText = '';
    updateNavigationButtons();
  }
  
  // Function to check the selected answer
  function checkAnswer() {
    const selectedOption = this;
    const currentQuizQuestion = quiz[currentQuestion];
  
    if (selectedOption.innerText === currentQuizQuestion.options[currentQuizQuestion.answer]) {
      messageElement.innerText = '🥳Correct🎉';
      messageElement.style.color='#28ff5a';
      score= score +100;
    } else {
      messageElement.translate.valueOf('10px');
      messageElement.innerText = '😥Wrong❌';
      messageElement.style.color='red';
    }
  }
  
  // Function to update the navigation buttons
  function updateNavigationButtons() {
    if (currentQuestion === 0) {
      previousButton.disabled = true;
    } else {
      previousButton.disabled = false;
    }
  
    if (currentQuestion === quiz.length - 1) {
      nextButton.innerText = 'Finish';
    } else {
      nextButton.innerText = 'Next';
    }
  }
  
  // Function to go to the next question
  function goToNextQuestion() {
    if (currentQuestion < quiz.length - 1) {
      currentQuestion++;
      showQuestion();
    } else {
      // Quiz finished
      questionContainer.style.display = 'none';
      messageElement.innerText = 'Quiz finished!\n Thank You for visiting.\n\n';
      scoreBored.innerText= 'You scored:'+score;
      previousButton.innerText='Repeat';
      previousButton.addEventListener('click',startQuiz())
    }
  }
  
  // Function to go to the previous question
  function goToPreviousQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion();
    }
  }
  
  // Add event listeners to navigation buttons
  nextButton.addEventListener('click', goToNextQuestion);
  previousButton.addEventListener('click', goToPreviousQuestion);
  
  // Start the quiz
  startQuiz();
  