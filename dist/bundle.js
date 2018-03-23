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

/***/ "./lib/camera.js":
/*!***********************!*\
  !*** ./lib/camera.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

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
/* harmony import */ var _lib_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/camera */ "./lib/camera.js");
/* harmony import */ var _lib_camera__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_camera__WEBPACK_IMPORTED_MODULE_4__);






class Game {
  constructor(DIM_X, DIM_Y) {
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.whale = new _whale__WEBPACK_IMPORTED_MODULE_0__["Whale"]({
      pos: [900, 7400],
      game: this
    });
    this.background = new _nature__WEBPACK_IMPORTED_MODULE_1__["Background"]();
    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_2__["Timer"]();
    this.score = new _score__WEBPACK_IMPORTED_MODULE_3__["Score"](this.whale);
  }

  randomPosition() {
    const x = Math.floor(Math.random() * this.DIM_X);
    const y = Math.floor(Math.random() * 1000 + 4000);
    return [x, y];
  }

  draw(bCtx, wCtx) {
    bCtx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    wCtx.clearRect(0, 0, 100, 100);
    this.background.draw(bCtx, this.whale);
    this.whale.draw(wCtx);
  }

  moveObjects() {
    this.whale.move();
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
    window.setInterval(boundGameDraw, 20, this.bCtx, this.wCtx);
    window.setInterval(boundGameMoveObjects, 20);
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
/*! exports provided: Ocean, Ground, Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ocean", function() { return Ocean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ground", function() { return Ground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
class Ocean {
  draw(ctx) {
    ctx.fillStyle = 'blue';
    ctx.rect(0, 1100, 2000, 250);
    ctx.fill();
  }
}

class Ground {
  draw(ctx) {
    ctx.fillStyle = 'brown';
    ctx.rect(0, 1400, 2000, 100);
    ctx.fill();
  }
}

class Background {
  draw(ctx, whale) {
    let img = new Image(2500, 10000);
    img.src = 'assets/whale-olympics-background.png';
    let sx = whale.pos[0];
    let sy = whale.pos[1];
    ctx.drawImage(img, (sx - 2212) % 2500, sy, 575, 750, 0, 0, 575, 750);
    ctx.drawImage(img, sx % 2500, sy, 575, 750, 0, 0, 575, 750);
    ctx.drawImage(img, (sx + 2212) % 2500, sy, 575, 750, 0, 0, 575, 750);
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
//8800 waterline
//9450 ground
const slow = (vel, depth) => {
  depth = 9000 - depth;
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
    window.setInterval(() => {
      this.display();
      this.checkWhale();
    }, 20);
    this.tricks = {
      'fifty': false,
      'hundred': false,
      'twohun': false,
      'halfflip': false,
      'oneflip': false,
      'oneandhalfflip': false
    };
  }

  checkWhale() {
    if (this.whale.underwater) {
      this.resetTricks();
    } else {
      this.addAir();
      this.addFlips();
    }
  }
  resetTricks() {
    Object.keys(this.tricks).forEach(key => {
      this.tricks[key] = false;
    });
  }

  addAir() {
    if (this.whale.pos[1] < 7200 && !this.tricks['fifty']) {
      this.tricks['fifty'] = true;
      this.score += 50;
    }
    if (this.whale.pos[1] < 6000 && !this.tricks['hundred']) {
      this.tricks['hundred'] = true;
      this.score += 100;
    }
    if (this.whale.pos[1] < 5000 && !this.tricks['twohun']) {
      this.tricks['twohun'] = true;
      this.score += 200;
    }
  }
  addFlips() {
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
    const announcements = document.getElementById('announcements');

    const score = document.getElementById('score');
    score.innerHTML = `Score: ${this.score}`;
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
    this.timeleft = 120;
    window.setInterval(() => {
      this.display();
      this.decrement();
    }, 1000);
  }
  decrement() {
    this.timeleft--;
  }
  display() {
    const timer = document.getElementById('timer');
    timer.innerHTML = `Time Left: ${this.timeleft}`;
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
  const bCanvas = document.getElementById('game-canvas');
  const bCtx = bCanvas.getContext('2d');

  const wCanvas = document.getElementById('whale-canvas');
  const wCtx = wCanvas.getContext('2d');

  const new_game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"](575, 750);
  const new_game_view = new _game_view__WEBPACK_IMPORTED_MODULE_1__["GameView"](new_game, bCtx, wCtx);

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
    this.underwater = true;
    this.timeOut = 0;
    this.angle = 0;
    this.framecount = 0;
    this.waterline = 8745;
  }
  accelerate() {
    if (this.underwater && this.vel[0] < 12) {
      this.vel = _physics_util__WEBPACK_IMPORTED_MODULE_1__["scale"](this.vel, 1.20);
    }
  }
  decelerate() {
    this.vel = _physics_util__WEBPACK_IMPORTED_MODULE_1__["scale"](this.vel, .8);
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
      this.angle -= 15;
    }
  }
  turnRight() {
    let degree = _physics_util__WEBPACK_IMPORTED_MODULE_1__["degree"](this.vel);
    let speed = _physics_util__WEBPACK_IMPORTED_MODULE_1__["speed"](this.vel);
    if (this.underwater) {
      this.vel = _physics_util__WEBPACK_IMPORTED_MODULE_1__["specificVec"](degree + 25 % 360, speed);
    } else {
      this.angle += 15;
    }
  }
  freeze() {
    this.vel = [0, 0];
  }
  checkTimeout() {
    let depth = this.pos[1];
    if (depth > this.waterline + 10) {
      this.underwater = true;
      this.timeOut = 0;
    } else if (depth < this.waterline - 10) {
      this.underwater = false;
      this.timeOut++;
    } else {
      this.checkLanding();
    }
  }

  checkLanding() {
    let diff = Math.abs(this.angle - _physics_util__WEBPACK_IMPORTED_MODULE_1__["degree"](this.vel));
    if (diff > 30 && this.vel[1] > 2) {
      this.vel[0] /= 10;
      this.vel[1] /= 10;
    }
  }

  checkWipeout() {
    let depth = this.pos[1];
    if (depth > 9450) {
      this.vel[0] = .4;
      this.vel[1] = -2;
    }
  }
  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
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