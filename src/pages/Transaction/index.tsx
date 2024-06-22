import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import style from "./style.module.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Exchange, { GreenButton2, calculateAmount } from "@components/Exchange";
import { useAppContext } from "@state/context";
import { db } from "../../database";
import { addDoc, collection } from "firebase/firestore";
import useDatabase from "../../database/useDatabase";
import { useNavigate } from "react-router-dom";
const TransactionContent = (props: {
  fromCurrency: { name: string; code: string };
  toCurrency: { name: string; code: string };
  created: string;
  rateFixed: string;
  status: string;
  send: string;
  receive: string;
  walletFrom: string;
  walletTo: string;
  navigateToHome: any;
}) => {
  return (
    <div className={style.transactionContent}>
      <div className={style.title}>
        {props.fromCurrency.name} <ArrowRightAltIcon /> {props.toCurrency.name}
      </div>
      <div className={style.created}>Created: {props.created}</div>
      <div className={style.time}>
        Time to pay:
        <span>
          <Countdown date={Date.now() + 1800000} />
        </span>{" "}
      </div>
      <div className={style.value}>
        Amount:{" "}
        <span>
          {props.send} {props.fromCurrency.code}
        </span>
      </div>
      <div className={style.wallet}>
        wallet to: <span>{props.walletTo}</span>
      </div>
      <div className={style.receive}>
        receive:{" "}
        <span>
          {props.receive} {props.toCurrency.code}
        </span>{" "}
      </div>
      <div className={style.wallet}>
        walletFrom: <span>{props.walletFrom}</span>{" "}
      </div>
      <div className={style.status}>
        Status: <span> {props.status}</span>
      </div>
      <div style={{ width: "300px" }}>
        <GreenButton2 handleClick={props.navigateToHome} label={"Home"} />
      </div>
    </div>
  );
};
function convertTimestamp(timestamp: { seconds: number; nanoseconds: number }) {
  var seconds = timestamp.seconds;
  var nanoseconds = timestamp.nanoseconds;

  var date = new Date(seconds * 1000 + nanoseconds / 1e6);

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  var hours = date.getHours();
  var minutes = date.getMinutes();

  var formattedDate = `${day < 10 ? "0" : ""}${day}.${
    month < 10 ? "0" : ""
  }${month}.${year} ${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;

  return formattedDate;
}

type Transaction = {
  fromCurrency: { name: string; code: string };
  toCurrency: { name: string; code: string };
  created: { seconds: number; nanoseconds: number };
  rateFixed: string;
  status: string;
  send: string;
  receive: string;
  wallet: string;
  email: string;
};
const TransactionPage = () => {
  const [transaction, setTransaction] = useState<Transaction>();
  const [transactionId, setTransactionId] = useState<string>();
  const state = useAppContext();
  const urlObject = new URL(window.location.href);
  const searchParams = new URLSearchParams(urlObject.search);
  const itemId = searchParams.get("id") as string;
  const myDB = useDatabase();
  const navigate = useNavigate();
  const navigateToHome = () => {
    console.log("navigateToHome");
    navigate(`/`);
  };

  useEffect(() => {
    if (!itemId) return;
    myDB.getDocumentById("transactions", itemId).then((data) => {
      console.log(data);
      setTransaction(data);
    });
  }, [itemId]);

  const createDoc = async () => {
    try {
      const fromValue = state.currencyFrom?.value || 300;
      const toValue = calculateAmount(fromValue, state.currencyTo?.inBTC);

      const newTransaction = {
        fromCurrency: {
          name: state.currencyFrom?.name,
          code: state.currencyFrom?.code,
        },
        toCurrency: {
          name: state.currencyTo?.name,
          code: state.currencyTo?.code,
        },
        created: new Date(),
        status: "pending",
        send: fromValue,
        receive: toValue,
        wallet: state.wallet,
      };
      console.log(newTransaction);
      const docRef = await addDoc(
        collection(db, "transactions"),
        newTransaction
      );
      let url = new URL(window.location.href);

      url.searchParams.set("id", docRef.id);

      window.history.replaceState({}, "", url.toString());
      setTransactionId(docRef.id);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className={style.transaction}>
      {!transactionId && (
        <div className={style.exchangeComponent}>
          <Exchange createTransaction={createDoc} />
        </div>
      )}

      {transaction && transactionId && (
        <TransactionContent
          fromCurrency={{
            name: transaction.fromCurrency.name,
            code: transaction.fromCurrency.code,
          }}
          toCurrency={{
            name: transaction.toCurrency.name,
            code: transaction.toCurrency.code,
          }}
          created={convertTimestamp(transaction.created)}
          rateFixed={convertTimestamp(transaction.created)}
          status={transaction.status}
          send={transaction.send}
          receive={transaction.receive}
          walletFrom={transaction.wallet}
          walletTo="Твій кошель"
          navigateToHome={navigateToHome}
        />
      )}
    </div>
  );
};

export default TransactionPage;
