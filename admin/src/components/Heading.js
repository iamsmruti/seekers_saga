import React from 'react'

const Heading = ({title, subtitle, action}) => {
  return (
    <div className='border-b-[0.5px] border-slate-300 w-[100%] flex justify-between items-center'>
        <div>
            <h1 className='text-[32px] font-semibold font-mono text-deepPurpleShade'>{title}</h1>
            <p className='text-[14px] mb-2 text-pinkShade'>{subtitle}</p>
        </div>

        {action !== null && action}
    </div>
  )
}

export default Heading