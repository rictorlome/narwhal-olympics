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
  }
  accelerate() {
    if (this.underwater) {
      this.vel = PhysUtil.scale(this.vel, 1.20)
    }
  }
  decelerate() {
    this.vel = PhysUtil.scale(this.vel, .8)
  }
  turnLeft() {
    let degree = PhysUtil.degree(this.vel)
    let speed = PhysUtil.speed(this.vel)
    this.vel = PhysUtil.specificVec((degree-15 % 360), speed)
  }
  turnRight() {
    let degree = PhysUtil.degree(this.vel)
    let speed = PhysUtil.speed(this.vel)
    this.vel = PhysUtil.specificVec((degree+15 % 360), speed)
  }
  checkTimeout() {
    if (this.pos[1] < 1100) {
      this.underwater = false;
      this.timeOut += 1;
    } else {
      this.underwater = true;
      this.timeOut = 0;
    }
  }
  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.checkTimeout()
    if (!this.underwater) {
      this.vel = PhysUtil.fall(this.vel,this.timeOut)
    }
  }
}
