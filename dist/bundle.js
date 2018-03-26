/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/whale-olympics.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _whale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whale */ "./src/whale.js");
/* harmony import */ var _nature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nature */ "./src/nature.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ "./src/timer.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score */ "./src/score.js");





class Game {
  constructor() {
    this.whale = new _whale__WEBPACK_IMPORTED_MODULE_0__["Whale"]({
      pos: [90000000000000, 7400],
      game: this
    });
    this.background = new _nature__WEBPACK_IMPORTED_MODULE_1__["Background"]();
    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_2__["Timer"]();
    this.score = new _score__WEBPACK_IMPORTED_MODULE_3__["Score"](this.whale);
    this.started = false;
    this.addListener();
  }

  randomPosition() {
    const x = Math.floor(Math.random() * this.DIM_X);
    const y = Math.floor(Math.random() * 1000 + 4000);
    return [x, y];
  }

  draw(bCtx, wCtx) {
    bCtx.clearRect(0, 0, bCtx.canvas.width, bCtx.canvas.height);
    wCtx.clearRect(0, 0, wCtx.canvas.width, wCtx.canvas.height);

    if (this.timer.timeleft === 0 && this.whale.underwater) {
      this.finish();
      return;
    }

    this.background.draw(bCtx, this.whale);
    this.whale.draw(wCtx);
  }

  moveObjects() {
    if (this.started) this.whale.move();
  }
  finish() {
    const bCanvas = document.getElementById('game-canvas');
    const wCanvas = document.getElementById('whale-canvas');
    const gameOverModal = document.getElementById('game-over-modal');
    const fs = document.getElementById('fs');
    const hj = document.getElementById('hj');
    const gameInfo = document.getElementById('game-info');

    bCanvas.classList.add('hidden');
    wCanvas.classList.add('hidden');
    gameOverModal.classList.remove('hidden');
    gameInfo.classList.remove('hidden');
    if (fs.innerHTML == 'Final score: ') fs.innerHTML += this.score.score;
    if (hj.innerHTML == 'Highest jump: ') hj.innerHTML = hj.innerHTML + this.score.highest + " feet";
  }
  restart() {
    const bCanvas = document.getElementById('game-canvas');
    const wCanvas = document.getElementById('whale-canvas');
    const gameOverModal = document.getElementById('game-over-modal');
    const fs = document.getElementById('fs');
    const hj = document.getElementById('hj');
    const gameInfo = document.getElementById('game-info');

    bCanvas.classList.remove('hidden');
    wCanvas.classList.remove('hidden');
    gameOverModal.classList.add('hidden');
    gameInfo.classList.add('hidden');

    fs.innerHTML = 'Final score: ';
    hj.innerHTML = 'Highest jump: ';

    this.whale.pos = [90000000000000, 7400];
    this.whale.vel = [0, 0];
    this.whale.angle = 0;

    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_2__["Timer"]();
    this.timer.start();
    clearInterval(this.score.show);
    this.score = new _score__WEBPACK_IMPORTED_MODULE_3__["Score"](this.whale);
  }
  addListener() {
    const play_again = document.getElementById('play-again-button');
    play_again.addEventListener('click', () => this.restart());
  }

}

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: GameView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameView", function() { return GameView; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _whale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whale */ "./src/whale.js");



class GameView {
  constructor(game, bCtx, wCtx) {
    this.game = game;
    this.bCtx = bCtx;
    this.wCtx = wCtx;
    this.whale = this.game.whale;
    window.whale = this.whale;
  }

  start() {
    const boundGameDraw = _game__WEBPACK_IMPORTED_MODULE_0__["Game"].prototype.draw.bind(this.game);
    const boundGameMoveObjects = _game__WEBPACK_IMPORTED_MODULE_0__["Game"].prototype.moveObjects.bind(this.game);

    this.bindKeyHandlers();

    window.setInterval(boundGameDraw, 26, this.bCtx, this.wCtx);
    window.setInterval(boundGameMoveObjects, 26);
  }

  bindKeyHandlers() {
    key('up', () => this.whale.accelerate());
    key('down', () => this.whale.decelerate());
    key('left', () => this.whale.turnLeft());
    key('right', () => this.whale.turnRight());
    key('space', () => this.whale.freeze());
    key('n', () => this.whale.nudge());
  }
}

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: MovingObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingObject", function() { return MovingObject; });

class MovingObject {
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

    let img = new Image(width, height);
    img.src = 'assets/narwhal-right.png';
    let rad = this.angle * Math.PI / 180;
    ctx.translate(50, 50);
    ctx.rotate(rad);

    let framenumber = this.chooseFrameNum();

    let sx = this.chooseFrameSxSy(framenumber)[0];
    let sy = this.chooseFrameSxSy(framenumber)[1];

    ctx.drawImage(img, sx, sy, 255, 110, -width / 2, -height / 2, width, height);

    ctx.rotate(-rad);
    ctx.translate(-50, -50);
    this.updateFrameCount();
  }
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
    this.framecount = (this.framecount + 1) % 100;
  }

  chooseFrameSxSy(num) {
    if (num == 1) return [0, 65];
    if (num == 2) return [255, 65];
    if (num == 3) return [0, 350];
    if (num == 4) return [255, 335];
    if (num == 5) return [510, 335];
    if (num == 6) return [0, 610];
    if (num == 7) return [255, 595];
    if (num == 8) return [510, 595];
  }
}

/***/ }),

/***/ "./src/nature.js":
/*!***********************!*\
  !*** ./src/nature.js ***!
  \***********************/
/*! exports provided: Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
class Background {
  constructor() {
    this.img = new Image(2500, 10000);
    this.img.src = 'assets/whale-olympics-background2.png';
  }

  draw(ctx, whale) {
    const img = this.img;
    let sx = whale.pos[0] % 5000;
    let sy = whale.pos[1];
    let whiteSpace = 5000 - whale.pos[0] % 5000;
    ctx.drawImage(img, sx, sy, ctx.canvas.width, ctx.canvas.height, 0, 0, ctx.canvas.width, ctx.canvas.height);
    if (whiteSpace > 0 && whiteSpace < 575) {
      ctx.drawImage(img, 0, sy, ctx.canvas.width, ctx.canvas.height, whiteSpace, 0, ctx.canvas.width, ctx.canvas.height);
    }
  }
}

/***/ }),

/***/ "./src/physics_util.js":
/*!*****************************!*\
  !*** ./src/physics_util.js ***!
  \*****************************/
/*! exports provided: randomVec, specificVec, scale, speed, degree, averageAngle, fall, slow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomVec", function() { return randomVec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specificVec", function() { return specificVec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speed", function() { return speed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degree", function() { return degree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "averageAngle", function() { return averageAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fall", function() { return fall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slow", function() { return slow; });
const randomVec = length => {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.cos(deg), Math.sin(deg)], length);
};
const specificVec = (deg, speed) => {
  let radians = deg * Math.PI / 180;
  let y = Math.sin(radians);
  let x = Math.cos(radians);
  return [x * speed, y * speed];
};
const scale = (vec, m) => {
  return [vec[0] * m, vec[1] * m];
};

const speed = vel => {
  return Math.sqrt(Math.pow(vel[0], 2) + Math.pow(vel[1], 2));
};

const degree = vel => {
  return Math.atan2(vel[1], vel[0]) * 180 / Math.PI;
};

const averageAngle = (angle1, angle2) => {
  return (angle1 + angle2) / 2;
};

const fall = (vel, timeOut) => {
  let x = vel[0];
  let y = vel[1];
  if (y > 36) return [x, y];
  y = y + .005 * timeOut;
  return [x, y];
};
//8500 waterline
//9450 ground
const slow = (vel, depth) => {
  depth = 8900 - depth;
  let x = vel[0];
  let y = vel[1];
  if (vel[1] < 0) return [x, y];
  y = y + depth / 500;
  return [x, y];
};

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/*! exports provided: Score */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
class Score {
  constructor(whale) {
    this.whale = whale;
    this.score = 0;
    this.show = window.setInterval(() => {
      this.display();
      this.checkWhale();
    }, 20);
    this.tricks = {
      'fifty': false,
      'fivehun': false,
      'fivek': false,
      'halfflip': false,
      'oneflip': false,
      'oneandhalfflip': false
    };
    this.trickArray = [];
    this.announcements = document.getElementById('announcements');
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
    Object.keys(this.tricks).forEach(key => {
      this.tricks[key] = false;
    });
  }
  checkAir() {
    const f = this.feet();
    if (f > this.highest) this.highest = f;
  }
  feet() {
    return Math.floor(7449 - this.whale.pos[1]);
  }

  addAir() {
    const f = this.feet();
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
    let halfFFlips = Math.max(0, Math.floor(this.whale.flipangle / 180));
    let halfBFlips = Math.max(0, Math.floor(this.whale.flipangle / -180));

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
    score.innerHTML = `Score: ${this.score}`;
    this.trickArray.length > 0 ? this.announcements.innerHTML = this.trickArray.join(', ').concat('!') : this.announcements.innerHTML = '';
  }
}

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
class Timer {
  constructor() {
    this.timeleft = 211;
  }
  start() {
    this.count = window.setInterval(() => {
      this.display();
      this.decrement();
    }, 1000);
  }
  decrement() {
    this.timeleft > 0 ? this.timeleft-- : clearInterval(this.count);
  }
  display() {
    const timer = document.getElementById('timer');
    timer.innerHTML = `Time Left: ${Math.max(0, this.timeleft - 1)}`;
  }
}

/***/ }),

/***/ "./src/whale-olympics.js":
/*!*******************************!*\
  !*** ./src/whale-olympics.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ "./src/game_view.js");



document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('game-menu-modal');
  const start_button = document.getElementById('start-game-button');
  const game_info = document.getElementById('game-info');

  const bCanvas = document.getElementById('game-canvas');
  const bCtx = bCanvas.getContext('2d');

  const wCanvas = document.getElementById('whale-canvas');
  const wCtx = wCanvas.getContext('2d');

  const new_game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
  const new_game_view = new _game_view__WEBPACK_IMPORTED_MODULE_1__["GameView"](new_game, bCtx, wCtx);

  start_button.addEventListener('click', e => {
    bCanvas.classList.toggle('hidden');
    wCanvas.classList.toggle('hidden');
    modal.classList.toggle('hidden');
    game_info.classList.toggle('hidden');
    new_game.started = true;
    new_game.timer.start();
  });

  new_game_view.start();
});

/***/ }),

/***/ "./src/whale.js":
/*!**********************!*\
  !*** ./src/whale.js ***!
  \**********************/
/*! exports provided: Whale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Whale", function() { return Whale; });
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ "./src/moving_object.js");
/* harmony import */ var _physics_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physics_util */ "./src/physics_util.js");



class Whale extends _moving_object__WEBPACK_IMPORTED_MODULE_0__["MovingObject"] {
  constructor(option) {
    option.vel = _physics_util__WEBPACK_IMPORTED_MODULE_1__["specificVec"](40, .5);
    super(option);
    this.lastUnderwater = false;
    this.underwater = false;
    this.timeOut = 0;
    this.angle = 0;
    this.flipangle = 0;
    this.framecount = 0;
    this.waterline = 8755;
  }
  accelerate() {
    if (this.underwater && Math.abs(this.vel[0]) < 10) {
      this.vel = _physics_util__WEBPACK_IMPORTED_MODULE_1__["scale"](this.vel, 1.20);
    }
  }
  decelerate() {
    if (this.underwater) this.vel = _physics_util__WEBPACK_IMPORTED_MODULE_1__["scale"](this.vel, .8);
  }
  nudge() {
    this.vel = [.3, -.3];
  }
  turnLeft() {
    let degree = _physics_util__WEBPACK_IMPORTED_MODULE_1__["degree"](this.vel);
    let speed = _physics_util__WEBPACK_IMPORTED_MODULE_1__["speed"](this.vel);
    if (this.underwater) {
      this.vel = _physics_util__WEBPACK_IMPORTED_MODULE_1__["specificVec"](degree - 25 % 360, speed);
    } else {
      this.flipangle = this.flipangle - 15;
      this.angle = (this.angle - 15) % 360;
    }
  }
  turnRight() {
    let degree = _physics_util__WEBPACK_IMPORTED_MODULE_1__["degree"](this.vel);
    let speed = _physics_util__WEBPACK_IMPORTED_MODULE_1__["speed"](this.vel);
    if (this.underwater) {
      this.vel = _physics_util__WEBPACK_IMPORTED_MODULE_1__["specificVec"](degree + 25 % 360, speed);
    } else {
      this.flipangle = this.flipangle + 15;
      this.angle = (this.angle + 15) % 360;
    }
  }
  freeze() {
    this.vel = [0, 0];
  }
  checkTimeout() {
    let depth = this.pos[1];
    if (depth > this.waterline) {
      if (!this.lastUnderwater) this.checkLanding();
      this.underwater = true;
      this.timeOut = 0;
      this.flipangle = this.angle;
    } else {
      this.underwater = false;
      this.timeOut++;
    }
  }

  checkLanding() {
    let deg = _physics_util__WEBPACK_IMPORTED_MODULE_1__["degree"](this.vel);
    let diff;
    this.angle > 0 ? diff = Math.abs(this.angle % 360 - deg) : diff = Math.abs(360 + this.angle % 360 - deg);
    if (diff > 30 && this.vel[1] > 2) {
      this.vel[0] /= 10;
      this.vel[1] /= 10;
    }
  }

  checkWipeout() {
    let depth = this.pos[1];
    if (depth > 9600) {
      this.vel[0] = .4;
      this.vel[1] = -2;
    }
  }
  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.lastUnderwater = this.underwater;

    this.checkTimeout();
    this.checkWipeout();
    if (this.underwater) {
      this.angle = _physics_util__WEBPACK_IMPORTED_MODULE_1__["averageAngle"](this.angle, _physics_util__WEBPACK_IMPORTED_MODULE_1__["degree"](this.vel));
      this.vel = _physics_util__WEBPACK_IMPORTED_MODULE_1__["slow"](this.vel, this.pos[1]);
    } else {
      this.vel = _physics_util__WEBPACK_IMPORTED_MODULE_1__["fall"](this.vel, this.timeOut);
    }
  }
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map