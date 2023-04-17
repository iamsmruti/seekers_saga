import React from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <div className='h-[calc(100vh-100px)] grid grid-cols-1 md:grid-cols-2'>
        <div onClick={() => navigate('/puzzles')} className='puzzle cursor-pointer'>
          <div className='w-[100%] h-[100%] bg-black opacity-70 hover:opacity-50 px-[50px] flex flex-col items-center'>
            <h1 style={{fontFamily: 'Blaka Hollow'}} className='text-blueShade text-[100px]'>Become the next Sherlock...</h1>

            <div className='text-black bg-greenShade px-[50px] py-[25px] text-2xl mt-auto mb-[50px]'>
              Solve Puzzles
            </div>
          </div>
        </div>
        <div onClick={() => navigate('/hunts')} className='hunt cursor-pointer'>
          <div className='w-[100%] h-[100%] bg-black opacity-70 hover:opacity-50 px-[50px] flex flex-col items-center'>
            <h1 style={{fontFamily: 'Blaka Hollow'}} className='text-blueShade text-[100px]'>Become the next Captain...</h1>
            <div className='text-black bg-greenShade px-[50px] py-[25px] text-2xl mt-auto mb-[50px]'>
              Hunt Treasure
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home