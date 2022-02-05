import { useState } from 'react';
import { Timer } from './Timer';
import { Button } from './Button';

export const TimerContainer = () => {
  const [timer, setTimer] = useState<number>(0);
  const [timerId, setTimerId] = useState<NodeJS.Timer>();

  const onClickStart = () => {
    const inervalId = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    console.log(timer);
    setTimerId(inervalId);
  };

  const onClickStop = () => {
    if (timerId) {
      clearInterval(timerId);
    }
  };

  const onClickReset = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimer(0);
    }
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Timer timer={timer} />
      <div style={{ display: 'flex' }}>
        <Button text='Start' onClick={onClickStart} />
        <Button text='Stop' onClick={onClickStop} />
        <Button text='Reset' onClick={onClickReset} />
      </div>
    </div>
  );
};
