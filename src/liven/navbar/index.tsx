import './navbar.css';
import logo from '../../assets/logo.png';

function NavBar() {
  return (
    <div className="navBar">
      <a href="https://liven.love/" rel="noopener noreferrer">
        <img src={logo} alt="Logo" className="navLogo" />
      </a>
      <a href="https://liven.love/" rel="noopener noreferrer">
        <button className="custom-button">Get App</button>
      </a>
    </div>
  );
}

export default NavBar;
