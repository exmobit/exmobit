import { useState } from "react";
import style from "./style.module.scss";
import "./animation.css";
import { Currency, useAppContext } from "@state/context";

interface IAmountSelection {
  value: number;
  onChangeValue: (value: number) => void;
  currency: string;
  label: string;
  showChooseCurrency: () => void;
}

interface IWalletInput {
  value: string;
  onChangeWallet: (value: string) => void;
}

export const calculateAmount = (value: any, rate: any) => {
  const numberValue = Number(value);
  const numberRate = Number(rate);

  return numberValue * numberRate;
};

export const GreenButton2 = (props: any) => {
  return (
    <div
      className={`button ${style.totalContinue}`}
      onClick={() => {
        console.log("clicked");
        props?.handleClick();
      }}
    >
      <span>{props.label}</span>
    </div>
  );
};

export const GreenButton = (props: any) => {
  return (
    <div
      className={`${style.total} ${
        props.isChooseCurrency === true ? "fade-out" : "fade-in"
      }`}
    >
      <div className={`${style.totalValue} `}>
        <div className={style.totalValue__label}>Total</div>
        <div>
          {props.code} {props.value}
        </div>
      </div>

      <GreenButton2 handleClick={props.handleClick} label={props.label} />
    </div>
  );
};

const TotalComponent = (props: any) => {
  const handleClick = () => {
    if (props.createTransaction) {
      props.createTransaction();
    } else {
      props.navigateToTransaction();
    }
  };

  return (
    <GreenButton
      handleClick={handleClick}
      label="Continue"
      isChooseCurrency={props.isChooseCurrency}
    />
  );
};

const WalletInput = (props: IWalletInput) => {
  return (
    <div className={style.walletInput}>
      <div className={style.walletInput__input}>
        <span>Your wallet</span>
        <input
          value={props.value}
          onChange={(e) => {
            props.onChangeWallet(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

const AmountSelection = (props: IAmountSelection) => {
  return (
    <div className={style.amountSelection}>
      <div className={style.amountSelection__input}>
        <span>{props.label}</span>
        <input
          value={props.value}
          onChange={(e) => {
            props.onChangeValue(+e.target.value);
          }}
          type="number"
        />
      </div>
      <div
        className={style.amountSelection__currency}
        onClick={props.showChooseCurrency}
      >
        <div>{props.currency}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          role="img"
          className="Svg_svg__D3r9H Svg_icon__1pmmF Select_chevron__VQOq0"
          style={{ height: "24px", overflow: "visible", width: "24px" }}
        >
          <title>img-chevronDown</title>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M17.207 9.293a1 1 0 0 0-1.414 0L12 13.086 8.207 9.293a1 1 0 0 0-1.414 1.414l4.5 4.5a1 1 0 0 0 1.414 0l4.5-4.5a1 1 0 0 0 0-1.414Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};

const CurrencyItem = ({
  currency,
  onChoose,
}: {
  currency: Currency;
  onChoose: (currency: Currency) => void;
  isSelected?: boolean;
}) => {
  return (
    <div
      onClick={() => {
        onChoose(currency);
      }}
      className={style.currencyItem}
    >
      <div> {currency.name}</div>
      <div> {currency.code}</div>
    </div>
  );
};
const defaultValue = 300;

const Exchange = (props: any) => {
  const isTranscationPage = window.location.pathname.includes("transaction");

  const context = useAppContext();
  const [currencyType, setCurrencyType] = useState<"from" | "to" | null>(null);
  const [isChooseCurrency, setIsChooseCurrency] = useState<
    boolean | undefined
  >();

  const getAnimationClass = () => {
    return isChooseCurrency ? "slide-in-bottom" : "slide-out-bottom";
  };
  console.log(context.currencyFrom);

  const onChangeWallet = (value: string) => {
    context.updateState({
      wallet: value,
    });
  };

  const onChangeFrom = (currency: number) => {
    context.updateState({
      currencyFrom: {
        ...context.currencyFrom,
        value: currency,
      },
    });
  };

  const onChooseCurrency = (currency: Currency) => {
    if (currencyType === "from") {
      context.updateState({
        currencyFrom: { ...currency, value: context.currencyFrom?.value || 0 },
      });
    } else if (currencyType === "to") {
      context.updateState({
        currencyTo: { ...currency, value: context.currencyTo?.value || 0 },
      });
    }

    setIsChooseCurrency(false);
    setCurrencyType(null);
  };

  return (
    <div className={style.container}>
      <div
        className={`${style.title} ${
          isChooseCurrency === true ? "fade-out" : "fade-in"
        }`}
      >
        Buy {context.currencyTo?.name || ""}
      </div>
      <div
        className={`${style.container__currencies} ${
          isChooseCurrency === true ? "fade-out" : "fade-in"
        }`}
      >
        <AmountSelection
          value={context.currencyFrom?.value || defaultValue}
          onChangeValue={onChangeFrom}
          label="You pay"
          currency={context.currencyFrom?.code || ""}
          showChooseCurrency={() => {
            setCurrencyType("from");
            setIsChooseCurrency(true);
          }}
        />
      </div>

      <div
        className={`${style.container__currencies} ${
          isChooseCurrency === true ? "fade-out" : "fade-in"
        }`}
        style={{ marginTop: "20px" }}
      >
        <AmountSelection
          value={
            calculateAmount(
              context.currencyFrom?.value || defaultValue,
              context.currencyTo?.inBTC
            ) || 0
          }
          label="You get"
          onChangeValue={() => {}}
          currency={context.currencyTo?.code || ""}
          showChooseCurrency={() => {
            setCurrencyType("to");
            setIsChooseCurrency(true);
          }}
        />
      </div>

      {isChooseCurrency !== undefined && (
        <div className={`${style.chooseCurrency} ${getAnimationClass()}`}>
          {context.currencyData.map((currency) => (
            <CurrencyItem
              isSelected={currency.code === context.currencyFrom?.code}
              currency={currency}
              onChoose={onChooseCurrency}
            />
          ))}
        </div>
      )}

      {isTranscationPage && (
        <div
          className={`${style.container__currencies} ${
            isChooseCurrency === true ? "fade-out" : "fade-in"
          }`}
          style={{ marginTop: "20px" }}
        >
          <WalletInput onChangeWallet={onChangeWallet} value={context.wallet} />
        </div>
      )}

      <TotalComponent
        value={context.currencyFrom?.value || defaultValue}
        code={context.currencyFrom?.code || 0}
        isChooseCurrency={isChooseCurrency}
        navigateToTransaction={props.navigateToTransaction}
        createTransaction={props.createTransaction}
      />
    </div>
  );
};

export default Exchange;
