
export class MovingObject {
  constructor(obj) {
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
    this.game = obj.game;
  }

  draw(ctx) {
    let width = 115;
    let height = 49.61;

    let img = new Image(width,height)
    img.src = '/Users/c/workspace/whale-olympics/assets/narwhal-right.png'
    let rad = this.angle * Math.PI / 180
    ctx.translate(50,50)
    ctx.rotate(rad)

    let framenumber = this.chooseFrameNum()

    let sx = this.chooseFrameSxSy(framenumber)[0]
    let sy = this.chooseFrameSxSy(framenumber)[1]

    ctx.drawImage(img, sx, sy, 255,110,-width/2,-height/2, width, height)

    ctx.rotate(-rad)
    ctx.translate(-50,-50)
    this.updateFrameCount()
  };
  chooseFrameNum() {
    if (this.turningL) {
      return 6;
    } else if (this.turningR) {
      return 3;
    } else if (!this.underwater) {
      return 2;
    }

    if (this.framecount < 25) {
      return 1;
    } else if (this.framecount < 50) {
      return 2;
    } else if (this.framecount < 75) {
      return 7;
    } else if (this.framecount < 100) {
      return 8;
    }
  }
  updateFrameCount() {
    this.framecount = (this.framecount + 1) % 100
  }

  chooseFrameSxSy(num) {
    if (num == 1) return [0, 65]
    if (num == 2) return [255,65]
    if (num == 3) return [0, 350]
    if (num == 4) return [255, 335]
    if (num == 5) return [510, 335]
    if (num == 6) return [0,610]
    if (num == 7) return [255, 595]
    if (num == 8) return [510, 595]
  }
}
