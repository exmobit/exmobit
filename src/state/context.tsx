import React, { createContext, useContext, useEffect, useState } from 'react';
import initialState from '.';
import useDatabase from '../database/useDatabase';

export type Currency = {
  icon: string;
  name: string;
  code: string;
  value: string;
  inBTC: string;
};

export interface IContext {
  currencyData: Currency[];
  currencyFrom: Currency | null;
  currencyTo: Currency | null;
  updateState: (newValues: { [key: string]: any }) => void;
  email: string;
  wallet: string;
}

const AppContext = createContext<IContext>(initialState);

const { Provider } = AppContext;

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setValues] = useState<IContext>(initialState);
  const db = useDatabase();
  const updateState = (newValues: { [key: string]: string }) => {
    setValues({ ...state, ...newValues });
  };
  useEffect(() => {
    db.getData('currencies').then(currencies => {
      updateState({ currencyData: currencies, currencyFrom: currencies[0], currencyTo: currencies[1] })
    });
  }, [])

  return <Provider value={{ ...state, updateState }}>{children}</Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
