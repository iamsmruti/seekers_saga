import React from 'react'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const RiddleCard = ({title, time, level, image, path}) => {
  return (
    <div className='flex flex-col m-2 relative w-fit border-[1px] pb-4'>
        <Link to={path}>
          <div className='w-[450px] relative'>
              <img className='' src={image}/>
          </div>
        </Link>
        <div className='flex justify-end pr-10 mt-[-25px] z-10'>
          <Link to={path}>
            <div className='bg-white rounded-full p-1'>
              <BsFillPlayCircleFill className='text-[50px] text-pinkShade'/>
            </div>
          </Link>
        </div>
        <div className='mt-[-25px] pt-2 pl-5'>
          <Link to={path}>
            <p className='text-[24px] font-semibold underline w-fit mb-2'>{title}</p>
          </Link>
            <p className='text-[18px]'><span className='font-semibold'>Total Time:</span> {time}</p>
            <p className='text-[18px]'><span className='font-semibold'>Level:</span> {level}</p>
        </div>
    </div>
  )
}

export default RiddleCard