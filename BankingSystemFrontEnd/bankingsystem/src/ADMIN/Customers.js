import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import FetchToken from '../TOKEN/FetchToken';
import Users from './Users';

export default function Customers(props) {
    const [customers, setCustomers] = useState([]);
    const config = { headers: { "Authorization": `Bearers ${FetchToken()}` } }

    const getAllCustomers = () => {
        axios.get("http://localhost:8080/api/v1/users/customers")
            .then((res) => {
                setCustomers(res.data);
            }).catch((e) => {
                console.error();
            })
    }


    const customerList = customers.map(c => {
        return (
            <Link to={`${c.id}`} key={c.id}>
                <Users id={c.id} key={c.id} firstName={c.firstName} lastName={c.lastName} />
            </Link>
        )
    })


    useEffect(() => {
        getAllCustomers();
    }, [])
    return (
        <div>
            {customerList}
        </div>
    )
}
