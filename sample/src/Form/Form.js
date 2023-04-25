import React, {useState,useContext,useEffect} from 'react'
import { Button , TextField } from '@mui/material'
import { stateContext } from '../Context/stateContext';
import { useNavigate } from 'react-router-dom';
import './Form.scss'

const Form = () => {
  const {state,dispatch}=useContext(stateContext)
  console.log("state",state)
  const navigate=useNavigate();
    const [productname,setproname]=useState("");
    const [productdesp,setprodesp]=useState("");
    const [price,setprice]=useState("");
    const[stock,setstock]=useState("");
    const[productlist,setproductlist]=useState(JSON.parse(localStorage.getItem("productlist"))|| []);

   
    const handlesubmit=(e)=> {
        e.preventDefault();
           setproductlist([...productlist,{id:Math.floor(Math.random()*10),prodname:productname,descr:productdesp,prices:price,stocks:stock}]);
           console.log(productlist);
    }
    localStorage.setItem("productlist",JSON.stringify(productlist));
    
    const Home=()=>{
      navigate("/Home")
    }

  return (
    <div>
        <form onSubmit={handlesubmit} className='formsec'>
            <TextField id="outlined-basic" label="Productname" type='text' variant='outlined' onChange={(e)=>setproname(e.target.value)}/><br /><br />
            <TextField  id="outlined-basic" label="Productdecription" type='text' variant='outlined' onChange={(e)=>setprodesp(e.target.value)}/><br /><br />
            <TextField id="outlined-basic" label="Price" variant='outlined' type='number' onChange={(e)=>setprice(e.target.value)}/><br /><br />
            <TextField id="outlined-basic" label="stock" variant='outlined' type='number' onChange={(e)=>setstock(e.target.value)}/><br /><br />
            <Button variant="contained" type='submit'>AddProduct</Button>
            </form>
    </div>
  )
}

export default Form