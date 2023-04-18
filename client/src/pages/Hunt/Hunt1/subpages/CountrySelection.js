import React, { useState } from 'react'

import World from '@svg-maps/world';
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import { getContinentName, getLocationName } from '../../../../helpers/country/utils';
import CustomButton from '../../../../components/CustomButton';
import { toast } from 'react-toastify'

const CountrySelection = ({setSelected, setHuntState}) => {
  const [selectedContinent, setSelectedContinent] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')

  const handleSubmit = () => {
    if(selectedCountry === 'India') {
      setHuntState(2)
      toast('You are Right')
      toast('You are a great Hunter!')
    } else {
      toast('Wrong Answer! Try Again')
    }
  }

  return (
    <div className='mt-2 px-5'>
      <div className='grid grid-cols-2 gap-5 border-[0.5px] border-black p-3'>
        <div className='w-[100%]'>
          <SVGMap 
            map={World} 
            onLocationMouseOver={(event) => {
              setSelectedCountry(getLocationName(event))
              setSelectedContinent(getContinentName(event))
            }}
            onChange={(event) => {
              setSelected(prevState => {
                return {
                  ...prevState,
                  selectedLocations: event.map(node => node.attributes.name.value)
                };
              });
            }}
          />

          <p>Your mouse is on : </p>
          <p>Country:  {selectedCountry}</p>
          <p>Continent: {selectedContinent}</p>
        </div>
        <div className='px-10 py-2 w-[600px]'>
          <p className='text-[24px] font-medium'>Fine! You got me, Now I dare you to find the Country...</p>
          <p>Find it...</p>
          <p className='text-pinkShade text-[24px] font-mono mt-20'>I am a crowded country with vivid religions and a lot of languages. I am very much known for my colourful festivals. Who am I ?</p>
          
          <p className='mt-[50px]'>click on the map to select any continent</p>
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