import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from 'firebase/firestore';
import { useAppContext } from '@state/context';
import Dropdown from '@components/Dropdown';
import { db } from '../../database';
import cryptoImg from './crypto.png'
import AMLBot from './AMLBot.svg'
import Bestchange from './Bestchange.svg'
import PerfectMoney from './PerfectMoney.svg'
import Card from './card.png'

import style from './style.module.scss';
import t from '../../locales';

const calculateReceive = (fromValue: string | undefined, fromBtc: string | undefined, toBtc: string | undefined) => {
  if (fromValue && fromBtc && toBtc) {
    const rate = +fromBtc / +toBtc;
    return +fromValue * rate;
  }
  return 0
}

interface ICurrencyBoxProps {
  boxType: 'currencyFrom' | 'currencyTo';
}

const CurrencyBox: React.FC<ICurrencyBoxProps> = ({ boxType }) => {
  const state = useAppContext();
  const [inputValue, setInputValue] = useState(0);

  const setNewData = (code: string) => {
    const currency = state.currencyData.find((el) => el.code === code);
    if (currency) {
      state.updateState({ [boxType]: currency });
    }
  };

  useEffect(() => {
    setInputValue(
      calculateReceive(
        state.currencyFrom?.value,
        state.currencyFrom?.inBTC,
        state.currencyTo?.inBTC
      )

    );

  }, [state.currencyFrom?.value]);

  useEffect(() => {
    state.updateState({
      currencyTo: { ...state.currencyTo, value: inputValue },
    });
  }, [inputValue])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    state.updateState({
      [boxType]: { ...state[boxType], value: e.target.value },
    });
  };

  return (
    <div className={style.currencyBox}>
      <p>
        {boxType === 'currencyFrom' ? t('send') : t('receive')}{' '}
        {state[boxType]?.code}
      </p>
      <div>
        <input
          type='number'
          value={boxType === 'currencyFrom' ? state.currencyFrom?.value : inputValue}
          onChange={handleInputChange}
        />
        <Dropdown
          data={state.currencyData}
          onChange={(value) => setNewData(value)}
          selectedData={state[boxType]}
        />
      </div>
    </div>
  );
};


function App() {
  const state = useAppContext();

  const navigate = useNavigate();

  const createDoc = async () => {
    try {
      const newTransaction = {

        fromCurrency: {
          name: state.currencyFrom?.name,
          code: state.currencyFrom?.code
        },
        toCurrency: {
          name: state.currencyTo?.name,
          code: state.currencyTo?.code,
        },
        created: new Date(),
        status: 'pending',
        send: state.currencyFrom?.value,
        receive: state.currencyTo?.value,
        wallet: state.wallet,
        email: state.email
      }

      const docRef = await addDoc(collection(db, 'transactions'), newTransaction);
      navigate(`/transaction?id=${docRef.id}`)
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const onChangeEmail = (value: string) => {
    state.updateState({ email: value });
  };

  const onChangeWallet = (value: string) => {
    state.updateState({ wallet: value });
  };

  return (
    <div className={style.mainPage}>
      <p>
        {t('exchange')} {state.currencyFrom?.name} ({state.currencyFrom?.code})  {t('to')} {state.currencyTo?.name} ({state.currencyTo?.code})
      </p>

      <div className={style.walletForm}>
        <div className={style.changeBlock}>
          <CurrencyBox boxType="currencyFrom" />
          <div />
          <CurrencyBox boxType="currencyTo" />
        </div>
        <div className={style.inputBox}>
          <input
            id="email"
            placeholder={t("username")}
            onChange={(e) => {
              onChangeEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className={style.inputBox}>
          <input
            id="wallet"
            placeholder={t("walletNumber")}
            onChange={(e) => {
              onChangeWallet(e.target.value);
            }}
          ></input>
        </div>
        <button
          onClick={() => {
            createDoc();
          }}
        >
          {t("toExchange").toUpperCase()}
        </button>
      </div>

      <div className={style.additionalInfo}>
        <div className={style.additionalInfoText}>
          <h1>{t("textPanel1Title")}</h1>
          <p>{t("textPanel1P1")}</p>

          <ul>
            <li>
              {t("textPanel1Li1")}
            </li>
            <li>
              {t("textPanel1Li2")}
            </li>
            <li>
              {t("textPanel1Li3")}
            </li>
          </ul>
          <p>
            {t("textPanel1P2")}
          </p>
          <p>
            {t("textPanel1P3")}
          </p>
        </div>
        <img src={cryptoImg} width={"340px"} alt="logo" />
      </div>


      <div className={style.additionalInfo}>
        <img src={Card} width={"340px"} alt="logo" />
        <div className={style.additionalInfoText}>
          <h1>
            {t("textPanel12itle")}
          </h1>
          <p>
            {t("textPanel2P1")}
          </p>
          <p>
            {t("textPanel2P2")}
          </p>
        </div>
      </div>

      <div className={style.partners}>
        <h1> {t("partners")}</h1>
        <div>
          <img src={AMLBot} alt="logo" />
          <img src={Bestchange} alt="logo" />
          <img src={PerfectMoney} alt="logo" />
        </div>
      </div>

    </div>
  );
}

export default App;
