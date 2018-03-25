export class Score{
  constructor(whale) {
    this.whale = whale;
    this.score = 0;
    this.show = window.setInterval(() => {
      this.display();
      this.checkWhale();
    }, 20)
    this.tricks = {
      'fifty' : false,
      'hundred' : false,
      'twohun' : false,
      'halfflip' : false,
      'oneflip' : false,
      'oneandhalfflip' : false,
    }
    this.trickArray = [];
    this.announcements = document.getElementById('announcements')
  }

  checkWhale() {
    if (this.whale.underwater) {
      this.resetTricks();
    } else {
      this.addAir();
      this.addFlips();
    }
  }
  resetTricks() {
    this.trickArray = [];
    Object.keys(this.tricks).forEach( (key) => {
      this.tricks[key] = false;
    })
  }

  addAir() {
    if (this.whale.pos[1] < 7200 && !this.tricks['fifty']) {
      this.tricks['fifty'] = true;
      this.trickArray.push("Fifty Feet");
      this.score += 50;
    }
    if (this.whale.pos[1] < 6000 && !this.tricks['hundred']) {
      this.tricks['hundred'] = true;
      this.trickArray.push("One Hundred Feet");
      this.score += 100;
    }
    if (this.whale.pos[1] < 5000 && !this.tricks['twohun']) {
      this.tricks['twohun'] = true;
      this.trickArray.push("Two Hundred Feet");
      this.score += 200;
    }
  }
  addFlips() {
    if (this.whale.angle < -145 && !this.tricks['halfflip']) {
      this.tricks['halfflip'] = true;
      this.score += 150;
    }
    if (this.whale.angle > 40 && this.tricks['halfflip'] && this.tricks['oneflip']) {
      this.tricks['oneflip'] = true;
      this.score += 300;
    }
  }

  display() {
    const score = document.getElementById('score');
    score.innerHTML = `Score: ${this.score}`
    this.trickArray.length > 0 ? this.announcements.innerHTML = this.trickArray.join(', ').concat('!') : this.announcements.innerHTML = ''
  }
}
