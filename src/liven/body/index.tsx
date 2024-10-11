import './body.css';
import Currency from './currency';
import { useStore } from '../store';

function Body() {
  const { buyBonusObject } = useStore();

  const handleCurrencyClick = () => {
    window.location.href = "https://liven.love/";
  };

  return (
    <div className="currency">
      {buyBonusObject.map((currency, index) => (
        <div key={index} onClick={handleCurrencyClick} style={{ cursor: 'pointer' }}> 
          <Currency currency={currency} />
        </div>
      ))}
    </div>
  );
}

export default Body;
