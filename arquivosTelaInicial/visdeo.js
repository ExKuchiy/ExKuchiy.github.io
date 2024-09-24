const video = document.getElementById('shrek');
const playButton = document.getElementById('play/pause');
const playButtonImg = document.getElementById('playImg');
const progressBar = document.getElementById('progresso');
const tempoCont = document.getElementById('duracao');
const volume = document.getElementById('volume');
const volImg = document.getElementById('volImg');
let isSeeking = false;

function formatTime(time) {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);
  return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

playButton.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playButtonImg.src = 'arquivosTelaInicial/pause.png';
        playButtonImg.alt = 'Pause';
    } else {
        video.pause();
        playButtonImg.src = 'arquivosTelaInicial/play.png';
        playButtonImg.alt = 'Play';
    }
});

video.addEventListener('timeupdate', function() {
  if (!isSeeking) {
      const progress = (video.currentTime / video.duration) * 100;
      progressBar.value = progress;
  }
  tempoCont.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
});

progressBar.addEventListener('input', function() {
  isSeeking = true;
  const time = (progressBar.value / 100) * video.duration;
  video.currentTime = time;
  tempoCont.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
});

progressBar.addEventListener('change', function() {
  isSeeking = false;
});

volume.addEventListener('input', function() {
  video.vol = volume.value / 100;
})