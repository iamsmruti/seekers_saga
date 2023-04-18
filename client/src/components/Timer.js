import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

function Timer({ expiryTimestamp, times }) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);

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
      console.warn('onExpire called') 
    },
    autoStart: true
  });

  useEffect(() => {
    restart(time)
  }, [])

  useEffect(() => {
    restart(time)
  }, [trigger])

  return (
    <div className='w-[100px] h-[100px] bg-greenShade flex justify-center items-center border-4 border-deepPurpleShade rounded-full'>
      <p className='text-[32px]'>{seconds}</p>
    </div>
  );
}

export default Timer