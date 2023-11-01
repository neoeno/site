import { type PointerEvent } from 'react';

import { useMediaRemote } from '@vidstack/react';

function RotateButton() {
  const remote = useMediaRemote();

  function onPointerUp({ nativeEvent }: PointerEvent) {
    // - We are providing the "trigger" here.
    // - Trigger events allow us to trace events back to their origin.
    // - The orientation change event will have this pointer event in its chain.
    remote.lockScreenOrientation('landscape', nativeEvent);

    // ...

    // Unlock to allow user control.
    remote.unlockScreenOrientation(nativeEvent);
  }

  return <button onPointerUp={onPointerUp}>{/* ... */}</button>;
}
