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
      'fivehun' : false,
      'fivek' : false,
      'halfflip' : false,
      'oneflip' : false,
      'oneandhalfflip' : false,
    }
    this.trickArray = [];
    this.announcements = document.getElementById('announcements')
    this.highest = 50;
  }

  checkWhale() {
    if (this.whale.underwater) {
      this.resetTricks();
    } else {
      this.checkAir();
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
  checkAir() {
    const f = this.feet()
    if (f > this.highest) this.highest = f;
  }
  feet() {
    return Math.floor(7449 - this.whale.pos[1]);
  }

  addAir() {
    const f = this.feet()
    if (f > 50 && !this.tricks['fifty']) {
      this.tricks['fifty'] = true;
      this.trickArray.push("Fifty Feet");
      this.score += 50;
    }
    if (f > 500 && !this.tricks['fivehun']) {
      this.tricks['fivehun'] = true;
      this.trickArray.push("Five Hundred Feet");
      this.score += 100;
    }
    if (f > 5000 && !this.tricks['fivek']) {
      this.tricks['fivek'] = true;
      this.trickArray.push("Five Thousand Feet");
      this.score += 200;
    }
  }
  addFlips() {
    let halfFFlips = Math.max(0,Math.floor(this.whale.flipangle / 180));
    let halfBFlips = Math.max(0,Math.floor(this.whale.flipangle / -180));

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
