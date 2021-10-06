const keys: NodeListOf<HTMLDivElement> = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

function removeTransition(e: TransitionEvent) {
  // if (e.propertyName !== 'transform' || e.target === null) return;
  const target = e.target as HTMLDivElement;
  target.classList.remove('playing');
}

function playSound(e: KeyboardEvent) {
  const audio: HTMLAudioElement | null = document.querySelector(
    `audio[data-key="${e.code}"]`
  );
  const key: HTMLDivElement | null = document.querySelector(
    `.key[data-key="${e.code}"]`
  );
  if (!audio || !key) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

window.addEventListener('keydown', playSound);
