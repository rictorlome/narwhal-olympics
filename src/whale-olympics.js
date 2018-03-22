import { Game } from './game'
import { GameView } from './game_view'

document.addEventListener('DOMContentLoaded', () => {
  const bCanvas = document.getElementById('game-canvas');
  const bCtx = bCanvas.getContext('2d');

  const wCanvas = document.getElementById('whale-canvas');
  const wCtx = wCanvas.getContext('2d');

  const new_game = new Game(575,750)
  const new_game_view = new GameView(new_game, bCtx, wCtx)

  new_game_view.start();
});
