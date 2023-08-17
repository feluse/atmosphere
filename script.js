const fileInput = document.getElementById('fileInput');
const audioPlayer = document.getElementById('audioPlayer');
const songName = document.getElementById('songName');
const uploadButton = document.querySelector('.upload-button');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];

  if (file) {
    const objectURL = URL.createObjectURL(file);
    audioPlayer.src = objectURL;
    audioPlayer.play();
    songName.textContent = `Now Playing: ${file.name}`;
  }
});

uploadButton.addEventListener('click', () => {
  fileInput.click();
});