import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import FetchToken from '../TOKEN/FetchToken';
import Users from './Users';

export default function Bankers(props) {
  const [bankers, setBankers] = useState([]);
  const config = { headers: { "Authorization": `Bearers ${FetchToken()}` } }

  const getAllBankers = () => {
    axios.get("http://localhost:8080/api/v1/users/bankers")
      .then((res) => {
        setBankers(res.data);
      }).catch((e) => {
        console.error();
      })
  }


  const bankersList = bankers.map(b => {
    return (
      <Link to={`${b.id}`} key={b.id}>
        <Users id={b.id} key={b.id} firstName={b.firstName} lastName={b.lastName} />
      </Link>
    )
  })



  useEffect(() => {
    getAllBankers();
  }, [])

  return (
    <div>
      {bankersList}
    </div>
  )
}
