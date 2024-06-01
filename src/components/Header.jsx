import { useSelector } from "react-redux";
import Logo from "../assets/images/foodVilla.png";
import { Link } from "react-router-dom";


const Header = () =>{ 
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);
  return(
  
    <div className="flex justify-between px-4 py-3 bg-blue-900 shadow-lg sticky">
      <a href="/">
        <img
          src={Logo}
          alt="logo"
          className="h-20 ml-11 rounded-xl"
        />
      </a>
  
      <div className="">
        <ul className="flex py-6 px-16 space-x-10 text-white">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About Us</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/cart"><li>Cart - {cartItems.length} items</li></Link>
        </ul>
      </div>
    </div>
  )};

  export default Header;