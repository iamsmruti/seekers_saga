import React from 'react'

const CustomButton = ({onClick, text}) => {
  return (
    <button className='bg-deepPurpleShade text-white py-2 px-5 w-[100%] my-5' onClick={onClick}>
        {text}
    </button>
  )
}

export default CustomButton