import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// SVG Maps
import World from '@svg-maps/world';
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

// Helpers & Components
import { getContinentName, getLocationName } from '../../../../helpers/country/utils';
import CustomButton from '../../../../components/CustomButton';

const CountrySelection = ({ setHuntState, setStats, timer }) => {
  const navigate = useNavigate()

  // Saves the state of Hunt
  localStorage.setItem('hunt_state', 1)
  
  const [hoveredContinent, setHoveredContinent] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [hoveredCountry, setHoveredCountry] = useState('')
  const [attempts, setAttempts] = useState(1)

  // Checks the answer and move forward  
  const handleSubmit = () => {
    setAttempts(attempts + 1)
    if(selectedCountry === 'India') {
      setHuntState(2)
      toast('You are Right')
      setStats(current => [...current, {time: timer, attempts: attempts}])
      toast('You are a great Hunter!')
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
              setHoveredCountry(getLocationName(event))
              setHoveredContinent(getContinentName(event))
            }}
            onLocationClick={(event) => {
              setSelectedCountry(getLocationName(event))
            }}
          />

          <p className='mt-2'>Your mouse is on : </p>
          <p>Country:  {hoveredCountry}</p>
          <p>Continent: {hoveredContinent}</p>
        </div>
        <div className='md:px-10  py-2 md:w-[600px]'>
          <p className='text-[24px] font-medium'>Fine! You got me, Now I dare you to find the Country...</p>
          <p>Find it...</p>
          <p className='text-pinkShade text-[24px] font-mono mt-20'>I am a crowded country with vivid religions and a lot of languages. I am very much known for my colourful festivals. Who am I ?</p>
          
          <p className='mt-[50px]'>click on the map to select any country</p>
          <input value={selectedCountry} className='border-2 px-3 py-1 outline-none border-black w-[100%]' placeholder='write your answer'/>
          <div>
            <CustomButton onClick={handleSubmit} text={"Submit & Next"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountrySelection