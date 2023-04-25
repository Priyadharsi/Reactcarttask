import React from 'react'
import './Header.scss'
import logo from '../image/logo.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { AppBar  } from '@mui/material';
import Addtocart from '../Addtocart/Addtocart';

const Header = () => {

  return (
    <div> <div className='Header-section'>
    <div className='container'>
      <AppBar position='static'>
      <div className='heading'>
      <div className='header-logo'>
        <img src={logo}></img>
      </div>
      
      <div className='navbar'>
        <span><a href="Home">Home</a></span>
        <span><a href="Form">Form</a></span>
        <span><a href="Addtocart">Addtocart</a></span>
        {/* <span><a href="Addtocart">Addtocart</a></span> */}
        {/* <span><a href="Login">Login</a></span> */}
        <span><a href="Favourites">Favourites</a></span>
      </div>
      <div className='add-cart'>
         <AddShoppingCartIcon></AddShoppingCartIcon>  
      </div>
      </div>
      </AppBar>
      </div> 
    </div></div>
  )
}

export default Header