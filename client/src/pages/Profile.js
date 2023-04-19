import React from 'react'
import Layout from '../components/Layout'

const Profile = () => {
  return (
    <Layout>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[700px]'>
        <div>
          <img className='w-[200px] ml-auto md:mt-10 mt-5' src='https://api.multiavatar.com/Binx Bond.png'/>
        </div>
        <div className='md:mt-10 mt-5 ml-10 text-[16px]'>
          <p className=''><span className='font-semibold'>Name:</span> Smruti Ranjan Badatya</p>
          <p className=''><span className='font-semibold'>Email:</span> smrutiranjanbadatya2@gmail.com</p>
        </div>
      </div>
    </Layout>
  )
}

export default Profile