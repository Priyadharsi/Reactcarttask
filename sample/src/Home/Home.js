import React, { useState } from 'react';
import { useContext } from 'react';
import { stateContext } from '../Context/stateContext';
import './Home.scss';
import logo from '../image/logo.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { AppBar, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import img1 from '../image/img1.jpg';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';




// const Home = () => {
//   // const {state,dispatch}=useContext(stateContext);
//   // console.log("state",state);
//   // const navigate=useNavigate();
//   const productlist=JSON.parse(localStorage.getItem("productlist"))
  const Home=()=>{
    const productlist=JSON.parse(localStorage.getItem("productlist"));
    const[productItems,setItems]=useState(productlist);
    const[addToCart,setCart]=useState([]);
    
    const addCart=(id)=>{
       let finddata=addToCart.find((item)=>{
          return item.id ===id;
      });
      console.log(finddata)
     if(finddata){
          let updatecartitem = addToCart.map((item)=>{
              if(item.id === id){
                if(item.quantity<=item.stock){
                  item.quantity +=1;
                  return item;
                }else{
                  alert("out of stock")
                  return item;
                }
              }else{
                 
                  return item;
              }
          });
          
          setCart(updatecartitem);
          //  console.log(addToCart)
          }else{
         let newitem = productItems.find((item)=>{
             return  item.id === id;
         });
          newitem.quantity = 1;
          setCart([...addToCart,newitem]);
         }
         alert("Product Added to Cart")
      };
    localStorage.setItem("cartItem",JSON.stringify(addToCart))

    const deleteitem = (id) => {
      setItems(()=>productItems.filter((item)=>item.id!= id))
      console.log(productItems)
      
    };
    localStorage.setItem('productList', JSON.stringify(productItems));

    // const navigate=useNavigate()
    // const Addtocart=()=>{
    //   navigate("/Addtocart")
    // }
    const navigate=useNavigate()
    const toproductdetails=()=>{
      navigate("/Productdetails");
    }
  const[Productdetails,setdetails]=useState("")
  const Productdetail=(item)=>{
    setdetails(item);
    if(Productdetails !=""){
    // console.log("product",productDetails)
    localStorage.setItem('Productdetails', JSON.stringify(Productdetails));
    toproductdetails();
    }

  };

  return (
      <div>
      <div className='image-section'>
            <Grid container spacing ={2}>
              {productItems?.map((item,index)=> <Grid key={index} item xs={4}>
                  <div className='img-dis'>
                    <img src={img1} alt="productimg" onClick={()=>Productdetail(item)}/>
                    <div className='img-con'> 
                      <h4>{item.prodname}{item.id}</h4>
                      <h5>{item.descr}</h5> 
                     <p>Price:${item.prices}</p> 
                     <div className='pro-icons'>
                        <AddShoppingCartIcon onClick={()=>addCart(item.id) }/>
                        <DeleteIcon onClick={()=>deleteitem(item.id)}/>
                      </div> 
                       </div>
                </div>
             </Grid>
             )}
            </Grid>
            {/* <Link to={"/Form"} >Go To Form</Link> */}
          </div>
        </div>
      
  )
}

export default Home




















