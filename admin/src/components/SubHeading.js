import React from 'react'

const SubHeading = ({title, subtitle}) => {
  return (
    <div className='border-b-[0.5px] border-slate-300 w-[70%] flex justify-between items-center'>
        <div>
            <h1 className='text-[24px] font-semibold font-mono text-deepPurpleShade'>{title}</h1>
            <p className='text-[12px] mb-2 text-pinkShade'>{subtitle}</p>
        </div>
    </div>
  )
}

export default SubHeading