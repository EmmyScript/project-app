  //import  {FaPatreon } from "react-icons/fa"
import {FaBtc} from "react-icons/fa";

const Navbar = () => {
  return (

<div className="container">
<nav className="navbar navbar-expand-lg bg-body-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span><FaBtc /></span>Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">about us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Blog</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Check-box
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">bitcoin</a></li>
            <li><a className="dropdown-item" href="#">sell</a></li>
            <li><a className="dropdown-item" href="#">exchange</a></li>
            <li><a className="dropdown-item" href="#">buy</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>

    
  )
}

export default Navbar;
