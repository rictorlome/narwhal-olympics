# narwhal-olympics

![Screenshot](https://raw.githubusercontent.com/rictorlome/rictorlome.github.io/master/img/narwhal-main.png)

[PLAY THE GAME](https://rictorlome.github.io/narwhal-olympics/)

### Don't be discouraged! Press up to gain speed! Fly into the sky and land nose first!

## Background

Whale Olympics is a one player adventure game based on the timeless classic Dolphin Olympics 2. The general idea of the game is to perform aerial acrobatics such as flipping and rolling while breaching the surface of the water. The gameplay increases in intensity as the whale picks up in speed and achieves greater altitudes in the air.

## Instructions

To play the game, use the ```ARROW KEYS``` to direct the motion of the whale. ```UP``` speeds the whale up while underwater. ```LEFT``` and ```RIGHT``` turn the whale counter-clockwise and clockwise respectively.

## Design

The game was made without reliance on any external ```JavaScript``` libraries. Using only ```HTML5```'s native ```Canvas API```, a custom physics engine, and manual sprite animation, I designed and built this looping side-scroller from scratch. I also wove together different open-source SVGs in ```Sketch``` in order to create a seamless, multilayered background.

One of the more challenging parts of the project was discovering how to loop the background image seamlessly over the canvas without breaks and without repeating parts of the image. The main idea consisted of precisely isolating the white-space which arose from naive looping, and rendering a second copy of the background - but only for the 575 pixels of width, during which the background image was looping.

```JavaScript
draw(ctx, whale) {
  const img = this.img;
  let sx = whale.pos[0] % 5000;
  let sy = whale.pos[1];
  let whiteSpace = 5000 - whale.pos[0] % 5000;
  ctx.drawImage(img, sx, sy, ctx.canvas.width, ctx.canvas.height, 0, 0, ctx.canvas.width, ctx.canvas.height);
  if (0 < whiteSpace && whiteSpace < 575) {
    ctx.drawImage(img, 0, sy, ctx.canvas.width, ctx.canvas.height, whiteSpace, 0, ctx.canvas.width, ctx.canvas.height);
  }
}
```

## Additional Features

Who knows what the future of narwhal olympics holds? I am thinking of adding a height meter to the display, so that the user can see how high he or she has flown without waiting for the trick display to appear.

I am also considering adding more thorough instructions, because the game seems a little too difficult for first time players.
