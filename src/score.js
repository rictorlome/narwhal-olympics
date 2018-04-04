export class Score{
  constructor(whale) {
    this.whale = whale;
    this.score = 0;

    this.show = window.setInterval(() => {
      this.display();
      this.checkWhale();
    }, 20)

    this.airTricks = {
      'Fifty Feet' : false,
      'Five Hundred Feet' : false,
      'One Thousand Feet' : false,
    }
    this.flipTricks = {
      'Forward Flip' : 0,
      'Backward Flip' : 0,
    }
    this.lastFF = 0;
    this.lastBF = 0;

    this.heightAnn = document.getElementById('announcements-height')
    this.flipAnn = document.getElementById('announcements-flips')
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
    Object.keys(this.airTricks).forEach( (key) => {
      this.airTricks[key] = false;
    })
    Object.keys(this.flipTricks).forEach( (key) => {
      this.flipTricks[key] = 0;
    })
    this.lastFF = 0;
    this.lastBF = 0;
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
    if (f > 50 && !this.airTricks['Fifty Feet']) {
      this.airTricks['Fifty Feet'] = true;
      this.score += 50;
    }
    if (f > 1000 && !this.airTricks['Five Hundred Feet']) {
      this.airTricks['Five Hundred Feet'] = true;
      this.score += 100;
    }
    if (f > 2000 && !this.airTricks['One Thousand Feet']) {
      this.airTricks['One Thousand Feet'] = true;
      this.score += 200;
    }
  }
  addFlips() {
    const halfFFlips = Math.max(0,Math.floor(this.whale.flipangle / 180));
    const halfBFlips = Math.max(0,Math.floor(this.whale.flipangle / -180));

    const fFlips = Math.floor((halfFFlips + 1) / 2);
    const bFlips = Math.floor((halfBFlips + 1) / 2);

    if (fFlips !== this.lastFF) {
      this.score += fFlips * 100;
      this.lastFF = fFlips;
    }
    if (bFlips !== this.lastBF) {
      this.score += bFlips * 100;
      this.lastBF = bFlips;
    }

    this.flipTricks['Forward Flip'] = fFlips;
    this.flipTricks['Backward Flip'] = bFlips;

  }

  display() {
    const score = document.getElementById('score');
    score.innerHTML = `Score: ${this.score}`

    const hTrick = this.determineHeightTrick()
    hTrick === undefined ? this.heightAnn.innerHTML = '' : this.heightAnn.innerHTML = hTrick.concat('!')

    const fTrick = this.determineFlipTrick()
    if (fTrick === "") {
      this.flipAnn.innerHTML = ''
    } else {
      this.flipAnn.innerHTML = fTrick.concat('!')
    }
  }

  determineHeightTrick() {
    const airDisp = ['Fifty Feet', 'Five Hundred Feet', 'One Thousand Feet']

    const trickArr = Object.keys(this.airTricks).map( (trick) => {
      if (Boolean(this.airTricks[trick])) {
        return airDisp.indexOf(trick);
      } else {
        return -1;
      }
    })
    return airDisp[Math.max(...trickArr)]
  }
  determineFlipTrick() {
    const trickArray = Object.keys(this.flipTricks).map( (trick) => {
      if (this.flipTricks[trick] === 0) {
        return -1
      } else {
        let t = trick;
        const cnt = this.flipTricks[trick];
        cnt > 1 ? t = t.concat('s') : t = t
        return String(cnt).concat(' ').concat(t)
      }
    });
    const resArray = [];
    trickArray.forEach((trick) => {
      if (trick !== -1) resArray.push(trick);
    })
    return resArray.join(', ')
  }
}
