

import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import jwt_decode from "jwt-decode";
import { LoginContext } from '../../CONTEXT/LoginContext';

export default function Header() {


  const token = localStorage.getItem("token");
  const roles = localStorage.getItem("roles");



  const [isLogin, setIsLogin] = useContext(LoginContext);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    navigate('/login')
    setIsLogin(false)
  }


  return (
    <div>
      <header>
        <nav id='navigate'>
          <ul>



            <li><Link to="/">HomePage</Link></li>



            {!isLogin ?
              <li><Link to="/login">LogIn</Link></li> : <li id="logout" onClick={LogoutHandler}>Logout</li>

            }


            {(isLogin && roles.includes("ADMIN")) ?

              <>
                <li><Link to="/viewbankers">Bankers</Link></li>
                <li><Link to="/viewcustomers"> Customers</Link></li>
                <li><Link to="/viewaccounts">Accounts</Link></li>
                <li><Link to="/addbanker">Add Banker</Link></li>
                <li><Link to="/managebanker">ManageBanker</Link></li>
              </>

              : null
            }


            {(isLogin && roles.includes("BANKER")) ?

              <>

                <li><Link to="/addcustomer">Add Customer</Link></li>
                <li><Link to="/viewcustomerinfo">View Customer Info</Link></li>
                <li><Link to="/managecustomer">Manage Customer</Link></li>

              </>

              : null
            }


            {(isLogin && roles.includes("CUSTOMER")) ?

              <>
                <li><Link to="/viewbalance">View Balance</Link></li>
                <li><Link to="/deposit">Deposit</Link></li>
                <li><Link to="/withdraw">Withdraw</Link></li>
                <li><Link to="/viewtransaction">View Transaction</Link></li>
              </>

              : null
            }


            <li><Link to="/address">Contact</Link></li>
            <li><Link to="/teams"> <div id="imgTsigab">
              <img src='https://msd.miu.edu/wp-content/uploads/Tsigab-MSD-Student.jpg' width="80px" height="60px" alt='TsigabPic' />
            </div></Link></li>











            {/*   
            <li><Link to="/viewbankers">Bankers</Link></li>
            <li><Link to="/viewcustomers"> Customers</Link></li>
            <li><Link to="/viewaccounts">Accounts</Link></li>
            <li><Link to="/addbanker">Add Banker</Link></li>
            <li><Link to="/managebanker">ManageBanker</Link></li>



            <li><Link to="/addcustomer">Add Customer</Link></li>
            <li><Link to="/viewcustomerinfo">View Customer Info</Link></li>
            <li><Link to="/managecustomer">Manage Customer</Link></li>


            <li><Link to="/viewbalance">View Balance</Link></li>
            <li><Link to="/deposit">Deposit</Link></li>
            <li><Link to="/withdraw">Withdraw</Link></li>
            <li><Link to="/viewtransaction">View Transaction</Link></li> 
            <li><Link to="/login">LogIn</Link></li> 
 */}

          </ul>
        </nav>
      </header>
    </div>
  )
}
