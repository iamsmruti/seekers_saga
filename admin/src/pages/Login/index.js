import React from 'react'

import LoginSection from './LoginSection/LoginSection'

// Assets
import logoDetailed from '../../assets/images/logo_detail.png'

const Login = () => {
  return (
    <div className='login flex justify-center items-center'>
      <div className='bg-white p-4 md:w-[450px] w-[95%]'>

        {/* Header Logo */}
        <div className='flex justify-center'>
          <img className='h-[100px] mb-8' src={logoDetailed}/>
        </div>

        <div className='flex items-center'>
          <p className='text-[24px] font-semibold'>Login</p>
          <span className='text-[12px] bg-black text-white px-2 py-1 ml-2'>admin</span>
        </div>

        <LoginSection />
      </div>
    </div>
  )
}

export default Login