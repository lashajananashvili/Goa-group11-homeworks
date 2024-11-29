const paragraph1 = document.getElementById('paragraph1');
const paragraph2 = document.getElementById('paragraph2');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', () => {
  paragraph1.style.color = 'blue';
});

button2.addEventListener('click', () => {
  paragraph2.style.color = 'red';
});