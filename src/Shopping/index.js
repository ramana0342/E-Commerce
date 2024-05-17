import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import InitialProduct from "./main"
import FilterData from "./filter";
import SheimerEffect from "./sheimer";
import "./App.css";
import ProductFilters from "./productFilters";

function Index(){

    const [productsData,setProductsData]= useState([]);
    const [searchData,setSearchData] = useState("")
    const [filterProducts,setfilterProducts]= useState([])
    const [Filters,setFilters] = useState([])
    


    useEffect(()=>{
            axios.get("https://dummyjson.com/products?skip=0&limit=100")
            .then((res)=>{
                let products=res.data.products;
                setProductsData(products);
                if(searchData){
                let filterPBNItems=productsData.filter((item,index)=>{
                  if(`${item.title}${item.brand}${item.category}`.toLowerCase().includes(searchData.toLowerCase())==true){
                      return true;
                  }   
             })
             setfilterProducts(filterPBNItems)
            }
            })
          
    },[searchData])



      
   const handleFilters= (parameter)=>{
            
           if(parameter==="fourtofive"){
            if(Filters.length>0){
              let filtersData=Filters.filter((item,i)=>{
                if(item.rating>=4 && item.rating<=4.5){
                 return true;
                }
             })
             
             //console.log(filtersData)
           
             setFilters(filtersData)
             
            }
            
            else{
            let filtersData=productsData.filter((item,i)=>{
               if(item.rating>=4 && item.rating<=4.4){
                return true;
               }
            })
            console.log(filtersData)
            
             setFilters(filtersData)
           }
          }
        
         
        
        //------------------rating 2: 4.5 and above:-----------------------------

        else if(parameter==="above45"){
          
          if(Filters.length>0){
          let filtersData=Filters.filter((item,i)=>{
            if(item.rating>=4.5){
             return true;
            }
         })
         
       
         setFilters(filtersData)
        }
        else{

          let filtersData=productsData.filter((item,i)=>{
            if(item.rating>=4.5){
             return true;
            }
         })
           setFilters(filtersData)

         }
        }

        //-----------------price below 5000 --------------------------------------------------------------

        
        else if(parameter==="below5000"){
          console.log("5000")
          if(Filters.length>0){
          let filtersData=Filters.filter((item,i)=>{
            if(item.price*100<5000){
             return true;
            }
         })
         console.log(filtersData)
         setFilters(filtersData)
        }
        else{

          let filtersData=productsData.filter((item,i)=>{
            if(item.price*100<5000){
             return true;
            }
         })
         console.log(filtersData)
         setFilters(filtersData)
         }
        }


        //----------------- price between  5,001-1,00,000 -------------------------------------
           
        
        else if(parameter==="between5K1TO100K"){
          console.log("5000")
          if(Filters.length>0){
          let filtersData=Filters.filter((item,i)=>{
            if(item.price*100>=5001 && item.price*100<=100000 ){
             return true;
            }
         })
         console.log(filtersData)
         setFilters(filtersData)
        }
        else{

          let filtersData=productsData.filter((item,i)=>{
            if(item.price*100>=5001 && item.price*100<=100000){
             return true;
            }
         })
         console.log(filtersData)
         setFilters(filtersData)
         }
        }


        // --------------Price Between 100001 to 2,00000---------------------------


        else if(parameter==="between100K1TO200K"){
          console.log("5000")
          if(Filters.length>0){
          let filtersData=Filters.filter((item,i)=>{
            if(item.price*100>=100001 && item.price*100<=200000 ){
             return true;
            }
         })
         console.log(filtersData)
         setFilters(filtersData)
        }
        else{

          let filtersData=productsData.filter((item,i)=>{
            if(item.price*100>=10001 && item.price*100<=200000){
             return true;
            }
         })
         console.log(filtersData)
         setFilters(filtersData)
         }
        }

        
   
        
      
      


      
        }


    return(

        <>

<div className="inputDiv">
        <div className="input-group flex-nowrap inputFiledHoldDiv">
        <input value={searchData} 
        onChange={
            (e)=>{
                console.log(e.target.value)
                setSearchData(e.target.value) 
            }} 
        type="text" className="form-control inputField" placeholder="Search Product or Product Brands or Product Category " />
        </div>
        </div>



        <div className="container">
            <div className="row">
                <div className="col-2">
                <h3>Filters</h3>
           

           <div class="accordion" id="accordionPanelsStayOpenExample">
     <div class="accordion-item">
       <h2 class="accordion-header">
         <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          
         <b>Rating</b>
         </button>
       </h2>
       <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
         <div class="accordion-body">
   
         <div class="form-check">
         <input  onChange={()=>{
      handleFilters("fourtofive")
     }}  class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
     <label class="form-check-label" for="flexCheckDefault">
       4.0-4.5
     </label>
   </div>
   <div class="form-check">
     <input onClick={()=>{handleFilters("above45")}} class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
     <label class="form-check-label" for="flexCheckChecked">
       4.5 @ above
     </label>
   </div>
           
         
         
         </div>
       </div>
     </div>
     <div class="accordion-item">
       <h2 class="accordion-header">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
           <b>Price</b>
         </button>
       </h2>
       <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
         <div class="accordion-body">
           
         

         <div class="form-check">
         <input onClick={()=>{handleFilters("below5000")}} class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
     <label class="form-check-label" for="flexCheckDefault">
        5,000 @ below
     </label>
   </div>
   <div class="form-check">
     <input onClick={()=>{handleFilters("between5K1TO100K")} } class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
     <label class="form-check-label" for="flexCheckChecked">
      5,001-1,00,000
     </label>
   </div>
   <div class="form-check">
         <input onClick={()=>{handleFilters("between100K1TO200K")} } class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
     <label class="form-check-label" for="flexCheckDefault">
        1,00,001-2,00,000
     </label>
   </div>
  




         </div>
       </div>
     </div>
     <div class="accordion-item">
       <h2 class="accordion-header">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
           Accordion Item #3
         </button>
       </h2>
       <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
         <div class="accordion-body">
           <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
         </div>
       </div>
     </div>
   </div>
   
   
         
           
   
   
                </div>

            <div className="col-10" >
          
        
           
               
                {productsData.length==0 && filterProducts.length==0 ? <SheimerEffect/>: ""}
                {filterProducts.length>0 && searchData!=="" ? <FilterData filterProducts={filterProducts}/> : <InitialProduct productsData={productsData}
                Filters ={Filters}/> }

    
          
                
                </div>   
            </div>
        </div>
        
       

        
         
        
 
        </>
    )
}


export default Index;