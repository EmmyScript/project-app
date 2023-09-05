import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbarc from "./Navbarc";
import Shop from "../pages/shop/Shop";
import Cart from "../pages/cart/Cart"


const Home = () => {
  return (
    <div className="Home">
        <Router>
    <Navbarc />
        
        <Routes>
    
        <Route path="/" element={<Shop />}/>
        <Route path="/cart" element= {<Cart />}/>
        </Routes>
        </Router>
    </div>
  )
}

export default Home