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
/* harmony import */ var _lib_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/camera */ "./lib/camera.js");
/* harmony import */ var _lib_camera__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_camera__WEBPACK_IMPORTED_MODULE_2__);





class Game {
  constructor(DIM_X, DIM_Y) {
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.whale = new _whale__WEBPACK_IMPORTED_MODULE_0__["Whale"]({
      pos: this.randomPosition(),
      game: this
    });
    this.background = new _nature__WEBPACK_IMPORTED_MODULE_1__["Background"]();
    this.ground = new _nature__WEBPACK_IMPORTED_MODULE_1__["Ground"]();
    this.ocean = new _nature__WEBPACK_IMPORTED_MODULE_1__["Ocean"]();
  }

  randomPosition() {
    const x = Math.floor(Math.random() * this.DIM_X);
    const y = Math.floor(Math.random() * 1000 + 4000);
    return [x, y];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.background.draw(ctx, this.whale);
    this.whale.draw(ctx);
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
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.whale = this.game.whale;
    window.whale = this.whale;
  }

  start() {
    const boundGameDraw = _game__WEBPACK_IMPORTED_MODULE_0__["Game"].prototype.draw.bind(this.game);
    const boundGameMoveObjects = _game__WEBPACK_IMPORTED_MODULE_0__["Game"].prototype.moveObjects.bind(this.game);
    this.bindKeyHandlers();
    window.setInterval(boundGameDraw, 40, this.ctx);
    window.setInterval(boundGameMoveObjects, 40, this.ctx);
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
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(750, 1000, this.radius, 0, 2 * Math.PI, false);

    ctx.fill();
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
    let img = new Image(10200, 6756);
    img.src = '/Users/c/workspace/whale-olympics/assets/ocean_blues.jpg';
    let sx = whale.pos[0] % 4000;
    let sy = whale.pos[1];
    ctx.drawImage(img, sx, sy, 2000, 1500, 0, 0, 2000, 1500);
  }
}

/***/ }),

/***/ "./src/physics_util.js":
/*!*****************************!*\
  !*** ./src/physics_util.js ***!
  \*****************************/
/*! exports provided: randomVec, specificVec, scale, speed, degree, fall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomVec", function() { return randomVec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specificVec", function() { return specificVec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speed", function() { return speed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degree", function() { return degree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fall", function() { return fall; });
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
const fall = (vel, timeOut) => {
  let x = vel[0];
  let y = vel[1];
  y = y + .05 * timeOut;
  return [x, y];
};

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
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');

  const new_game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"](2000, 1500);
  const new_game_view = new _game_view__WEBPACK_IMPORTED_MODULE_1__["GameView"](new_game, ctx);

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
    option.radius = 20;
    option.color = 'black';
    option.vel = _physics_util__WEBPACK_IMPORTED_MODULE_1__["specificVec"](40, .5);
    super(option);
    this.underwater = true;
    this.timeOut = 0;
  }
  accelerate() {
    if (this.underwater) {
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
    this.vel = _physics_util__WEBPACK_IMPORTED_MODULE_1__["specificVec"](degree - 15 % 360, speed);
  }
  turnRight() {
    let degree = _physics_util__WEBPACK_IMPORTED_MODULE_1__["degree"](this.vel);
    let speed = _physics_util__WEBPACK_IMPORTED_MODULE_1__["speed"](this.vel);
    this.vel = _physics_util__WEBPACK_IMPORTED_MODULE_1__["specificVec"](degree + 15 % 360, speed);
  }
  freeze() {
    this.vel = [0, 0];
  }
  checkTimeout() {
    if (this.pos[1] < 4050) {
      this.underwater = false;
      this.timeOut += 1;
    } else {
      this.underwater = true;
      this.timeOut = 0;
    }
  }
  checkWipeout() {
    if (this.pos[1] > 5200) {
      this.vel[1] = -4;
    }
  }
  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.checkTimeout();
    this.checkWipeout();
    if (!this.underwater) {
      this.vel = _physics_util__WEBPACK_IMPORTED_MODULE_1__["fall"](this.vel, this.timeOut);
    }
  }
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map