import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Currency {
  buy: number;
  moneyType: string;
  bonus: number;
  appExclusive?:boolean;
}

interface StoreContextType {
  buyBonusObject: Currency[];
  setBuyBonusObject: React.Dispatch<React.SetStateAction<Currency[]>>;
  giftingMode:boolean;
  setGiftingMode:React.Dispatch<React.SetStateAction<boolean>>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [buyBonusObject, setBuyBonusObject] = useState<Currency[]>([
    {
      buy: 30,
      moneyType: '$',
      bonus: 10,
      appExclusive:true
    },
    {
        buy: 50,
        moneyType: '$',
        bonus: 5,
        appExclusive:false
      },
      {
        buy: 100,
        moneyType: '$',
        bonus: 15,
        appExclusive:false
      },
      {
        buy: 250,
        moneyType: '$',
        bonus: 50,
        appExclusive:false
      },
      {
        buy: 500,
        moneyType: '$',
        bonus: 125,
        appExclusive:false
      },
  ]);
  const [giftingMode,setGiftingMode]= useState<boolean>(false)

  return (
    <StoreContext.Provider value={{ buyBonusObject, setBuyBonusObject,giftingMode,setGiftingMode }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
