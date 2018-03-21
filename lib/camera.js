class Camera {
  constructor(map, width, height) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.tsize - width;
    this.maxY = map.rows * map.tsize - height;
    this.speed = 256;
  }
  move(delta, dirx, diry) {
    this.x += dirx * this.speed * delta;
    this.y += diry * this.speed * delta;
    this.x = Math.max(0, Math.min(this.x, this.maxX));
    this.y = Math.max(0, Math.min(this.y, this.maxY));
  }
}
