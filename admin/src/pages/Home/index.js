import React from 'react'
import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import LineChartComponent from './charts/LineChartComponent'
import BarChartComponent from './charts/BarChartComponent'

import SubHeading from '../../components/SubHeading'

const Home = () => {
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

      <div className='min-h-[500px]'>
        <SubHeading title={"Recent Activity"} subtitle={"Activity can be anything from register to playing a game."}/>
      </div>
    </Layout>
  )
}

export default Home