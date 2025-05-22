function updateCountdown() {
  const targetDate = new Date("2025-10-15T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "<p>¡Ya llegó el gran día!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}
updateCountdown();
setInterval(updateCountdown, 1000);    

let musicPlaying = false;
const videoID = "wIrw5Z_Ay0Y"; // canción personalizada

let ytPlayer;

function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('ytplayer', {
    height: '1',
    width: '1',
    videoId: 'wIrw5Z_Ay0Y',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: 'wIrw5Z_Ay0Y'
    },
    events: {
      'onReady': function (event) {
        event.target.playVideo();
      }
    }
  });
}

function playMusic() {
  if (window.YT && window.YT.Player) {
    onYouTubeIframeAPIReady();
  } else {
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
  }

  document.getElementById('music-popup').style.display = 'none';
  document.getElementById('music-toggle').style.display = 'flex';
}