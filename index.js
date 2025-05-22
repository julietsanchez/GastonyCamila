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

function playMusic() {
  const player = document.getElementById('ytplayer');
  const toggle = document.getElementById('music-toggle');
  player.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&playlist=${videoID}`;
  toggle.style.display = "flex";
  toggle.classList.add('active');
  musicPlaying = true;
  document.getElementById('music-popup').style.display = "none";
}

function closePopup() {
  document.getElementById('music-popup').style.display = "none";
}

function toggleMusic() {
  const player = document.getElementById('ytplayer');
  const toggle = document.getElementById('music-toggle');

  if (!musicPlaying) {
    player.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&playlist=${videoID}`;
    toggle.classList.add('active');
    musicPlaying = true;
  } else {
    player.src = "";
    toggle.classList.remove('active');
    musicPlaying = false;
  }
}
function copyCBU() {
    const cbu = document.getElementById("cbu").textContent;
    navigator.clipboard.writeText(cbu).then(() => {
      alert("CBU copiado al portapapeles");
    });
  }