const START_TIME = 164; 
const END_TIME = 185;   

function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  const wrapper = document.getElementById('envelope-wrapper')
  const card = document.getElementById('card');

  envelope.classList.add('open');

  playMusicSegment(START_TIME, END_TIME);

  setTimeout(() => {
    wrapper.style.display = 'none';
    card.classList.remove('hidden');
  
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 50);
  }, 600);
}

function playMusicSegment(start, end) {
  const music = document.getElementById('bg-music');

  music.currentTime = start;
  music.play().catch(err => console.log("Audio autoplay prevented:", err));

  function checkTime() {
    if (music.currentTime >= end) {
      music.currentTime = start;
    }
  }

  music.addEventListener('timeupdate', checkTime);
}

function moveButton(event) {
  if (event) event.preventDefault();

  const btn = document.getElementById('no-btn');
  const card = document.getElementById('card');

  
  btn.style.position = 'absolute';

  
  const padding = 15;
  const maxX = card.clientWidth - btn.clientWidth - padding;
  const maxY = card.clientHeight - btn.clientHeight - padding;

  const x = Math.max(padding, Math.random() * maxX);
  const y = Math.max(padding, Math.random() * maxY);

 
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
}

function acceptGift() {
  alert("GAWIN MO NA👿");
}