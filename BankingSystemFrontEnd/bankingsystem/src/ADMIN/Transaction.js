import React from 'react'

export default function Transaction(props) {
    return (

        <div id='filterTrans' >
            <ul>
                <li>
                    <div id="transbox">
                        <h1>Transaction Date: {props.transactionDate}</h1>
                        <h1>Amount: {props.amount}</h1>
                        <h1>Transaction Type: {props.transactionType}</h1>
                        <h1>Transaction Time:{props.transactionTime} </h1>
                        <h1>Transaction Balance: {props.transactionBalance}</h1>
                    </div>
                </li>
            </ul>
        </div>

    )
}
