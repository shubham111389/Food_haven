import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import FoodHavenLogo from "../images/applogo.png"; // You may need to add this import if it's used

const Title = () => {
  return (
    <div className="flex items-center">
      <Link to="/">
        <h2 className="text-xl font-bold text-gray-500 mx-2">
          Food<span className="text-orange-600">Haven</span>
        </h2>
      </Link>
      <img
        className="h-14 pr-4"
        alt="logo"
        src="https://cdn-icons-png.flaticon.com/512/683/683071.png"
      />
    </div>
  );
}

const Header = () => {
  const token = localStorage.getItem("token");
  const [isLoggedin, setIsLoggedin] = useState(!!token); // Simplified the conditional check
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex items-center justify-between px-6 md:px-8 py-2 shadow bg-black text-white">
      <Title />
      <ul className="flex gap-6 md:gap-12 text-sm font-medium">
        <li><Link to="/" className="hover:text-orange-400 transition duration-300 ease-in-out">Home</Link></li>
        <li><Link to="/about" className="hover:text-orange-400 transition duration-300 ease-in-out">About</Link></li>
        <li><Link to="/contact" className="hover:text-orange-400 transition duration-300 ease-in-out">Contact</Link></li>
        <li>
          {isLoggedin ? (
            <button
              className="logout-btn"
              onClick={() => {
                localStorage.clear();
                setIsLoggedin(false);
              }}
            >
              Logout
            </button>
          ) : (
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </li>
        <li>
        <Link to="/cart" style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://img.icons8.com/avantgarde/1x/shopping-cart--v2.png" />
        <span style={styles.cartCount}> {cartItems.length} </span>
        </Link>

        </li>
        
      </ul>
    </div>
  );
};

const styles = {
  cartIcon: {
    height: 35,
    marginRight: 15,
    marginbottom :12
    
  },
  
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
  
    background: 'black',
    borderRadius: '30%',
    padding: '4px 5px',
    position: 'absolute',
    right: 2,
    top: -9
  }
};

export default Header;
