import React, { useState } from "react";
import style from "./style.module.scss";

const Exchange = () => {
  const [amountUSD, setAmountUSD] = useState(300);
  const [amountBTC, setAmountBTC] = useState(0.00608268);
  const [exchangeRate] = useState(47165.0);
  const [total, setTotal] = useState(300);
  const [fees, setFees] = useState(13.11);

  const handleAmountChange = (e) => {
    const newAmountUSD = e.target.value;
    setAmountUSD(newAmountUSD);
    const newAmountBTC = newAmountUSD / exchangeRate;
    setAmountBTC(newAmountBTC);
  };

  return (
    <div className={style.container}>
      <div className={style.title}>Buy Bitcoin</div>
    </div>
  );
};

export default Exchange;
