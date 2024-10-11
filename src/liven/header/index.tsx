import GiftRadio from './giftRadio';
import './header.css';
function Header() {
  return (
    <div className="header">
        <div className="mainHeader">San Dollars</div>
        <div className='headerInfo'>Play now, eat more later! Earn a bonus when you buy food upfront. Tap now to purchase</div>
        <GiftRadio />
    </div>
  );
}

export default Header;
