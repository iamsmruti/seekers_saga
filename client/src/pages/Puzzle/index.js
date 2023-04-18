import React from 'react'
import Layout from '../../components/Layout'
import RiddleCard from '../../components/RiddleCard'

import puzzle1 from '../../assets/images/puzzle_1/puzzle1.jpg'

const Puzzle = () => {
  return (
    <Layout>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:m-10 m-2'>
        <RiddleCard title={"Find the odd one..."} time={"2min"} level={"intermediate"} image={puzzle1} path={"/puzzles/1"}/>
      </div>
    </Layout>
  )
}

export default Puzzle