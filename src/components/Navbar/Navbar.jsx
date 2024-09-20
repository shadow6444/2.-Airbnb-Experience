import logo from "../../assets/airbnb-logo.png";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="airbnb logo" className="nav-logo" />
    </nav>
  );
};

export default Navbar;
