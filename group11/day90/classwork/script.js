const box = document.querySelector('.box');
const container = document.querySelector('.container');

let direction = 'right';
let positionX = 0; 
let positionY = 0; 

const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

function moveBox() {
  if (direction === 'right') {
    positionX += 5;
    if (positionX + box.offsetWidth >= containerWidth) {
      direction = 'down';
    }
  } else if (direction === 'down') {
    positionY += 5;
    if (positionY + box.offsetHeight >= containerHeight) {
      direction = 'left';
    }
  } else if (direction === 'left') {
    positionX -= 5;
    if (positionX <= 0) {
      direction = 'up';
    }
  } else if (direction === 'up') {
    positionY -= 5;
    if (positionY <= 0) {
      direction = 'right';
    }
  }

  box.style.transform = `translate(${positionX}px, ${positionY}px)`;

  requestAnimationFrame(moveBox);
}

moveBox();
