import { Game } from './game'
import { GameView } from './game_view'

document.addEventListener('DOMContentLoaded', () => {
  const gamePlay = document.getElementById('game-play-div')
  const gameMenuModal = document.getElementById('game-menu-modal')
  const gameInfoModal = document.getElementById('game-info-modal');

  const startButton = document.getElementById('start-game-button')

  const gear = document.getElementById('gear')
  const dropdown = document.getElementById('dropdown')
  const song = document.getElementById('song')
  const mute = document.getElementById('speaker')
  const unmute = document.getElementById('speaker-mute')
  const info = document.getElementById('info');
  const reload = document.getElementById('reload')

  const bCanvas = document.getElementById('game-canvas');
  const bCtx = bCanvas.getContext('2d');

  const wCanvas = document.getElementById('whale-canvas');
  const wCtx = wCanvas.getContext('2d');

  const new_game = new Game();
  const new_game_view = new GameView(new_game, bCtx, wCtx);

  reload.addEventListener('click', (e) => {
    window.location.reload(false);
  })

  gear.addEventListener('click', (e) => {
    gear.classList.toggle('turnright');
    gear.classList.toggle('turnleft');
    dropdown.classList.toggle('invisible');
    dropdown.classList.toggle('visible');
  })

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

  info.addEventListener('click', (e) => {
    if (new_game.started) new_game.timer.paused = !new_game.timer.paused;
    gameInfoModal.classList.toggle('hidden');
  });

  startButton.addEventListener('click', (e) => {
    gamePlay.classList.toggle('hidden');
    gameMenuModal.classList.toggle('hidden');
    song.play();
    new_game.started = true;
    new_game.timer.start();
  })

  new_game_view.start();
});
