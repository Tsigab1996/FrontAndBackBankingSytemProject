import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FetchToken from '../TOKEN/FetchToken';
import Transaction from './Transaction';

export default function TransactionDetails(props) {

    const param = useParams();
    const config = { headers: { "Authorization": `Bearers ${FetchToken()}` } }


    const [transactions, setTransactions] = useState([])



    const getAllTransactions = () => {
        axios.get("http://localhost:8080/api/v1/transactions/transactions/" + param.id)
            .then((res) => {
                setTransactions(res.data);
            }).catch(() => {
                console.error();
            })
    }


    const transactionsList = transactions.map(t => <Transaction id={t.id} key={t.id} transactionDate={t.transactionDate}
        transactionTime={t.transactionTime} amount={t.amount} transactionType={t.transactionType} transactionBalance={t.transactionBalance} />)

    useEffect(() => {
        getAllTransactions();
    }, [param.id])
    return (
        <div id="transdetails">
            {transactionsList}
        </div>
    )
}
