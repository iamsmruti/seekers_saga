import React, { useState, useEffect } from 'react'

import World from '@svg-maps/world';
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import { getContinentName } from '../../../../helpers/country/utils';
import CustomButton from '../../../../components/CustomButton';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const ContinentSelection = ({setHuntState, setStats, timer}) => {
  const [selectedContinent, setSelectedContinent] = useState('')
  const [hoveredContinent, setHoveredContinent] = useState('')
  const [attempts, setAttempts] = useState(1)

  localStorage.setItem('hunt_state', 0)

  const navigate = useNavigate()

  const handleSubmit = () => {
    setAttempts(Number(attempts) + 1)
    if(selectedContinent === 'Asia') {
      toast('You have gone 1 step Closer')
      setStats(current => [...current, {time: timer, attempts: attempts}])
      setHuntState(1)
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
    <div className='mt-2 px-5'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 border-[0.5px] border-black p-3'>
        <div className='w-[100%]'>
          <SVGMap 
            map={World} 
            onLocationMouseOver={(event) => {
              setHoveredContinent(getContinentName(event))
            }}
            onLocationClick={(event) => {
              setSelectedContinent(getContinentName(event))
            }}
          />

          <p className='mt-5'>Your mouse is on : {hoveredContinent}</p>
        </div>
        <div className='md:px-10 px-0 py-2 md:w-[600px]'>
          <p className='text-[24px] font-medium'>Before anything to look for, you need to know the continent... Right ?</p>
          <p>Find me...</p>
          <p className='text-pinkShade text-[24px] font-mono mt-20'>I cover nearly one-third of the Earth’s
            surface. I have the two most populous
            countries in the world.
            Which continent am I?</p>
          
          <p className='mt-[50px]'>click on the map to select any continent</p>
          <input value={selectedContinent} className='border-2 px-3 py-1 outline-none border-black w-[100%]' placeholder='write your answer'/>
          <div>
            <CustomButton onClick={handleSubmit} text={"Submit & Next"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContinentSelection