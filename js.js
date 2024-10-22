const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const volumeControl = document.getElementById('volume-control');
const seekBar = document.getElementById('seek-bar');
const audio = new Audio(); 

// Play/Pause
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playBtn.textContent = 'Play';
  }
});

// Skip to Next Track
nextBtn.addEventListener('click', () => {
});

// Previous Track
prevBtn.addEventListener('click', () => {
});

// Volume Control
volumeControl.addEventListener('input', (e) => {
  audio.volume = e.target.value;
});

// Seek Bar
audio.addEventListener('timeupdate', () => {
  seekBar.value = (audio.currentTime / audio.duration) * 100;
});
seekBar.addEventListener('input', (e) => {
  audio.currentTime = (e.target.value / 100) * audio.duration;
});

//node.js program
const express = require('express');
const app = express();

app.get('/api/songs', (req, res) => {

  res.json(songs);
});

// Sample Route for Search
app.get('/api/search', (req, res) => {
  const searchTerm = req.query.q;

  const results = searchSongsInDatabase(searchTerm);
  res.json(results);
});

app.listen(3000, () => console.log('Server running on port 3000'));
