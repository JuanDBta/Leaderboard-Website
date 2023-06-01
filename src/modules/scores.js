export class Scores {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem('scores')) || [];
  }

  addScore = (name, number) => {
    const score = { name, number };
    this.scores.push(score);
    localStorage.setItem('scores', JSON.stringify(this.scores));
  }

  displayScores = () => {
    const scoreList = document.getElementById('scores_list');
    scoreList.innerHTML = '';
    this.scores.forEach((score) => {
      const scoreItem = document.createElement('li');
      scoreItem.classList.add('score');
      scoreItem.innerHTML = `${score.name} : ${score.number}`;
      scoreList.appendChild(scoreItem);
    });
  }
}

export default { Scores };