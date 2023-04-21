import React from 'react'
import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import RiddleCard from '../../components/RiddleCard'
import puzzle1 from '../../assets/images/puzzle_1/puzzle1.jpg'
import AddButton from '../../components/AddButton'
import { useNavigate } from 'react-router-dom'

const Puzzles = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/add-puzzle')
  }
  
  return (
    <Layout>
      <Heading title={"Puzzles"} subtitle={"Manage and create puzzles"} action={<AddButton onClick={handleClick} />}/>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-2'>
        <RiddleCard title={"Find the odd one..."} time={"2min"} level={"intermediate"} image={puzzle1} path={"/puzzles/1"}/>
      </div>
    </Layout>
  )
}

export default Puzzles