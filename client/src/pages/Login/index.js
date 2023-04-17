import React, { useState } from 'react'

import LoginSection from './LoginSection/LoginSection'
import RegisterSection from './RegisterSection/RegisterSection'

import logoDetailed from '../../assets/images/logo_detail.png'

const Login = () => {
  const [modalState, setModalState] = useState('login')

  return (
    <div className='login flex justify-center items-center'>
      <div className='bg-white p-4 md:w-[450px] w-[300px]'>

        {/* Header Logo */}
        <div className='flex justify-center'>
          <img className='h-[100px] mb-8' src={logoDetailed}/>
        </div>

        {/* Toggle Buttons */}
        <div className='flex border-b-[0.5px] border-slate-300 pb-1'>
          {modalState === 'login' ? 
            <p className='cursor-pointer bg-deepPurpleShade text-white px-3 py-1' onClick={() => setModalState('login')}>Login</p> : 
            <p className='cursor-pointer px-3 py-1' onClick={() => setModalState('login')}>Login</p>}

          {modalState === 'register' ? 
            <p className='cursor-pointer bg-deepPurpleShade text-white px-3 py-1' onClick={() => setModalState('register')}>Register</p> : 
            <p className='cursor-pointer px-3 py-1' onClick={() => setModalState('register')}>Register</p>}
        </div>

        {modalState === 'login' && <div className='py-3'>
          <LoginSection setModalState={setModalState}/>
        </div>}

        {modalState === 'register' && <div className='py-3'>
          <RegisterSection setModalState={setModalState}/>
        </div>}
      </div>
    </div>
  )
}

export default Login