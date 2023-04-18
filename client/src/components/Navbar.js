import React from 'react'
import logoDetailed from '../assets/images/logo_detail.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[100%] md:h-[100px] h-[70px] flex justify-between items-center border-b-[0.5px] border-slate-300'>
        <div>
            <Link to="/">
                <img className='md:h-[80px] h-[50px]' src={logoDetailed}/>
            </Link>
        </div>

        <div className='flex items-center md:mr-5 mr-2'>
            <Link to='/puzzles'>
                <p className='md:text-xl text-sm font-semibold md:mr-6 mr-3'>Puzzles</p>
            </Link>

            <Link to='/hunts'>
                <p className='md:text-xl text-sm font-semibold md:mr-6 mr-3'>Hunts</p>
            </Link>

            <Link to='/profile'>
                <img className='w-[50px] rounded-full' src='https://www.giantbomb.com/a/uploads/original/1/10354/2763938-nathandrake.jpg'/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar