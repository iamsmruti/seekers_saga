import React from 'react'

// GLobal Components
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <div className='h-[calc(100vh-100px)] flex'>
          <div className='md:w-[200px] w-[50px] border-r-[0.5px] border-slate-300'>
            <Sidebar />
          </div>
          <div className='md:p-5 p-2 w-[100%] overflow-scroll'>{children}</div>
        </div>
    </>
  )
}

export default Layout