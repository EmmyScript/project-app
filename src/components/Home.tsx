import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbarc from "./Navbarc";
import Shop from "../pages/shop/Shop";
import Cart from "../pages/cart/Cart"
import { ShopContextProvider } from "../assets/context/ShopContext";


const Home = () => {
  return (
    <div className="Home">
      <ShopContextProvider>
        <Router>
    <Navbarc />
        
        <Routes>
    
        <Route path="/" element={<Shop />}/>
        <Route path="/cart" element= {<Cart />}/>
        </Routes>
        </Router>
    </ShopContextProvider>
    </div>
  )
}

export default Home