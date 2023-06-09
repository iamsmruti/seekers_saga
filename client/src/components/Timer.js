import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

function Timer({ expiryTimestamp, times, setPuzzleState, setTimer, puzzleState }) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 25);

  const [trigger, setTrigger] = useState(0)

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, 
    onExpire: () => {
      if(trigger <= times - 2)
        setTrigger(trigger + 1)
        if(trigger !== times - 2)
          setPuzzleState(prev => prev + 1)
      console.warn('onExpire called') 
    },
    autoStart: true
  });

  useEffect(() => {
    setTimer(seconds)
  }, [seconds])

  useEffect(() => {
    restart(time)
  }, [])

  useEffect(() => {
    restart(time)
  }, [trigger, puzzleState])

  return (
    <div className='md:w-[100px] md:h-[100px] w-[70px] h-[70px] bg-greenShade flex justify-center items-center border-4 border-deepPurpleShade rounded-full'>
      <p className='md:text-[48px] text-[32px]'>{seconds}</p>
    </div>
  );
}

export default Timer