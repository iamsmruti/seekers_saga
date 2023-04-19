import React, { useState } from 'react'

import India from '@svg-maps/india';
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import { getLocationName } from '../../../../helpers/country/utils';
import CustomButton from '../../../../components/CustomButton';
import { toast } from 'react-toastify'

const CapitalSelection = ({setHuntState, setSelected}) => {
  const [selectedState, setSelectedState] = useState('')
  const [hoveredState, setHoveredState] = useState('')

  const handleSubmit = () => {
    if(selectedState === 'New Delhi' || selectedState === 'Delhi') {
      setHuntState(3)
      toast('You Got me !')
      toast('You are a great Hunter!')
    } else {
      toast('Wrong Answer! Try Again')
    }
  }

  return (
    <div className='mt-2 md:px-5 px-3'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 border-[0.5px] border-black p-3'>
        <div className='md:w-[600px] md:ml-[100px]'>
          <SVGMap 
            map={India} 
            onLocationMouseOver={(event) => {
              setHoveredState(getLocationName(event))
            }}
            onChange={(event) => {
              setSelected(prevState => {
                return {
                  ...prevState,
                  selectedLocations: event.map(node => node.attributes.name.value)
                };
              });
            }}
            onLocationClick={(event) => {
              setSelectedState(getLocationName(event))
            }}
          />

          <p className='mt-3'>Your mouse is on : </p>
          <p>State:  {hoveredState}</p>
        </div>
        <div className='md:px-10 py-2 md:w-[600px]'>
          <p className='text-[24px] font-medium'>You got this far ? I Bet this will be harder than you think ( or perhaps may be not .. LOL)</p>
          <p>Let's see...You need to look for the smallest ( thank me later ) </p>
          <p className='text-pinkShade text-[24px] font-mono mt-20'>I am a state, and I am responsible for every decisions of the country and represents the nation at the front. Who am I ? </p>
          
          <p className='mt-[50px]'>click on the map to select any state</p>
          <input value={selectedState} className='border-2 px-3 py-1 outline-none border-black w-[100%]' placeholder='write your answer'/>
          <div>
            <CustomButton onClick={handleSubmit} text={"Submit & Next"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CapitalSelection