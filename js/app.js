import quiz from "../json/Quiz.js";

//PAGE STATE
let ele = 0;

//MENU
let mode;
const MENUCONTAINER = document.getElementById("MENUCONTAINER");
const EASY = document.getElementById("EASY");
const MEDIUM = document.getElementById("MEDIUM");
const HARD = document.getElementById("HARD");

// QUIZ
const QUIZCONTAINER = document.getElementById("QUIZCONTAINER");
const TRIVIACONTAINER = document.querySelector(".trivia_container");
const QUIZLENGTH = document.getElementById("QUIZLENGTH");
const QUESTION = document.getElementById("QUESTION");
const AVATAR = document.getElementById("AVATAR");
const ONE = document.getElementById("OPTION-1");
const TWO = document.getElementById("OPTION-2");
const THREE = document.getElementById("OPTION-3");
const FOUR = document.getElementById("OPTION-4");
const TRIVIA = document.getElementById("TRIVIA");
const NEXT = document.getElementById("NEXT");
const OPTIONS = document.querySelectorAll(".option");
let i = 0;

// SCORE
const SCORECONTAINER = document.getElementById("SCORECONTAINER");
const scoreElement = document.querySelector(".score");
const scoreMsg = document.querySelector(".score_msg");
const REPLAY = document.getElementById("REPLAY");
let score = 0;

// FILTER JSON
const EASYMODE = quiz.filter((ele) => {
  return ele.Difficulty == "Easy";
});

const MEDIUMMODE = quiz.filter((ele) => {
  return ele.Difficulty == "Medium";
});

const HARDMODE = quiz.filter((ele) => {
  return ele.Difficulty == "Hard";
});

// ANIMATE PAGE STATE
function animateElement() {
  if (ele === 0) {
    MENUCONTAINER.classList.add("fadeIn");
  } else if (ele === 1) {
    MENUCONTAINER.classList.remove("fadeIn");
    QUIZCONTAINER.classList.add("fadeIn");
    readQuestion();
  } else if (ele === 2) {
    QUIZCONTAINER.classList.remove("fadeIn");
    SCORECONTAINER.classList.add("fadeIn");
    scoreElement.textContent = `${score}/${mode.length}`;

    switch (score) {
      case 0:
        scoreMsg.textContent = "Better Luck Next Time";
        break;
      case 1:
        scoreMsg.textContent = "Better Luck Next Time";
        break;
      case 2:
        scoreMsg.textContent = "Dont Give Up!";
        break;
      case 3:
        scoreMsg.textContent = "Dont Give Up!";
        break;
      case 4:
        scoreMsg.textContent = "Nice Try! ";
        break;
      case 5:
        scoreMsg.textContent = "Nice Try! ";
        break;
      case 6:
        scoreMsg.textContent = "Good Job! Well Done!";
        break;
      case 7:
        scoreMsg.textContent = "Good Job! Well Done!";
        break;
      case 8:
        scoreMsg.textContent = "Great!";
        break;
      case 9:
        scoreMsg.textContent = "Great!";
        break;
      case 10:
        scoreMsg.textContent = "Amazing!";
        break;
      case 11:
        scoreMsg.textContent = "Amazing!";
        break;
      case 12:
        scoreMsg.textContent = "You're a Wizard!";
        break;
      case mode.length:
        scoreMsg.textContent = "Excellent. Perfect Score!";
        break;
      default:
        scoreMsg.textContent = "Good Job!";
    }
  }
}

EASY.addEventListener("click", () => {
  mode = EASYMODE;
  ele++;
  animateElement();
});

MEDIUM.addEventListener("click", () => {
  mode = MEDIUMMODE;
  ele++;
  animateElement();
});

HARD.addEventListener("click", () => {
  mode = HARDMODE;
  ele++;
  animateElement();
});

REPLAY.addEventListener("click", () => {
  ele = 0;
  i = 0;
  score = 0;
  SCORECONTAINER.classList.remove("fadeIn");
  animateElement();
});

function changeElement() {
  ele++;
  animateElement();
}

animateElement();

function readQuestion() {
  if (i < mode.length) {
    QUIZLENGTH.textContent = `Question: ${i + 1} / ${mode.length}`;
    QUESTION.textContent = mode[i].Question;
    ONE.textContent = mode[i].Option_1;
    TWO.textContent = mode[i].Option_2;
    THREE.textContent = mode[i].Option_3;
    FOUR.textContent = mode[i].Option_4;
    TRIVIA.textContent = mode[i].Trivia;
  } else {
    changeElement();
  }
}

function increment() {
  i++;
  OPTIONS.forEach((ele) => {
    ele.removeAttribute("disabled");
  });
  TRIVIACONTAINER.style.opacity = 0;
  AVATAR.style.opacity = 0;
  readQuestion();
}

function checkAnswer(selectedAnswer) {
  console.log("checking answer");
  let arr = [];
  OPTIONS.forEach((ele) => {
    if (ele.textContent === mode[i].Correct_Answer) {
      arr.push(ele);
    }
  });

  OPTIONS.forEach((ele) => {
    ele.setAttribute("disabled", "disabled");
  });

  if (selectedAnswer.textContent == mode[i].Correct_Answer) {
    QUESTION.textContent = `Correct: The answer was: ${mode[i].Correct_Answer}`;
    selectedAnswer.textContent = `✅ ${mode[i].Correct_Answer} `;
    AVATAR.src = mode[i].Avatar;
    AVATAR.style.opacity = 0.2;
    TRIVIACONTAINER.style.opacity = 1;
    score++;
  } else {
    QUESTION.textContent = `Incorrect: The answer was: ${mode[i].Correct_Answer}`;
    arr[0].textContent = `✅ ${mode[i].Correct_Answer} `;
    selectedAnswer.textContent = `❌ ${selectedAnswer.textContent} `;
    AVATAR.src = mode[i].Avatar;
    AVATAR.style.opacity = 0.2;
    TRIVIACONTAINER.style.opacity = 1;
  }
}

NEXT.addEventListener("click", () => increment());
ONE.addEventListener("click", () => checkAnswer(ONE));
TWO.addEventListener("click", () => checkAnswer(TWO));
THREE.addEventListener("click", () => checkAnswer(THREE));
FOUR.addEventListener("click", () => checkAnswer(FOUR));
