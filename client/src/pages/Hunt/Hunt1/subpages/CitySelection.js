import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import DelhiMap from '../../../../assets/images/hunt_1/delhi_map.png'
import CustomButton from '../../../../components/CustomButton'

const CitySelection = ({setHuntState, setStats, timer}) => {
  const navigate = useNavigate()

  const [city, setCity] = useState('')
  const [attempts, setAttempts] = useState(1)

  // Saves the state of hunt
  localStorage.setItem('hunt_state', 3)

  // Checks the answer and move forward
  const handleSubmit = () => {
    setAttempts(attempts + 1)
    if(city === 'Manali' || city === 'manali') {
      setHuntState(4)
      setStats(current => [...current, {time: timer, attempts: attempts}])
      toast('Well, you reached the last step. Congo !')
    } else {
      if(attempts === 1)
        toast('Wrong Answer! You have one more attempt')
      else if (attempts === 2){
        toast('Wrong Answer! You have reached a dead end... Start Again.')
        
        navigate('/hunts')
      }
    }
  }

  return (
    <div className='mt-2 md:px-5 px-3'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 border-[0.5px] border-black p-3'>
        <div className='md:w-[600px] md:ml-[100px]'>
          <img src={DelhiMap}/>
        </div>
        <div className='md:px-10 py-2 md:w-[600px]'>
          <p className='text-[24px] font-medium'>OMG! You are a True Hunter I see. But this is the end to your journey.</p>
          <p>Let's see...You will need some hints btw. </p>
          <p className='text-pinkShade text-[24px] font-mono mt-10'>I am a town in the north, and I have a lot of valleys and mountains. My name consists of 6 Letters. Who am I ? </p>
          <p className='mt-10 text-blue-500'><a href='https://www.instagram.com/__iamsmruti/' target="_blank">https://www.instagram.com/__iamsmruti/</a></p>
          <p className='text-pinkShade text-[24px] font-mono'>I can give you a hint. This person in the instagram account once came to my town wearing a white jacket and white shoes.</p>
          
          <p className='mt-[50px]'>Did you solve it ?</p>
          <input onChange={(e) => setCity(e.target.value)} className='border-2 px-3 py-1 outline-none border-black w-[100%]' placeholder='write your answer'/>
          <div>
            <CustomButton onClick={handleSubmit} text={"Submit & Next"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CitySelection