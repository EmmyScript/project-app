//import { useContext } from "react";
import { PRODUCTS } from "../products";
import Product from "./Product";
//import { ShopContext } from "../../assets/context/ShopContext";

export const Shop = () => {
  //const {cartItems,addToCart, myName} =  useContext(ShopContext)
   

 //console.log(myName);
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>emmy shoppng </h1> 
      </div>
      <div className="products">
  
    {PRODUCTS.map((product) => (
      <Product data={product} key ={product.id}/>
    ))}
      </div>
    </div>
  )
}

export default Shop