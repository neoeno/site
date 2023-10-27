import { hasTriggerEvent, walkTriggerEventChain } from 'vidstack';

const player = document.querySelector('media-player');

player.addEventListener('playing', (event) => {
  // is this resuming from buffering?
  if (hasTriggerEvent(event, 'waiting')) {
    // ...
  }

  // walk through each trigger event in the chain
  walkTriggerEventChain(event, (trigger) => {
    console.log(trigger);
  });
});