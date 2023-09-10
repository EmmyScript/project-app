import { useContext} from "react";
import { ShopContext } from "../../assets/context/ShopContext";

export const Product = ({data}:any) => {
  const { productName, price, productImage, qtty } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  

  return (
    <div className="product ">
      <img src={productImage} />

      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        
      <button className="addToCartBttn" onClick={() => addToCart(data)}
       style={{backgroundColor: qtty && cartItems.length >0 ? "red":""}}
       disabled={qtty && cartItems.length >0 ? true :false}
       > 
          Add to Cart 
       </button>
      </div>
    </div>
  );
};

export default Product;

