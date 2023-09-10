import { ShopContext } from "../../assets/context/ShopContext";
//import { PRODUCTS } from "../products"
//import {CartItem} from  "../cart/CartItem"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { PiHandSwipeRightFill } from "react-icons/pi";
import AppTable from "../../components/AppTable";

export const Cart = () => {
  const { CartItems, getTotalCartAmount, setCartItems } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>my cart items</h1>
      </div>
      <div className="cartItems">
        <AppTable />
      </div>
      {totalAmount > 0 ? (
        <div className="checkout mb-3">
          <p className="fs-3 text-center text-success">
            subtotal: ${totalAmount}{" "}
          </p>
          <button onClick={() => navigate("/")}>continue shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1 style={{ color: "red" }}>
          <span>
            <MdShoppingBasket />
            {CartItems?.length <= 0 && (
              <h4 className="fs-3 fw-bolder">Your cart is empty</h4>
            )}
          </span>
          <PiHandSwipeRightFill />
          click shop to add
        </h1>
      )}

      <button className="btn btn-success" onClick={() => setCartItems([])}>
        Clear cart
      </button>
    </div>
  );
};

export default Cart;


