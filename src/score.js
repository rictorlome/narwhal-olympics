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
      'Forward Flips' : 0,
      'Backward Flips' : 0,
    }

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
    Object.keys(this.airTricks).forEach( (key) => {
      this.airTricks[key] = false;
    })
    Object.keys(this.flipTricks).forEach( (key) => {
      this.flipTricks[key] = 0;
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
    let halfFFlips = Math.max(0,Math.floor(this.whale.flipangle / 180));
    let halfBFlips = Math.max(0,Math.floor(this.whale.flipangle / -180));



    this.flipTricks['Forward Flips'] = Math.floor((halfFFlips + 1) / 2)
    this.flipTricks['Backward Flips'] = Math.floor((halfBFlips + 1) / 2)

  }

  display() {
    const score = document.getElementById('score');
    score.innerHTML = `Score: ${this.score}`

    const hTrick = this.determineHeightTrick()
    hTrick === undefined ? this.announcements.innerHTML = '' : this.announcements.innerHTML = hTrick.concat('!')

    const fTrick = this.determineFlipTrick()
    fTrick === "" ? this.announcements.innerHTML = this.announcements.innerHTML : this.announcementsinnerHTML += fTrick
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
        return String(this.flipTricks[trick]).concat(' ').concat(trick)
      }
    });
    const resArray = [];
    trickArray.forEach((trick) => {
      if (trick !== -1) resArray.push(trick);
    })
    return resArray.join(', ')
    debugger
  }
}
