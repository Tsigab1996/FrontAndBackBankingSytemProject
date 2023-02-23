import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FetchToken from '../TOKEN/FetchToken';

export default function CustomerDetails(props) {

    const param = useParams();
    const navigate = useNavigate();
    const config = { headers: { "Authorization": `Bearers ${FetchToken()}` } }

    const [customerObj, setCustomerObj] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        accounts: [],

    });

    const getCustomerObjById = () => {
        axios.get("http://localhost:8080/api/v1/users/get/" + param.id)
            .then((res) => {
                setCustomerObj(res.data);
            }).catch(() => {
                console.error();
            })
    }

    const deleteCustomer = () => {
        axios.delete("http://localhost:8080/api/v1/users/delete/" + param.id)
            .then(() => {
                console.log("successfully deleted")
            }).catch(() => {
                console.log("Not deleted")
            })
    }


    const cancelCustomer = () => {
        navigate('/')
    }

    const updateCustomer = () => {
        navigate("/managecustomer/" + param.id);
    }

    useEffect(() => {
        getCustomerObjById();
    }, []);

    return (
        <div id="customerdetails">
            <div>
                <h1>First Name: {customerObj.firstName}</h1>
                <h1>Last Name:{customerObj.lastName}</h1>
                <h1>PhoneNumber:{customerObj.phoneNumber}</h1>
                <h1>Email:{customerObj.email}</h1>
                <h1>PassWord: {customerObj.password}</h1>
                <h1>Accounts:</h1>
                <ul>
                    {customerObj.accounts.map(a => <li>AccontNumber:   {a.accountNumber}****
                        AccountBalance: {a.balance}****CreatedAt: {a.createdAt}****AccountType: {a.accountType} </li>)}
                </ul>
            </div>
            <div>
                <button id="addbankerbtn" onClick={deleteCustomer}>Delete</button>
                <button id="addbankerbtn" onClick={updateCustomer}>Manage Customer</button>
                <button id="addbankerbtn" onClick={cancelCustomer}>Back</button>
            </div>
        </div>
    )
}
