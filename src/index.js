import './style.css';
import { Scores } from './modules/scores.js';

const scores = new Scores();
scores.displayScores();

const addScoreForm = document.getElementById('add_scores_form');
addScoreForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name_input').value;
  const number = document.getElementById('score_input').value;
  scores.addScore(name, number);
  addScoreForm.reset();
});

const displayScoreRefresh = document.getElementById('refresh');
displayScoreRefresh.addEventListener('click', (event) => {
  event.preventDefault();
  scores.displayScores();
});
