import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const MenuItem = ({item}) => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <>
        {location.pathname === item.path 
            ? <div onClick={() => navigate(item.path)} className='text-lg flex justify-start md:pl-[30px] pl-3 border-l-4 border-pinkShade items-center py-4 cursor-pointer'>
                <div className='text-2xl'>{item.icon}</div> 
                <p className='ml-3 md:block hidden'>{item.title}</p>
            </div> 
            : <div onClick={() => navigate(item.path)} className='text-lg flex justify-start md:pl-[30px] pl-3 items-center py-4 cursor-pointer'>
                <div className='text-2xl'>{item.icon}</div> 
                <p className='ml-3 md:block hidden'>{item.title}</p>
            </div>}
        </>
    )
}

export default MenuItem