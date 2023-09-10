import { Link } from "react-router-dom"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { ShopContext } from "../assets/context/ShopContext"
import {useContext} from "react"

const Navbarc = () => {
  
  const{cartItems} = useContext(ShopContext)

  console.log(cartItems);

  return (
    <div className="navbarc">
        <div className="links">
            <Link to = "/">Shop</Link>
            <Link to="/cart">
                <AiOutlineShoppingCart size = {32}/>
                <span>{cartItems?.length}</span>
            </Link>
        </div>
    </div>
  )
}

export default Navbarc