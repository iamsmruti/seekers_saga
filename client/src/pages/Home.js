import React from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <div className='h-[calc(100vh-100px)] grid grid-cols-1 md:grid-cols-2'>
        <div onClick={() => navigate('/puzzles')} className='puzzle cursor-pointer min-h-[800px]'>
          <div className='w-[100%] h-[100%] bg-black opacity-70 hover:opacity-50 md:px-[50px] px-[10px] flex flex-col items-center'>
            <h1 style={{fontFamily: 'Blaka Hollow'}} className='text-blueShade md:text-[100px] text-[60px]'>Become the next Sherlock...</h1>

            <div className='text-black bg-greenShade md:px-[50px] px-[20px] py-[25px] text-2xl mt-auto mb-[50px]'>
              Solve Puzzles
            </div>
          </div>
        </div>
        <div onClick={() => navigate('/hunts')} className='hunt cursor-pointer min-h-[800px]'>
          <div className='w-[100%] h-[100%] bg-black opacity-70 hover:opacity-50 md:px-[50px] px-[10px] flex flex-col items-center'>
            <h1 style={{fontFamily: 'Blaka Hollow'}} className='text-blueShade md:text-[100px] text-[60px]'>Become the next Captain...</h1>
            <div className='text-black bg-greenShade md:px-[50px] px-[20px] py-[25px] text-2xl mt-auto mb-[50px]'>
              Hunt Treasure
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home