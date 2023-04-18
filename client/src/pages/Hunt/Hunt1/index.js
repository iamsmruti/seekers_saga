import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'

// Hunt States imports
import ContinentSelection from './subpages/ContinentSelection';
import CountrySelection from './subpages/CountrySelection';
import CapitalSelection from './subpages/CapitalSelection'
import CitySelection from './subpages/CitySelection';
import PlaceSelection from './subpages/PlaceSelection';
import FinalTreasure from './subpages/FinalTreasure';

const HuntOne = () => {
  const [huntState, setHuntState] = useState(0)
  const [selected, setSelected] = useState([])

  return (
    <Layout>
      {huntState === 0 && <ContinentSelection setSelected={setSelected} huntState={huntState}/>}
      {huntState === 1 && <CountrySelection huntState={huntState}/>}
      {huntState === 2 && <CapitalSelection huntState={huntState}/>}
      {huntState === 3 && <CitySelection huntState={huntState}/>}
      {huntState === 4 && <PlaceSelection huntState={huntState}/>}
      {huntState === 5 && <FinalTreasure huntState={huntState}/>}
    </Layout>
  )
}

export default HuntOne