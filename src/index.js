import './style.css';
import { createGame, getScores, addScore } from './modules/scores.js';

const refreshButton = document.getElementById('refresh');
const addScoreForm = document.getElementById('add_scores_form');

let gameId = null;

refreshButton.addEventListener('click', async () => {
  if (gameId) {
    const scores = await getScores(gameId);
    displayScores(scores);
  }
});

addScoreForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name_input').value;
  const score = document.getElementById('score_input').value;
  if (gameId) {
    await addScore(gameId, name, score);
    addScoreForm.reset();
  }
});

(async () => {
  const gameName = 'Art of War';
  gameId = await createGame(gameName);
})();

const displayScores = (scores) => {
  const scoreList = document.getElementById('scores_list');
  scoreList.innerHTML = '';
  scores.forEach((score) => {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('score');
    scoreItem.innerHTML = `${score.user} : ${score.score}`;
    scoreList.appendChild(scoreItem);
  });
};
