import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'

// Hunt States imports
import ContinentSelection from './subpages/ContinentSelection';
import CountrySelection from './subpages/CountrySelection';
import CapitalSelection from './subpages/CapitalSelection'
import CitySelection from './subpages/CitySelection';
import PlaceSelection from './subpages/PlaceSelection';
import FinalTreasure from './subpages/FinalTreasure';
import StopWatch from '../../../components/StopWatch';

const HuntOne = () => {
  const [huntState, setHuntState] = useState(0)
  const [selected, setSelected] = useState([])

  const [stats, setStats] = useState([])

  const [timer, setTimer] = useState(0)

  useEffect(() => {
    console.log(stats)
  }, [stats])

  useEffect(() => {
    if(huntState === 5){

    }
  }, [huntState])

  return (
    <Layout>
      <div className='md:p-5 p-3 flex items-center justify-between'>
        <div>
          <h1 className='text-[28px] font-semibold'>Treasure Hunt - Chapter 1</h1>
          <p>Solve the riddles to get to your treasure</p>
        </div>
        <div>
          {huntState !== 5 && <StopWatch setTimer={setTimer}/>}
        </div>
      </div>

      {huntState === 0 && <ContinentSelection timer={timer} stats={stats} setStats={setStats} setSelected={setSelected} setHuntState={setHuntState}/>}
      {huntState === 1 && <CountrySelection timer={timer} setStats={setStats} setHuntState={setHuntState}/>}
      {huntState === 2 && <CapitalSelection timer={timer} setStats={setStats} setHuntState={setHuntState}/>}
      {huntState === 3 && <CitySelection timer={timer} setStats={setStats} setHuntState={setHuntState}/>}
      {huntState === 4 && <PlaceSelection timer={timer} setStats={setStats} setHuntState={setHuntState}/>}
      {huntState === 5 && <FinalTreasure timer={timer} setStats={setStats} setHuntState={setHuntState}/>}
    </Layout>
  )
}

export default HuntOne