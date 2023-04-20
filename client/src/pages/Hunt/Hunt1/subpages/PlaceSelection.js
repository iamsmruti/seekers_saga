import React, { useState } from 'react'
import CustomButton from '../../../../components/CustomButton'
import CustomButton2 from '../../../../components/CustomButton2'
import Manali from '../../../../assets/images/hunt_1/manali.png'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const PlaceSelection = ({setHuntState, setStats, timer}) => {
  const [answer, setAnswer] = useState('')
  const [attempts, setAttempts] = useState(1)

  localStorage.setItem('hunt_state', 4)

  const navigate = useNavigate()

  const handleSubmit = () => {
    setAttempts(attempts + 1)
    if(answer === 'Under the river that is flowing beside him.') {
      setHuntState(5)
      setStats(current => [...current, {time: timer, attempts: attempts}])
      toast('You have found the treasure!')
    } else {
      if(attempts === 1)
        toast('Wrong Answer! You have one more attempt')
      else if (attempts === 2){
        toast('Wrong Answer! You have reached a dead end... Start Again.')
        navigate('/hunts')
      }
    }
  }

  const handleClick = (index) => {
    if(index === 1){
      setAnswer('Under the rock where he is sitting')
    } else if(index === 2){
      setAnswer('Under the rock that is on the other side of river')
    } else if(index === 3){
      setAnswer('Under the river that is flowing beside him.')
    } else if(index === 4){
      setAnswer('Under the tree that is behind him.')
    }
  }
  return (
    <div className='mt-2 px-5'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 border-[0.5px] border-black p-3'>
        <div className='w-[100%]'>
          <img src={Manali}/>
        </div>
        <div className='md:px-10 px-0 py-2 md:w-[600px]'>
          <p className='text-[24px] font-medium'>Ahh! Come on man. Okay the man u see with the white jacket has hide his treasure somewhere near the place where the photo was taken</p>
          <p>You have 2 guesses to guess the place...</p>
          <p className='text-pinkShade text-[24px] font-mono mt-10'>Is it under the river, or under the rock where he is sitting, or where is it ?</p>
          
          <p className='mt-[20px]'>Select any option :</p>
          <div className='mt-[-10px]'>
            <div className='grid grid-cols-2 gap-5'>
              <CustomButton2 onClick={() => handleClick(1)} text={"Under the rock where he is sitting"}/>
              <CustomButton2 onClick={() => handleClick(2)} text={"Under the rock that is on the other side of river"}/>
            </div>
            <div className='mt-[-20px]'>
              <div className='grid grid-cols-2 gap-5'>
                <CustomButton2 onClick={() => handleClick(3)} text={"Under the river that is flowing beside him."}/>
                <CustomButton2 onClick={() => handleClick(4)} text={"Under the tree that is behind him."}/>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <input value={answer} className='border-2 px-3 py-1 outline-none border-black w-[100%]' placeholder='click any option autocomplete answer'/>
            <CustomButton onClick={handleSubmit} text={"Submit & Next"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceSelection