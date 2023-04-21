import React from 'react'

const ReportComponent = ({speed, accuracy, intellectual}) => {
  return (
    <div className='mt-5 bg-greenShade p-2'>
        <p className='text-[24px] font-semibold text-deepPurpleShade'>Performance Report</p>

        <div className='grid grid-cols-3 mt-2'>
            <Widget item={speed} title={"speed"} />
            <Widget item={accuracy} title={"accuracy"} />
            <Widget item={intellectual} title={"intellectual"} />
        </div>

        <div className='mt-4'>
            <p><span className='font-bold'>Total Time :</span> {speed.timeTaken} sec</p>
            <p><span className='font-bold'>Total Attempts :</span> {accuracy.attemptsTaken}</p>
            <p><span className='font-bold'>Intellectual Score :</span> {intellectual.score}</p>
        </div>
    </div>
  )
}

export default ReportComponent

const Widget = ({item, title}) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='md:w-[100px] md:h-[100px] w-[70px] h-[70px] bg-white rounded-full border-darkGreenShade md:border-4 border-2 flex justify-center items-center'>
                <p className='text-[32px] font-bold text-darkGreenShade'>{item.grade}</p>
            </div>
            <p className='mt-2 md:text-[16px] text-[12px]'>{item.remark}</p>
            <p className='font-bold text-[12px]'>({title})</p>
        </div>
    )
}