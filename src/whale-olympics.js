import { Game } from './game'
import { GameView } from './game_view'

document.addEventListener('DOMContentLoaded', () => {
  const game_play = document.getElementById('game-play-div')
  const modal = document.getElementById('game-menu-modal')
  const start_button = document.getElementById('start-game-button')
  const game_info = document.getElementById('game-info')
  const gear = document.getElementById('gear')
  const dropdown = document.getElementById('dropdown')
  const song = document.getElementById('song')

  const mute = document.getElementById('speaker')
  const unmute = document.getElementById('speaker-mute')

  const bCanvas = document.getElementById('game-canvas');
  const bCtx = bCanvas.getContext('2d');

  const wCanvas = document.getElementById('whale-canvas');
  const wCtx = wCanvas.getContext('2d');

  const new_game = new Game();
  const new_game_view = new GameView(new_game, bCtx, wCtx);

  mute.addEventListener('click', (e) => {
    mute.classList.toggle('hidden')
    unmute.classList.toggle('hidden')
    song.muted = true;
  })
  unmute.addEventListener('click', (e) => {
    mute.classList.toggle('hidden')
    unmute.classList.toggle('hidden')
    song.muted = false;
  })

  gear.addEventListener('click', (e) => {
    gear.classList.toggle('turnright');
    gear.classList.toggle('turnleft');
    dropdown.classList.toggle('invisible');
    dropdown.classList.toggle('visible');
  })

  start_button.addEventListener('click', (e) => {
    game_play.classList.toggle('hidden');
    modal.classList.toggle('hidden');
    song.play();
    new_game.started = true;
    new_game.timer.start();
  })

  new_game_view.start();
});
