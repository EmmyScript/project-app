import { PRODUCTS } from "../products";
import Product from "./Product";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>emmy shoppng </h1> 
      </div>
      <div className="products col-md-3">
    {" "}
    {PRODUCTS.map((product) => (
      <Product data={product}/>
    ))}
      </div>
    </div>
  )
}

export default Shop