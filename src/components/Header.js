import { useState } from "react";
import FoodHavenLogo from "../images/applogo.png";
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";// used for the  allows programmatic routing inside a React application. 
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';



// Title component for display logo


// Header component for header section: Logo, Nav Items
const Header = () => {
  const token = localStorage.getItem("token");
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(
    token?.length === 100 ? true : false
  );
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);


  return (
    <div className="flex  items-center justify-between px-6 md:px-8 py-2 shadow bg-black text-white ">
    <Link to="/">
      <h2 className="text-xl font-bold text-gray-500 mx-2">
        Food<span className="text-orange-600">Haven</span>
      </h2>
    </Link>
     <img
      className= " py-0 h-14"
      alt="logo"
      src="https://cdn-icons-png.flaticon.com/512/683/683071.png"
    />
      
    
    <ul className="flex gap-6 md:gap-12 text-sm font-medium">
        <li><Link to="/" className=" hover:text-orange-400  transition-all duration-300 ease-in-out">Home</Link></li>
        <li><Link to="/about" className=" hover:text-orange-400 transition-all duration-300 ease-in-out">About</Link></li>
        <li><Link to="/contact" className=" hover:text-orange-400 transition-all duration-300 ease-in-out">Contact</Link></li>
        <li><Link to="/cart" className="relative "><FontAwesomeIcon icon={faCartPlus} /><span className="absolute top-[-8px] right-[-12px] bg-orange-500 w-4 p-1  h-4 rounded-full text-[10px] flex justify-center items-center" data-testid="cart">{cartItems.length}</span></Link></li>
        <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.clear();
                  setIsLoggedin(!isLoggedin);
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
        
        </ul>
      </div>
    
  );
};

export default Header;