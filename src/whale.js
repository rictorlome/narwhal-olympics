import { MovingObject } from './moving_object'
import * as PhysUtil from './physics_util'



export class Whale extends MovingObject {
  constructor(option) {
    option.radius = 20;
    option.color = 'black';
    option.vel = PhysUtil.specificVec(40, .5);
    super(option)
    this.underwater = true;
    this.timeOut = 0;
    this.angle = 0;
    this.framecount = 0;
    this.turningL = false;
    this.turningR = false;
  }
  accelerate() {
    if (this.underwater && this.vel[0] < 12) {
      this.vel = PhysUtil.scale(this.vel, 1.20)
    }
  }
  decelerate() {
    this.vel = PhysUtil.scale(this.vel, .8)
  }
  nudge() {
    this.vel = [.3,-.3]
  }
  turnLeft() {
    let degree = PhysUtil.degree(this.vel)
    let speed = PhysUtil.speed(this.vel)
    if (this.underwater) {
      this.vel = PhysUtil.specificVec((degree-25 % 360), speed)
    } else {
      this.angle -= 15;
    }
  }
  turnRight() {
    let degree = PhysUtil.degree(this.vel)
    let speed = PhysUtil.speed(this.vel)
    if (this.underwater) {
      this.vel = PhysUtil.specificVec((degree+25 % 360), speed)
    } else {
      this.angle += 15;
    }
  }
  freeze() {
    this.vel = [0,0]
  }
  checkTimeout() {
    let depth = this.pos[1];
    if (depth > 8780) {
      this.underwater = true;
      this.timeOut = 0;
    } else if (depth < 8770) {
      this.underwater = false;
      this.timeOut++;
    } else {
      this.checkLanding()
    }
  }

  checkLanding() {
    let diff = Math.abs(this.angle - PhysUtil.degree(this.vel))
    if (diff > 20 && this.vel[1] > 0) {
      this.vel[0] /= 10;
      this.vel[1] /= 10;
    }
  }

  checkWipeout() {
    let depth = this.pos[1]
    if (depth > 9500) {
      this.vel[0] = .4
      this.vel[1] = -4
    }
  }
  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    this.checkTimeout()
    this.checkWipeout()
    if (this.underwater) {
      this.angle = PhysUtil.degree(this.vel)
    } else {
      this.vel = PhysUtil.fall(this.vel,this.timeOut)
    }
  }
}
