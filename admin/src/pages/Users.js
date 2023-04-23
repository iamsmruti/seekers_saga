import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { API } from '../constants'

// Component Imports
import UserCard from '../components/UserCard'
import Layout from '../components/Layout'
import Heading from '../components/Heading'


const Users = () => {
  const [users, setUsers] = useState([])

  // Fetches all the users
  useEffect(() => {
    axios.get(`${API}/user/all`, {
      headers: {
        token: localStorage.getItem('admin_token')
      }
    }).then((res) => {
      setUsers(res.data)
    }).catch((err) => {
      toast()
    })
  }, [])

  return (
    <Layout>
      <Heading title={"Users"} subtitle={"Manage Roles of Users"}/>

      <div className='mt-5'>
        {users.map((user) => (
          <UserCard user={user}/>
        ))}
      </div>
    </Layout>
  )
}

export default Users