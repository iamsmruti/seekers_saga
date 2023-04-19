import React from 'react'

const AddButton = ({onClick}) => {
  return (
    <div onClick={onClick} className='bg-pinkShade w-[40px] h-[40px] rounded-full flex justify-center items-center text-[32px] mr-5 cursor-pointer'>
      <p className='mt-[-4px] text-white'>+</p>
    </div>
  )
}

export default AddButton