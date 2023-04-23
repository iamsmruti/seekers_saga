import React from 'react'
import Layout from '../../components/Layout'
import RiddleCard from '../../components/RiddleCard'

const Hunt = () => {
  return (
    <Layout>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:m-10 m-2'>
        <RiddleCard title={"Treasure Hunt - Chapter 1"} time={"unlimited"} level={"intermediate"} image={"https://images.squarespace-cdn.com/content/v1/532b3fbfe4b0c5a9ade0bc44/1397499480045-6LXKJ4CAJOX4O5LK9I2A/Treasurehuntgame1.jpg?format=1000w"} path={"/hunts/1"} leaderboard={"Treasure Hunt - Chapter 1"}/>
      </div>
    </Layout>
  )
}

export default Hunt