import { createSlice } from '@reduxjs/toolkit';


let shopCart={
    shopCartItems : []
}


 let shopCartReducer = createSlice({
    name:"shopCart",
    initialState : shopCart,
    reducers : {
        addToShopCart :(state,action)=>{
            //console.log(action);
            state.shopCartItems.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            state.shopCartItems.splice(action.payload,1)
        },
        IncreaseQty: (state, action) => {

            state.shopCartItems.map((item) => {
                console.log(item)
                if (item.ProductID === action.payload) {
                    item.quantity += 1
                    return item
                }
                else {
                    return item
                }
            })

        },
        DecreaseQty: (state, action) => {

            state.shopCartItems.map(item => {
                if (item.quantity > 1) {
                    if (item.ProductID === action.payload) {
                        item.quantity -= 1
                        return item
                    }
                    return item
                }
            })

        }
    }

})
  


export  const { addToShopCart, removeFromCart , IncreaseQty , DecreaseQty } =  shopCartReducer.actions
export default shopCartReducer.reducer