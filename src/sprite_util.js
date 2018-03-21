// sX, sY = topleft from source.
// sWidth, sHeight = height in source image.
// dX, dY = distance from topleft of destination canvas
// dWidth, dHeight = height


ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

class SpriteSheet {
  constructor(ctx, path, frameheight, framewidth, spritesheetheight, spritesheetwidth, imagewidth, imageheight) {
    this.ctx = ctx;
    this.path = path;
    this.frameheight = frameheight;
    this.framewidth = framewidth;

    this.image = new Image(spritesheetwidth, spritesheetheight)
    this.image.src = path;

  }



  draw(pos_x,pos_y) {
    this.ctx.drawImage(this.image, (sx, sy), this.framewidth, this.frameheight, pos_x, pos_y, this.framewidth, this.frameheight)
  }


}
