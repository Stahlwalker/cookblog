import React from "react";
import { useWakeLock } from 'react-screen-wake-lock';

function Component() {
  const { isSupported, released, request, release } = useWakeLock({
    onRequest: () => alert('Screen Wake Lock: requested!'),
    onError: () => alert('An error happened 💥'),
    onRelease: () => alert('Screen Wake Lock: released!'),
  });

  return (
    <div className="wake">
      <p> 
        {/* Screen Wake: <b>{`${isSupported}`}</b> */}
        <br />
        <i aria-hidden className="fa fa-android"></i> Users screen lock status: <b>{`${released}`}</b>
      </p>
      <button id="lock-button"
        type="button"
        onClick={() => (released === false ? release() : request())}
      >
        {released === false ? 'Unlock' : 'Lock'}
      </button>
    </div>
  );
}

export default Component;