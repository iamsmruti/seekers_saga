import React from 'react'
import { useNavigate } from 'react-router-dom'

import Layout from '../../components/Layout'
import Heading from '../../components/Heading'
import RiddleCard from '../../components/RiddleCard'
import AddButton from '../../components/AddButton'


const Hunts = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/add-hunt')
  }
  
  return (
    <Layout>
      <Heading title={"Hunts"} subtitle={"Manage and create Treasure Hunts"} action={<AddButton onClick={handleClick} />}/>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-2'>
        <RiddleCard title={"Treasure Hunt - Chapter 1"} time={"2min"} level={"intermediate"} image={"https://images.squarespace-cdn.com/content/v1/532b3fbfe4b0c5a9ade0bc44/1397499480045-6LXKJ4CAJOX4O5LK9I2A/Treasurehuntgame1.jpg?format=1000w"} path={"/hunts/1"}/>
      </div>
    </Layout>
  )
}

export default Hunts