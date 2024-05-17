import React from "react";
import "./App.css";
import {addToShopCart} from "./Reducer";
import  { useDispatch, useSelector }  from "react-redux";





function InitialProduct({productsData}){
  
  let productIdData=useSelector((state)=>{
               return state.shopCartItems
  })
 // console.log(productIdData)
  
  let dispatch = useDispatch();
        
        if (productsData){
        return(
          <>
             <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
        {productsData.map((product,index)=>{
            //console.log(product)
            let productImgs=product.images;
            
            return(
           <div className="col">
             <div className="card h-100">

             <div id={`carouselExampleIndicators${index}`} class="carousel slide">
  <div  class="carousel-indicators">
  <button type="button" data-bs-target={`#carouselExampleIndicators${index}`} data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    {productImgs.slice(1).map((Images,n)=>{
      return(<><button type="button" data-bs-target={`#carouselExampleIndicators${index}`} data-bs-slide-to={n+1} aria-label={`Slide ${n+2}`}></button></>)
      })}
   </div>
        
        
      <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={product.images[0]} class="d-block w-100" alt="..."/>
    </div>
    {productImgs.slice(1).map((item,i)=>{
      //console.log(item)
            return(<>
                 <div class="carousel-item">
                <img src={item} class="d-block w-100" alt="..."/>
                </div>
               
            </>)
    })}
   
  </div>
 
  <button id="BtnColor"  class="carousel-control-prev" type="button" data-bs-target={`#carouselExampleIndicators${index}`} data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button  id="BtnColor" class="carousel-control-next" type="button" data-bs-target={`#carouselExampleIndicators${index}`} data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

               


                 <div className="card-body">
                 <h5 className="card-title">{product.title}</h5>
                 <p className="card-text">Brand : <b>{product.brand}</b></p>

                 <p className="card-text starRating"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> {product.rating}</p>

                 <p className="card-text price"><b>Price = {product.price*100}</b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg></p>
                 
                 <p className="card-text">{product.description}</p>

                 { productIdData.find(item=>item.ProductID===product.id )? <div style={{textAlign:"center"}}><button className="btn btn-warning"  disabled data-bs-toggle="button">Added To Cart</button></div>:<div   style={{textAlign:"center"}}><button className="btn btn-primary" onClick={()=>{
                        
                        let cartItems={
                          Name:product.title,
                          Price:product.price*100,
                          Images:product.thumbnail,
                          Stock:product.stock,
                          ProductID:product.id,
                          quantity:1
                          
                          }
                          dispatch(addToShopCart(cartItems))
                    }}>Add To Cart</button></div>}
            
               </div>
             </div>
           </div>   
            )
        })
    }
        </div>
</div>
</>
        )
           
      
  
}
}

export default InitialProduct;