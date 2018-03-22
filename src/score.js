export class Score{
  constructor(whale) {
    this.whale = whale;
    this.score = 0;
    window.setInterval(() => {
      this.display();

    }, 100)
  }

  display() {
    const score = document.getElementById('score');
    score.innerHTML = `Score: ${this.score}`
  }
}
