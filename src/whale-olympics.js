import { Game } from './game'
import { GameView } from './game_view'

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');

  const new_game = new Game(2000,1500)
  const new_game_view = new GameView(new_game, ctx)

  new_game_view.start();
});
