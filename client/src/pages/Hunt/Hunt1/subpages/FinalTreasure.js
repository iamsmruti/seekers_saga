import React from 'react'
import CustomButton from '../../../../components/CustomButton'
import senku from '../../../../assets/images/hunt_1/senku.png'
import { useNavigate } from 'react-router-dom'

const FinalTreasure = () => {
  const navigate = useNavigate()
  localStorage.setItem('hunt_state', 5)
  const handleSubmit = () => {
    navigate('/hunts')
    localStorage.removeItem('hunt_state')
  }
  return (
    <div className='mt-2 px-5'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 border-[0.5px] border-black p-3'>
        <div className='w-[100%]'>
          <img src={senku}/>
        </div>
        <div className='md:px-10 px-0 py-2 md:w-[600px]'>
          <p className='text-[24px] font-medium'>Congratulations. You did it !</p>
          <p>You have reached the end of the quest.</p>
          <p className='text-pinkShade text-[24px] font-mono mt-10'>This link below has your treasure. Go ahead and recieve it.</p>
          <p className='mt-5 text-blue-500 underline'><a href='/treasure1.png' target='_blank'>Treasure</a></p>
          <p className='text-pinkShade text-[24px] font-mono mt-5'>You are happy with the treasure right ? Welcome</p>
          
          <div className='mt-5'>
            <CustomButton onClick={handleSubmit} text={"End the Quest"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinalTreasure