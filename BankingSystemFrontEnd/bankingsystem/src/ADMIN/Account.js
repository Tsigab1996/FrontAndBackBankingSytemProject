import React from 'react'
import './Admin.css'

export default function Account(props) {
    return (

        <div id='account'>
            <ul>
                <li>
                    <div id="accountbox">
                        <h1> {props.accountNumber}</h1>
                        <h1> {props.balance}</h1>
                        <h1> {props.createdAt}</h1>
                        <h1>{props.accountType}</h1>
                    </div>
                </li>
            </ul>
        </div>

    )
}
