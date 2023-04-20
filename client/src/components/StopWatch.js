import React, { useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';

const StopWatch = ({setTimer}) =>  {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  useEffect(() => {
    setTimer(minutes*60 + seconds)
  }, [seconds, minutes])

  const handleStop = () => {
    reset()
    pause()
  }

  return (
    <div className='w-[120px] md:w-[150px]'>
      <div>
        <p className='text-[10px]'><span className='md:text-[42px] text-[30px]'>{minutes}</span> min <span className='md:text-[42px] text-[30px]'>{seconds}</span> secs</p>
      </div>
      <p>Elapsed Time</p>
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button> */}
    </div>
  );
}

export default StopWatch