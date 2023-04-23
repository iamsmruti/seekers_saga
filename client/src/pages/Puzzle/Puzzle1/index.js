import React, { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'

// Custom Components
import PuzzleCard from './PuzzleCard';
import { puzzle1 } from './data';

import Timer from '../../../components/Timer';
import PuzzleReport from './PuzzleReport';

const PuzzleOne = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 25);

    const [puzzleState, setPuzzleState] = useState()
    const [stats, setStats] = useState([])
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        if(localStorage.getItem('puzzle_state')){
          setPuzzleState(Number(localStorage.getItem('puzzle_state')))
        } else {
          setPuzzleState(0)
        }
    
        if(localStorage.getItem('puzzle1_stat')){
          setStats(JSON.parse(localStorage.getItem('puzzle1_stat')))
        } else {
          setStats([])
        }
    }, [])

    useEffect(() => {
      console.log(stats)
      localStorage.setItem('puzzle1_stat', JSON.stringify(stats))
    }, [stats])

  return (
    <Layout>
        <div className='flex justify-between px-5 py-5 items-start'>
            <div className=''>
                <h2 className='text-[24px] font-semibold'>Find the Odd one...</h2>
                <p className=''>Click on the odd one</p>
            </div>
            {puzzleState !== 9 && <div>
                <Timer expiryTimeStamp={time} setTimer={setTimer} times={puzzle1.length} setPuzzleState={setPuzzleState} puzzleState={puzzleState}/>
            </div>}
        </div>
        
        <div className='flex justify-center mt-10'>
            <div className='md:w-[1000px] w-[100vw]'>
                {puzzleState === 0 && <PuzzleCard index={0} item={puzzle1[0]} timer={timer} setStats={setStats} setPuzzleState={setPuzzleState}/>}
                {puzzleState === 1 && <PuzzleCard index={1} item={puzzle1[1]} timer={timer} setStats={setStats} setPuzzleState={setPuzzleState}/>}
                {puzzleState === 2 && <PuzzleCard index={2} item={puzzle1[2]} timer={timer} setStats={setStats} setPuzzleState={setPuzzleState}/>}
                {puzzleState === 3 && <PuzzleCard index={3} item={puzzle1[3]} timer={timer} setStats={setStats} setPuzzleState={setPuzzleState}/>}
                {puzzleState === 4 && <PuzzleCard index={4} item={puzzle1[4]} timer={timer} setStats={setStats} setPuzzleState={setPuzzleState}/>}
                {puzzleState === 5 && <PuzzleCard index={5} item={puzzle1[5]} timer={timer} setStats={setStats} setPuzzleState={setPuzzleState}/>}
                {puzzleState === 6 && <PuzzleCard index={6} item={puzzle1[6]} timer={timer} setStats={setStats} setPuzzleState={setPuzzleState}/>}
                {puzzleState === 7 && <PuzzleCard index={7} item={puzzle1[7]} timer={timer} setStats={setStats} setPuzzleState={setPuzzleState}/>}
                {puzzleState === 8 && <PuzzleCard index={8} item={puzzle1[8]} timer={timer} setStats={setStats} setPuzzleState={setPuzzleState}/>}
                {puzzleState === 9 && <PuzzleReport index={9} stats={stats}/>}
            </div>
        </div>
    </Layout>
  )
}

export default PuzzleOne