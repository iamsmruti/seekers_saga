import React from 'react'

const CustomButton2 = ({onClick, text}) => {
  return (
    <button className='bg-greenShade text-black py-2 px-5 w-[100%] my-5 border-4 border-darkGreenShade' onClick={onClick}>
        {text}
    </button>
  )
}

export default CustomButton2