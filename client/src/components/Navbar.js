import React from 'react'
import logoDetailed from '../assets/images/logo_detail.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[100%] h-[100px] flex justify-between items-center border-b-[0.5px] border-slate-300'>
        <div>
            <Link to="/">
                <img className='h-[80px]' src={logoDetailed}/>
            </Link>
        </div>

        <div className='flex items-center mr-5'>
            <Link to='/puzzles'>
                <p className='text-xl font-semibold mr-6'>Puzzles</p>
            </Link>

            <Link to='/hunts'>
                <p className='text-xl font-semibold mr-6'>Hunts</p>
            </Link>

            <Link to='profile'>
                <img className='w-[50px] rounded-full' src='https://www.giantbomb.com/a/uploads/original/1/10354/2763938-nathandrake.jpg'/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar