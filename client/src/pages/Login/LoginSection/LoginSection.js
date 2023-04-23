import React, { useState } from 'react'
import CustomButton from '../../../components/CustomButton'

import axios from 'axios'
import { API } from '../../../constants'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const LoginSection = ({setModalState}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const customInput = {
    border: '1px solid #507A37',
    outline: 'none',
    width: '100%',
    padding: '0.5rem 1rem',
    background: '#caf4b0',
    color: '#507A37'
  }

  const handleSubmit = () => {
    axios.post(`${API}/auth/login`, {
        email: email.toLowerCase().trim(),
        password: password.toLowerCase().trim()
    }).then((res) => {
        console.log(res)

        if(res.data.error){
            toast(res.data.error)
        } else if (res.error) {
            toast(res.error.message)
        } else{ 
            localStorage.setItem('token', res.data)
            toast("Successfully Logged in!")
            navigate('/')
        }
    }).catch((err) => {
        console.log(err)
        toast(err.message)
    })
  };

  return (
    <div>
      <p>Email</p>
      <input onChange={(e) => setEmail(e.target.value)} style={customInput} placeholder='example@gmail.com'/>

      <p className='mt-5'>Password</p>
      <input onChange={(e) => setPassword(e.target.value)} type='password' style={customInput} placeholder='********'/>

      <CustomButton text={"Submit"} onClick={handleSubmit}/>

      <p className='text-center my-1'>or</p>

      <p className='text-[12px] mt-5 text-center'>
          Dont't have an account ?
          <span onClick={() => setModalState('register')} className='text-blue-600 ml-2 cursor-pointer'>
              Register
          </span>
      </p>

      <p className='text-[12px] mt-1 text-center'>
          Are you an Admin ?
          <a href='https://seekers-admin.vercel.app/' target='_blank' className='text-blue-600 ml-2 cursor-pointer'>
              Go Here instead
          </a>
      </p>
    </div>
  )
}

export default LoginSection