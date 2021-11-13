import React, { useEffect } from "react";

import IdleTimer, { useIdleTimer } from "react-idle-timer";
// give time
// start, pause, save

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
function TrackTime({ day = 0, hours = 0, minutes = 0 }) {
  const [idleTimer, setIdleTimer] = useState(null);
  let getMinutes = minutes * minuteSeconds;
  let getHours = hours * hourSeconds;
  let getDays = day * daySeconds;
  const [timeReamining, setTimeRemaining] = useState();

  const onActive = () => {};
  const onDone = () => {};
  const onIdle = () => {};
  useEffect(() => {
    setInterval(() => {
      setTimeRemaining(idleTimer.getRemainingTime());
    });
  }, []);
  return (
    <div>
      <IdleTimer
        ref={(ref) => {
          idleTimer = ref;
        }}
        onActive={onActive}
        onIdle={onIdle}
        timeout={onDone}
        crossTab={{
          emitOnAllTabs: true,
        }}
      />
    </div>
  );
}
