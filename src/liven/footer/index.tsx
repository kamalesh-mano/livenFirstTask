import './footer.css';
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <div className="footer">
 <a href="https://liven.love/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo" className="navLogo" />
        </a>
    </div>
  );
}

export default Footer;
