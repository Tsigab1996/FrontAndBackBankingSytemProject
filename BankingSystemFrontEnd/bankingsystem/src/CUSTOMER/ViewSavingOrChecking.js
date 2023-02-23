import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Customer.css'

export default function ViewSavingOrChecking() {

    const [criteria, setCriteria] = useState();
    const [inputId, setInputId] = useState();
    const [amount, setAmount] = useState();





    let viewSavingOrChecking = () => {
        if (criteria != null && inputId != null) {
            axios.get("http://localhost:8080/api/v1/users/filter/" + inputId, {
                params: {
                    value: criteria,
                }
            }).then((result) => {
                setAmount(result.data);

            }).catch(() => {
                console.error();
            });
        }

    }

    useEffect(() => {
        viewSavingOrChecking();
    }, [])


    return (
        <div>
            <div id='viewbalance'>

                <label>InputUserID: </label>
                <input type="text" value={inputId} onChange={(e) => setInputId(e.target.value)} /><br /><br />

                <label>Account Type: </label>
                <select onChange={(e) => { setCriteria(e.target.value) }}>
                    <option value={'saving'}>viewSavingBalance</option>
                    <option value={'checking'}>viewCheckingBalance</option>
                </select><br /><br />


                <button id="viewbalancebtn" onClick={viewSavingOrChecking}>ViewBalance</button>
                {/* <button onClick={back}>back</button> */}

                <div >
                    {<label>Your Current Balance is: {amount}</label>}
                </div>

            </div>
        </div>
    )
}
