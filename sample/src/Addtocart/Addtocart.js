import React, { useState } from 'react'
import './Addtocart.scss';
import Grid from '@mui/material/Grid';
import img1 from '../image/img1.jpg';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ShareIcon from '@mui/icons-material/Share';
// import AddCircleIcon from '@mui/icons-material/AddShoppingCart';
// import RemoveCircleIcon from '@mui/icons-material/AddShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import DeleteIcon from '@mui/icons-material/AddShoppingCart';





const Addtocart = () => {
    const cartproduct=JSON.parse(localStorage.getItem("cartItem"));
    const [cartlist,setlist]=useState(cartproduct);
    
    const increment=(id)=>{
        let finddata = cartlist.find((item)=>{
          return item.id ===id;
          
      });
      console.log(finddata)
        if (finddata){
          let updatecartitem = cartlist.map((item)=>{
            if (item.id === id){
              if (item.quantity<=item.stock){
                  item.quantity += 1;
                  return item;
                    }else{
                      return item;
                    }
                    }else {
                    return item;
                    }
                    });
                    setlist(updatecartitem);
                    }
                    else{
                      let newcartitem = cartproduct.find((item)=>{
                            return item.id === id;
                      });
                      newcartitem.quantity = 1;
                      setlist([...cartlist,newcartitem]);
                  }
                };


        const decrement=(id)=>{
            let finddata=cartlist.find((item)=>{
                return item.id ===id;
            })
            if (finddata){
                if (finddata.quantity===1){
                    let updatecartitem=cartlist.filter((item)=>{
                        return item.id !== id;
                    })
                    setlist(updatecartitem);
                } else {
                    let updatecartitem=cartlist.map((item)=>{
                        if (item.id === id){
                            item.quantity -= 1;
                            return item;
                        } else {
                            return item;
                        }
                    })
                    setlist(updatecartitem);
                }
            }
        }
    
        const deleteitem = (id)=>{
            setlist(()=>cartlist.filter((item)=>item.id !=id))
            console.log(cartlist);
        };
        localStorage.setItem("cartproduct",JSON.stringify(cartlist));

    
  return (
    <div>
        <div>
            <Grid container spacing ={2}>
              {cartproduct?.map((item,index)=> <Grid key={index} item xs={4}>
                  <div className='img-dis'>
                    <img src={img1} alt="productimg"/>
                    <div className='img-con'> 
                      <h4>{item.prodname}</h4>
                      <h5>{item.descr}</h5> 
                     <p>Price:${item.prices}</p> 
                     <div className='pro-icons'>
                     {/* <AddShoppingCartIcon onClick={()=>addCart(item.id) }/> */}
                     <AddBoxIcon className='add'onClick={()=>increment(item.id)} />
              {item.quantity}

              <RemoveCircleIcon className='sub' onClick={()=>decrement(item.id)} />
              <DeleteIcon onClick={()=>deleteitem(item.id)} />
                        {/* <AddCircleIcon onClick={()=>increment(item.id)}/>
                        {item.quantity}

                        <RemoveCircleIcon onClick={()=>decrement(item.id)}/>
                        <DeleteIcon onClick={()=>deleteitem(item.id)}/> */}
                      </div> 
                       </div>
                </div>
             </Grid>
             )}
            </Grid>
            
          </div>
    </div>
  )
}

export default Addtocart