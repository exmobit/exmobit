import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import style from './style.module.scss';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import useDatabase from '../../database/useDatabase';
const TransactionContent = (props: {
	fromCurrency: { name: string, code: string },
	toCurrency: { name: string, code: string },
	created: string,
	rateFixed: string,
	status: string,
	send: string,
	receive: string,
	walletFrom: string,
	walletTo: string
}) => {
	return <div className={style.transactionContent}>
		<div className={style.title}>{props.fromCurrency.name} <ArrowRightAltIcon /> {props.toCurrency.name}</div>
		<div className={style.created}>Создана: {props.created}</div>
		<div className={style.time}>Время на оплату:<span><Countdown date={Date.now() + 1800000} /></span>  </div>
		<div className={style.value}>Сума к оплате: <span>{props.send} {props.fromCurrency.code}</span></div>
		<div className={style.wallet}>реквизиты: <span>{props.walletTo}</span></div>
		<div className={style.value}>Сума к получению: <span>{props.receive} {props.toCurrency.code}</span> </div>
		<div className={style.wallet}>реквизиты: <span>{props.walletFrom}</span> </div>
		<div className={style.status}>Статус: <span> {props.status === 'pending' ? 'ожидает оплаты' : 'Оплачено'}</span></div>
	</div>
}
function convertTimestamp(timestamp: { seconds: number, nanoseconds: number }) {
	// Отримання значень з об'єкта
	var seconds = timestamp.seconds;
	var nanoseconds = timestamp.nanoseconds;

	// Створення об'єкту Date на основі значень секунд та наносекунд
	var date = new Date(seconds * 1000 + nanoseconds / 1e6); // Переведення наносекунд в мілісекунди

	// Отримання компонентів дати та часу
	var day = date.getDate();
	var month = date.getMonth() + 1; // Місяці в JavaScript починаються з 0
	var year = date.getFullYear();

	var hours = date.getHours();
	var minutes = date.getMinutes();

	// Форматування дати та часу
	var formattedDate = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year} ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

	return formattedDate;
}

type Transaction = {
	fromCurrency: { name: string, code: string },
	toCurrency: { name: string, code: string },
	created: { seconds: number, nanoseconds: number },
	rateFixed: string,
	status: string,
	send: string,
	receive: string,
	wallet: string,
	email: string
}
const TransactionPage = () => {
	const [transaction, setTransaction] = useState<Transaction>();
	const db = useDatabase()
	useEffect(() => {
		const urlObject = new URL(window.location.href);
		const searchParams = new URLSearchParams(urlObject.search);
		const itemId = searchParams.get('id') as string;
		db.getDocumentById('transactions', itemId).then(data => {
			setTransaction(data);
		})
	}, [])

	return <div className={style.transaction}>
		<h1>Заявка на обмен</h1>
		{
			transaction &&
			<TransactionContent
				fromCurrency={{ name: transaction.fromCurrency.name, code: transaction.fromCurrency.code }}
				toCurrency={{ name: transaction.toCurrency.name, code: transaction.toCurrency.code }}
				created={convertTimestamp(transaction.created)}
				rateFixed={convertTimestamp(transaction.created)}
				status={transaction.status}
				send={transaction.receive}
				receive={transaction.receive}
				walletFrom={transaction.wallet}
				walletTo="asdfasdfqwerewqrwqefasd"
			/>
		}

	</div>
}



export default TransactionPage