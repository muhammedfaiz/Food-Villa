import Logo from "../assets/images/foodVilla.png";
import { Link } from "react-router-dom";

const Header = () => (
    <div className="header">
      <a href="/">
        <img
          src={Logo}
          alt="logo"
          className="logo"
        />
      </a>
  
      <div className="nav-items">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About Us</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </div>
    </div>
  );

  export default Header;