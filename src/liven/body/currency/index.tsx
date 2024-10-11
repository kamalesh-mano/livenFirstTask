import React from 'react';
import './currency.css';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import { useStore } from '../../store'; // Import the useStore hook

interface CurrencyDollars {
  buy: number;
  moneyType: string;
  bonus: number;
  appExclusive?: boolean;
}

interface CurrencyProps {
  currency: CurrencyDollars; 
}

function Currency({ currency }: CurrencyProps) {
  const { giftingMode } = useStore(); // Get giftingMode from store
  const { buy, moneyType, bonus, appExclusive } = currency;

  if (giftingMode && appExclusive) {
    return null; 
  }

  return (
    <div className="container">
      {appExclusive && (
        <button className="appExclusiveButton">
          <CategoryRoundedIcon sx={{ fontSize: "8px", marginRight: "3px" }} />
          App Exclusive
        </button>
      )}
      <div className="buy">
        <div className='buyInfo'>
          <div className='buyLabel'>Buy</div>
          <div className='buyValue'>{moneyType}{buy}</div>
        </div>
      </div>
      <div className='currencyLogo'>
        <PaidRoundedIcon sx={{ color: "#F5C341" }} />
      </div>
      <div className='bonus'>
        <div className='bonusInfo'>
          <div className='bonusLabel'>Bonus</div>
          <div className='bonusValue'>{moneyType}{bonus}</div>
        </div>
      </div>
    </div>
  );
}

export default Currency;
