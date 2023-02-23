import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FetchToken from '../TOKEN/FetchToken';
import './Admin.css'

export default function ManageBanker() {

    const param = useParams();
    const navigate = useNavigate();
    const form = useRef();
    const config = { headers: { "Authorization": `Bearers ${FetchToken()}` } }

    console.log(param);

    let [updatedBanker, setUpdatedBanker] = useState({});


    let getBanker = () => {
        axios.get("http://localhost:8080/api/v1/users" + param.id)
            .then((res) => setUpdatedBanker(res.data)).catch((e) => {
                console.error();
            })
    }


    //Managing or updating banker 
    const handleBanker = () => {
        const formData = form.current;

        let bankerData = {
            firstName: formData['firstName'].value,
            lastName: formData['lastName'].value,
            phoneNumber: formData['phoneNumber'].value,
            email: formData['email'].value,
            password: formData['password'].value,
        }

        axios.put("http://localhost:8080/api/v1/users/update" + param.id, bankerData)
            .then((res) => {
                navigate('/')
            }).catch("Data not updated")
    }


    //This will navigate this page to the home page
    const cancelBanker = () => {
        navigate('/')
    }

    useEffect(() => {
        getBanker();
    }, [])




    return (

        <div >
            <form id="managebanker" ref={form}>
                <h1>EDIT BANKER</h1>
                <div id='editbanker'>
                    <label>First Name: </label>
                    <input type="text"
                        label={'firstName'}
                        name={'firstName'}
                        value={updatedBanker.firstName} onChange={(e) => setUpdatedBanker(updatedBanker.firstName = e.target.value)}>
                    </input><br /><br />
                    <label>Last Name: </label>
                    <input type="text"
                        label={'lastName'}
                        name={'lastName'}
                        value={updatedBanker.lastName} onChange={(e) => setUpdatedBanker(updatedBanker = e.target.value)}>
                    </input><br /><br />
                    <label>Phone Number: </label>
                    <input type="text"
                        label={'phoneNumber'}
                        name={'phoneNumber'}
                        value={updatedBanker.phoneNumber} onChange={(e) => setUpdatedBanker(updatedBanker.phoneNumber = e.target.value)}>
                    </input><br /><br />
                    <label>Email: </label>
                    <input type="text"
                        label={'email'}
                        name={'email'}
                        value={updatedBanker.email} onChange={(e) => setUpdatedBanker(updatedBanker.email = e.target.value)}>
                    </input><br /><br />
                    <label>Password: </label>
                    <input type="text"
                        label={'password'}
                        name={'password'}
                        value={updatedBanker.password} onChange={(e) => setUpdatedBanker(updatedBanker.password = e.target.value)}>
                    </input><br /><br />
                </div>


                <button id="managebtn" onClick={handleBanker}>update</button>
                <button id="managebtn" onClick={cancelBanker}>Back</button>


            </form>

        </div>
    )
}
