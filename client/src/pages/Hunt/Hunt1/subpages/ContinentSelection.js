import React, { useState } from 'react'

import World from '@svg-maps/world';
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import { getContinentName, getLocationName } from '../../../../helpers/country/utils';
import CustomButton from '../../../../components/CustomButton';
import { toast } from 'react-toastify'

const ContinentSelection = ({setSelected, setHuntState}) => {
  const [selectedContinent, setSelectedContinent] = useState('')

  const handleSubmit = () => {
    if(selectedContinent === 'Asia') {
      toast('You have gone 1 step Closer')
      setHuntState(1)
    } else {
      toast('You are not right on this one! Try Again')
    }
  }

  return (
    <div className='mt-2 px-5'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 border-[0.5px] border-black p-3'>
        <div className='w-[100%]'>
          <SVGMap 
            map={World} 
            onLocationMouseOver={(event) => {
              console.log(getLocationName(event))
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

          <p className='mt-5'>Your mouse is on : {selectedContinent}</p>
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