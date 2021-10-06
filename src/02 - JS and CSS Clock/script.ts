const secondHand = document.querySelector('.second-hand') as HTMLDivElement;
const minsHand = document.querySelector('.min-hand') as HTMLDivElement;
const hourHand = document.querySelector('.hour-hand') as HTMLDivElement;

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if (seconds === 0) {
    secondHand.style.transitionDuration = '0s';
    minsHand.style.transitionDuration = '0s';
    hourHand.style.transitionDuration = '0s';
  } else {
    secondHand.style.transitionDuration = '0.05s';
    minsHand.style.transitionDuration = '0.05s';
    hourHand.style.transitionDuration = '0.05s';
  }
}

setInterval(setDate, 1000);
