import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Customer.css'

export default function DepositMoney() {

    const navigate = useNavigate();

    const [amount, setAmount] = useState();
    const [inputId, setInputId] = useState();

    console.log("Amount: " + amount);
    console.log("Id " + inputId);



    let ApplyDeposit = () => {
        if (amount != 0 && inputId != null) {
            axios.post("http://localhost:8080/api/v1/accounts/deposit/" + inputId, {
                amount: amount
            }).then((result) => {
                navigate('/')
            }).catch(() => {
                console.error();
            });
        }

    }



    return (
        <div>
            <div id="deposit">

                <label>Enter your AccountID: </label>
                <input type="text" value={inputId} onChange={(e) => setInputId(e.target.value)} /><br /><br />

                <label>Enter Balance: </label>
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} /><br /><br />

                <button id="depositbtn" onClick={ApplyDeposit}>Deposit</button>



            </div>
        </div>
    )
}
