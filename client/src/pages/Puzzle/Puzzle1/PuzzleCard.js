import React, { useEffect } from 'react'
import ImageMap from './ImageMap'

const PuzzleCard = ({item, timer, setStats, index, setPuzzleState}) => {
  localStorage.setItem('puzzle_state', index)

  return (
    <div className='w-fit'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='border-2 w-fit m-3 md:m-0'>
                <ImageMap item={item} timer={timer} setStats={setStats} setPuzzleState={setPuzzleState}/>
            </div>
            
            <div className='flex flex-col m-3 md:m-0'>
                <p className='font-semibold text-[28px]'>Did you figure out ?</p>
            </div>
        </div>
    </div>
  )
}

export default PuzzleCard