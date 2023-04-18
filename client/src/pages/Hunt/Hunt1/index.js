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
      <div className='px-5 py-5'>
        <h1 className='text-[28px] font-semibold'>Treasure Hunt - Chapter 1</h1>
        <p>Solve the riddles to get to your treasure</p>
      </div>

      {huntState === 0 && <ContinentSelection setSelected={setSelected} setHuntState={setHuntState}/>}
      {huntState === 1 && <CountrySelection setHuntState={setHuntState}/>}
      {huntState === 2 && <CapitalSelection setHuntState={setHuntState}/>}
      {huntState === 3 && <CitySelection setHuntState={setHuntState}/>}
      {huntState === 4 && <PlaceSelection setHuntState={setHuntState}/>}
      {huntState === 5 && <FinalTreasure setHuntState={setHuntState}/>}
    </Layout>
  )
}

export default HuntOne