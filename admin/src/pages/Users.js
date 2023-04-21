import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Heading from '../components/Heading'
import axios from 'axios'

import { API } from '../constants'
import UserCard from '../components/UserCard'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(`${API}/user/all`, {
      headers: {
        token: localStorage.getItem('admin_token')
      }
    }).then((res) => {
      console.log(res.data)
      setUsers(res.data)
    }).catch((err) => {
      console.log(err)
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