import React from 'react'

const LeaderBoard = ({records}) => {
  return (
    <div>
        <div className='grid grid-cols-12 bg-deepPurpleShade text-white py-2 pl-2'>
            <div className='col-span-1'>Rank</div>
            <div className='col-span-5'>User</div>
            <div className='col-span-2 md:text-left text-center'>Time (in sec)</div>
            <div className='col-span-2 md:text-left text-center'>Attempts</div>
            <div className='col-span-2 md:text-left text-center'>Score</div>
        </div>

        {records?.sort((a, b) => { return a.score > b.score }).map((record, index) => {
            return (
                <>
                {index % 2 === 0 ? <div key={index} className='grid grid-cols-12 bg-green-100 py-2 pl-2'>
                    <div className='col-span-1'># {index + 1}</div>
                    <div className='col-span-5'>{record.userID}</div>
                    <div className='col-span-2 md:text-left text-center'>{record.totalTime}</div>
                    <div className='col-span-2 md:text-left text-center'>{record.totalAttempts}</div>
                    <div className='col-span-2 md:text-left text-center'>{record.score}</div>
                </div> : <div key={index} className='grid grid-cols-12 bg-blue-100 py-2 pl-2'>
                <div className='col-span-1'># {index + 1}</div>
                    <div className='col-span-5'>{record.userID}</div>
                    <div className='col-span-2 md:text-left text-center'>{record.totalTime}</div>
                    <div className='col-span-2 md:text-left text-center'>{record.totalAttempts}</div>
                    <div className='col-span-2 md:text-left text-center'>{record.score}</div>
                </div>}
            </>
            )
        })}
    </div>
  )
}

export default LeaderBoard