import React from 'react'

import MenuItem from './MenuItem'
import { AiTwotoneHome } from 'react-icons/ai'
import { GiPlanetConquest, GiPuzzle } from 'react-icons/gi'
import { ImUsers } from 'react-icons/im'
import { CgProfile } from 'react-icons/cg'


const Sidebar = () => {
  const menuItems = [
    {
      title: 'Home',
      path: '/',
      icon: <AiTwotoneHome />
    },
    {
      title: 'Hunts',
      path: '/hunts',
      icon: <GiPlanetConquest />
    },
    {
      title: 'Puzzles',
      path: '/puzzles',
      icon: <GiPuzzle />
    },
    {
      title: 'Users',
      path: '/users',
      icon: <ImUsers />
    }
  ]
  return (
    <div>
      {menuItems.map((item, index) => {
        return (
          <MenuItem key={index} item={item}/>
        )
      })}
    </div>
  )
}

export default Sidebar