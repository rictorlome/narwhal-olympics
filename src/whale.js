import { MovingObject } from './moving_object'
import * as Util from './utils'

export class Whale extends MovingObject {
  constructor(option) {
    option.radius = 20;
    option.color = 'black';
    option.vel = Util.scale(Util.randomVec(5), Math.random());
    super(option)
  }
}
