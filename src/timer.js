export class Timer {
  constructor() {
    this.timeleft = 120;
    window.setInterval(() => {
      this.display();
      this.decrement();

    }, 1000)
  }
  decrement() {
    this.timeleft--;
  }
  display() {
    const timer = document.getElementById('timer')
    timer.innerHTML = `Time Left: ${this.timeleft}`
  }
}
