import logoDetailed from '../assets/images/logo_detail.png'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';

import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
  
      const navigate = useNavigate()
  return (
    <div className='w-[100%] md:h-[100px] h-[70px] flex justify-between items-center border-b-[0.5px] border-slate-300'>
        <div>
            <Link to="/">
                <img className='md:h-[80px] h-[50px]' src={logoDetailed}/>
            </Link>
        </div>

        <div className='flex items-center md:mr-5 mr-2'>
        <div className='ml-5'>
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img className='w-[50px] rounded-full' src='https://www.giantbomb.com/a/uploads/original/1/10354/2763938-nathandrake.jpg'/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={'top'}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={() => { 
                  localStorage.removeItem('admin_token')
                  navigate('/login')
                }}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
            </div>
        </div>
    </div>
  )
}

export default Navbar