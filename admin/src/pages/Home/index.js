import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import LineChartComponent from './charts/LineChartComponent'
import BarChartComponent from './charts/BarChartComponent'

import SubHeading from '../../components/SubHeading'
import SimpleBarChartComponent from './charts/SimpleBarChartComponent'
import SimpleBarChartComponent2 from './charts/SimpleBarChartComponent2'
import LeaderBoard from '../../components/LeaderBoard'

import axios from 'axios'
import { API } from '../../constants'

const Home = () => {
  const [puzzleRecords, setPuzzleRecords] = useState([])
  const [huntRecords, setHuntRecords] = useState([])

  useEffect(() => {
      axios.get(`${API}/leaderboard/Find the odd one...`).then((res) => {
          setPuzzleRecords(res.data)
      })

      axios.get(`${API}/leaderboard/Treasure Hunt - Chapter 1`).then((res) => {
        setHuntRecords(res.data)
    })
  }, [])

  return (
    <Layout>
      <Heading title={"Home"} subtitle={"Overview of all the stuffs"}/>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
        <div>
          <SubHeading title={"New Users"} subtitle={"Line graph showing no. of users v/s date"}/>
          <div className='md:h-[600px] h-[400px] md:pr-10 md:py-10 py-4 pr-3'>
            <LineChartComponent />
          </div>
        </div>

        <div>
          <SubHeading title={"Interaction Time"} subtitle={"Bar graph showing retention time v/s date for categories ( puzzle, hunt )"}/>
          <div className='md:h-[600px] h-[400px] md:pr-10 md:py-10 py-4 pr-3'>
            <BarChartComponent />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
        <div>
          <SubHeading title={"Puzzles"} subtitle={"Bar graph showing Avg Time ( in sec ) to complete each step"}/>
          <div className='md:h-[600px] h-[400px] md:pr-10 md:py-10 py-4 pr-3'>
            <SimpleBarChartComponent />
          </div>
        </div>

        <div>
          <SubHeading title={"Hunts"} subtitle={"Bar graph showing Avg Time ( in sec ) to complete each step"}/>
          <div className='md:h-[600px] h-[400px] md:pr-10 md:py-10 py-4 pr-3'>
            <SimpleBarChartComponent2 />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
        <div>
          <SubHeading title={"Leaderboard"} subtitle={"Users Scores in Puzzles"}/>
          <div className='md:h-[600px] h-[400px] md:pr-10 md:py-10 py-4 pr-3'>
            <LeaderBoard records={puzzleRecords}/>
          </div>
        </div>

        <div>
          <SubHeading title={"Leaderboard"} subtitle={"Users Scores in Hunts"}/>
          <div className='md:h-[600px] h-[400px] md:pr-10 md:py-10 py-4 pr-3'>
          <LeaderBoard records={huntRecords}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home