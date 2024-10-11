import './Liven.css';
import Body from './body';
import Footer from './footer';
import Header from './header';
import NavBar from './navbar';
function Liven() {
  return (
    <div className="liven">
      
      <div className='content'>
      <NavBar />
      <Header />
      <Body />
      <Footer/>
    </div>
    </div>
  );
}

export default Liven;
