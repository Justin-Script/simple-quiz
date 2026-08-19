import {
  easyQuestions,
  normalQuestions,
  hardQuestions
} from './questions.js';

let questions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;

const modal = document.getElementById('modal');

document.getElementById('easy').addEventListener('click', () => startQuiz('Easy', easyQuestions));
document.getElementById('normal').addEventListener('click', () => startQuiz('Normal', normalQuestions));
document.getElementById('hard').addEventListener('click', () => startQuiz('Hard', hardQuestions));

document.getElementById('closeBtn').addEventListener('click', () => {
  modal.classList.add('hidden-eas');
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.classList.add('hidden-eas');
});

function startQuiz(level, questionSet) {
  questions = questionSet;
  currentQuestion = 0;
  score = 0;
  document.getElementById('levelTitle').innerText = `Level: ${level}`;
  document.getElementById('displayScore').innerText = 'Score: 0';
  showQuestion();
  modal.classList.remove('hidden-eas');
}

function showQuestion() {
  answered = false;
  const question = questions[currentQuestion];

  document.getElementById('displayQuestion').innerText = question.question;
  document.getElementById('displayOptionsA').innerText = `A. ${question.options[0]}`;
  document.getElementById('displayOptionsB').innerText = `B. ${question.options[1]}`;
  document.getElementById('displayOptionsC').innerText = `C. ${question.options[2]}`;
  document.getElementById('displayOptionsD').innerText = `D. ${question.options[3]}`;
  document.getElementById('answerEas').value = '';
  document.getElementById('displayAnswer').innerText = '';
}

document.getElementById('submitBtn').addEventListener('click', () => {
  if (answered) return;

  const userAnswer = document.getElementById('answerEas').value.trim().toUpperCase();
  const correctAnswer = ['A', 'B', 'C', 'D'][questions[currentQuestion].answer];
  const result = document.getElementById('displayAnswer');

  if (userAnswer === correctAnswer) {
    result.innerText = 'Correct!';
    result.style.color = 'green';
    score++;
    document.getElementById('displayScore').innerText = `Score: ${score}`;
  } else {
    result.innerText = `Wrong! Correct answer is ${correctAnswer}`;
    result.style.color = 'red';
  }

  answered = true;
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    alert('Quiz Finished!');
    currentQuestion = 0;
  }
  showQuestion();
});