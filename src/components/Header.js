import { useState } from "react";
import FoodHavenLogo from "../images/applogo.png";
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";

// Title component for display logo
const Title = () => (
  <div className="flex items-center">
    <Link to="/">
      <h2 className="text-xl font-bold text-gray-500 mx-2">
        Food<span className="text-orange-600">Haven</span>
      </h2>
    </Link>

    <img
      className= "w-52 m-2 p-3 "
      alt="logo"
      src="https://cdn-icons-png.flaticon.com/512/683/683071.png"
    />
  </div>
);


// Header component for header section: Logo, Nav Items
const Header = () => {
  const token = localStorage.getItem("token");
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(
    token?.length === 100 ? true : false
  );
  const navigate = useNavigate();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li className="px-6 text-medium font-semibold flex items-center text-gray-600 hover:text-orange-600">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
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
    </div>
  );
};

export default Header;