
import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingBag, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          CampusKart
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/my-listings">My Listings</NavLink>
          <NavLink to="/add-product" className="sell-btn">
            + Sell Item
          </NavLink>
        </div>

        {/* Authentication */}
        <div className="nav-auth">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
