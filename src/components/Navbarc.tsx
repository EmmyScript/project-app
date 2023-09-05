import { Link } from "react-router-dom"
import {AiOutlineShoppingCart} from "react-icons/ai"

const Navbarc = () => {
  return (
    <div className="navbarc">
        <div className="links">
            <Link to = "/">Shop</Link>
            <Link to="/cart">
                <AiOutlineShoppingCart size = {32}/>
            </Link>
        </div>
    </div>
  )
}

export default Navbarc