import { useState } from 'react';
import { Timer } from './Timer';
import { Button } from './Button';

export const TimerContainer = () => {
  const [timer, setTimer] = useState<any>(0);
  const [pause, setPause] = useState<boolean>();
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  const onClickStart = () => {
    setPause(true);
    if (pause) {
      const newIntervalId = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const onClickStop = () => {
    setPause(false);
  };

  const onClickReset = () => {
    if (intervalId) {
      clearInterval(intervalId);
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
