import React from 'react'
// import './Productdetails.scss';
import img1 from '../image/img1.jpg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';

const Productdetails = () => {
    const Productdetails=JSON.parse(localStorage.getItem("Productdetails"));
    console.log("Productdetails",Productdetails);

  return (
    <div>Productdetails:
        <div className='productcontent'>
            <div className='productimage'>
                <img src={img1} alt="productimg"/>

            </div>
            <div className='product-con'>
                <h4>{Productdetails.prodname}{Productdetails.id}</h4>
                <h5>{Productdetails.descr}</h5> 
                <h6>Price:${Productdetails.prices}</h6> 
                <p>Stock:{Productdetails.stock}</p>
                <div className='producticons'>
                    <FavoriteIcon />
                    <ShareIcon />
                    <AddShoppingCartIcon />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Productdetails