const contactBtn = document.getElementById('button');
const formPopup = document.getElementById('form-popup');
const closeFormSpan = document.getElementById('close-form');

contactBtn.addEventListener('click', function() {
  formPopup.style.display = 'block';
});

closeFormSpan.addEventListener('click', function() {
  formPopup.style.display = 'none';
});