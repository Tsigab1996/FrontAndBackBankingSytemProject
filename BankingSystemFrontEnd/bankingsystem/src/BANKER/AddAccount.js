import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddAccount() {
    const form = useRef();
    let navigate = useNavigate();


    let saveAccount = (e) => {
        e.preventDefault();
        let formData = form.current;

        const data = {
            accountNumber: formData['accountNumber'].value,
            balance: formData['balance'].value,
            createdAt: formData['createdAt'].value,
            accountType: formData['accountType'].value,

        }



        axios.post("http://localhost:8080/api/v1/accounts/save", data)
            .then(response => {
                navigate("/");
            }).catch(err => {
                alert(err);
            })
    }

    return (
        <div className="NewAccount">

            <form id='addaccount' ref={form}>
                <h1>Add an Account</h1>

                <label>Account Number</label>
                <input type="text"
                    label={'accountNumber'}
                    name={'accountNumber'}
                />

                <label>Balance</label>
                <input type="text"
                    label={'balance'}
                    name={'balance'}
                />

                <label>Account Type</label>
                <input type="text"
                    label={'accountType'}
                    name={'accountType'}
                />

                <button id="addaccountbtn" onClick={saveAccount}>Add Account</button>
            </form>

        </div>
    );

}
