import {FaBtc} from "react-icons/fa";
import {AiFillBank} from "react-icons/ai";
import {LiaEthereum} from "react-icons/lia";
import{FaArrowRightArrowLeft} from "react-icons/fa6"
const Hero = () => {
  return (
    <div className="container">
    <div className="navbar-nav me-auto mb-2 mb-lg-0">
        <img src="./image/heros.png" alt="./image/heros.png" />

        <div className="hero-game">
        <img src="./image/game.jpg" alt="./image/game.jpg" width= '500' height= '400px'/>
       <div className="heading">
        
        <h2>welcome to coin Base</h2>
        <p>Lorem ipsum dolor sit, amet consectetur 
          adipisicing elit. Iste, beatae. Lorem ipsum 
          dolor sit amet emmanuel coin base
           
           consectetur adipisicing elit. Delectus, aperiam?
           adipisicing elit. Iste, beatae. Lorem ipsum 
          dolor sit amet emmanuel coin base
           
           consectetur adipisicing elit. Delectus, aperia
           adipisicing elit. Iste, beatae. Lorem ipsum 
          dolor sit amet emmanuel coin base
           
           consectetur adipisicing elit. Delectus, aperia
           </p>
           <button className="btns">Add</button>
           </div>
          
        </div>
        <div className="btc-table">
       <table className="table table-bordered">
        
        <thead className="thead-content">
          <tr>
            <th>our rate</th>
            <th>our reserves</th>
            <th>latestexchanges</th>
          </tr>
        </thead>
        
        <tbody className="tbody-content">
          <tr>
            <td><h3><span><FaBtc /></span>btc</h3>
            <p>we sell @ $370/s</p>
            <p>we buy @ $345/s</p>
    
        </td>
            <td>
             
     <h4><span><AiFillBank /></span>Bank transfer</h4>
     <input type="text" placeholder="NGN" />
     <p>#1233455/s</p>
            </td>
           
            <td>
            <button className="btn btn-outline-danger">exchange</button>
              <label>Bitcoin-Bank transfer</label>
                <input type="text" placeholder=" NGN" />
            </td>
          </tr>
          <tr>
          <td><h3><span><LiaEthereum /></span>btc</h3>
            <p>we buy @ $345/s</p>
            <p>we sell @ $370/s</p>
        </td>
        <td>
          <h4><span><FaBtc />Bitcoin</span>433 BTC</h4>
        
        
        </td>
      <td>
      <span>399.98 BTC<FaArrowRightArrowLeft/> 87966678 NGN</span>
      </td>
          </tr>

<tr>
  <td></td>
  <td>
  <h5> <span><LiaEthereum />ETEREUM</span>100 ETH</h5>
  </td>
  <td>

  <label>AMazon card <FaArrowRightArrowLeft/>bank transfer</label>
  <input type="text" placeholder=" NGN" />
  </td>
</tr>
        </tbody>

       </table>
       </div>
       </div>
       <div className="coin-bases">
        <div className="base-one">
        <h1 className="titles">Great experience with coin-base</h1>
        <p>Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Facilis impedit sunt aspernatur cumque
           consequuntur nostrum, quam rem autem magni provident?
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            modi distinctio quaerat!
            adipisicing elit. Facilis impedit sunt aspernatur cumque
           consequuntur nostrum, quam rem autem magni provident?
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            modi distinctio quaerat!
            adipisicing elit. Facilis impedit sunt aspernatur cumque
           
           </p>
           <button className="btn btn-outline-danger">coin-btn</button>
           </div>
           <img src="image/base.jpg" alt="image/base.jpg" width="500" height="500" />
       </div>
       <div className="peter-vote">
        <div className="vote">
          <h1>peter obi won 2023 election</h1>
        <p>Lorem ipsum dolor sit amet consectetur
           adipisicing elit.
           Dolor, rem.</p>
           <img src="./image/bit.png" alt="./image/peter.png"  width={400} height={200}/>
        </div>
        <div className="vote">
          <h1>peter obi won 2023 election</h1>
        <p>Lorem ipsum dolor sit amet consectetur
           adipisicing elit.
           Dolor, rem.</p>
           <img src="./image/horse.jpg" alt="./image/peter.png" width={400}  height={200}/>
        </div>
        <div className="vote">
          <h1>peter obi won 2023 election</h1>
        <p> Lorem ipsum dolor sit amet consectetur
           adipisicing elit.
           Dolor, rem.</p>
           <img src="./image/peter.jpg" alt="./image/peter.jpg"  width={400} height={200} />
        </div>
       </div>
    </div>
  )
}

export default Hero;