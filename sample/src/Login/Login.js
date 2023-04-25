import React, { useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { stateContext } from '../Context/stateContext';
import './Login.scss';

const Login = () => {
    const navigate = useNavigate();
    const {state,dispatch}=useContext(stateContext)
    console.log("state",state)

    const [username,setUsername]=useState("");
    const[userpswrd,setPswrd]=useState("");
    const[error,setError]=useState("");
    const User=require("../User.json");

    const handlesubmit=(e)=>{
        e.preventDefault();

      const user =User.find((user)=>user.username === username);
        if (username === "" || userpswrd === ""){
            setError("fill in this field");
        } else if (!user){
            setError("invslid username");
        } else if (user.userpswrd != userpswrd){
            setError("invalid password");
        } else{
            Home();
        }
    }
    const Home=()=>{
        navigate("/Home")
    }    
  return (
    <Box component="form" onSubmit={handlesubmit} className='formdetails'>
        <label className='labelbox'>Username :</label>
        <TextField className='textbox' id="outlined-basic" label="Outlined" variant='outlined' value={username} onChange={(e)=>setUsername(e.target.value)}/><br /><br/>
        <label className='labelbox'>Password :</label>
        <TextField className='textbox' id="outlined-password-input" label="Password" variant='outlined' value={userpswrd} onChange={(e)=>setPswrd(e.target.value)}/><br /><br/>
        {/* <input type="checkbox" checked={checked} onChange={(e)=>setChecked(e.target.checked)}/> */}
        <Button className='textbox' type="submit" variant='contained' onClick={()=>{localStorage.setItem("isLoggedIn",JSON.stringify(true));
        dispatch({type:"LOGIN",payload:true})}}>Submit</Button>
        {error && <div>{error}</div>}
    </Box>
  )
}

export default Login