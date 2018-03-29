export class Timer {
  constructor() {
    this.timeleft = 121;
    this.paused = false;
  }

  start() {
    this.count = window.setInterval(() => {
      this.display();
      if (!this.paused) this.decrement();

    }, 1000)
  }
  decrement() {
    this.timeleft > 0 ? this.timeleft-- : clearInterval(this.count);
  }
  display() {
    const timer = document.getElementById('timer')
    timer.innerHTML = `Time Left: ${Math.max(0,this.timeleft-1)}`
  }
}
