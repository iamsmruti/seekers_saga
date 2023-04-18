import React from 'react'

import World from '@svg-maps/world';
import { CheckboxSVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import { getContinentName, getLocationName } from '../../../../helpers/country/utils';

const ContinentSelection = ({setSelected, huntState}) => {
  return (
    <div className='grid grid-cols-2'>
      <div className=''>
        <CheckboxSVGMap 
          map={World} 
          onLocationMouseOver={(event) => {
            console.log(getLocationName(event))
            console.log(getContinentName(event))
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
      </div>
      <div></div>
    </div>
  )
}

export default ContinentSelection