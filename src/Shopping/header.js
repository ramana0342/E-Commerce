import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import "./App.css";

import Index from "./index";
import Cart from "./cart";
import { useSelector } from "react-redux";

function Header(){

    let ShoppingItems= useSelector((state)=>{
        return state.shopCartItems
    })
   // console.log(ShoppingItems)

return(

<>

<BrowserRouter>

    <div className="header">
        <Link to ="/"><b>Home</b></Link>
        <Link to="CART/" ><b>Cart</b>-{ShoppingItems.length}</Link>

    </div>
<Routes>
    <Route path="/" element={<Index/>}></Route>
    <Route path="CART/" element={<Cart/>}></Route>
</Routes>
</BrowserRouter>

</>
)


}

export default Header;