import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Address from '../../ADDRESS/Address'
import Accounts from '../../ADMIN/Accounts'
import AddBanker from '../../ADMIN/AddBanker'
import BankerDetails from '../../ADMIN/BankerDetails'
import Bankers from '../../ADMIN/Bankers'
import CustomerDetails from '../../ADMIN/CustomerDetails'
import Customers from '../../ADMIN/Customers'
import ManageBanker from '../../ADMIN/ManageBanker'
import TransactionDetails from '../../ADMIN/TransactionDetails'
import AddAccount from '../../BANKER/AddAccount'
import AddCustomer from '../../BANKER/AddCustomer'
import ManageCustomer from '../../BANKER/ManageCustomer'
import DepositMoney from '../../CUSTOMER/DepositMoney'
import ViewSavingOrChecking from '../../CUSTOMER/ViewSavingOrChecking'
import ViewTransactionHistroy from '../../CUSTOMER/ViewTransactionHistroy'
import WithdrawMoney from '../../CUSTOMER/WithdrawMoney'
import HomePage from '../../HOMEPAGE/HomePage'
import LogInPage from '../../LOGINPAGE/LogInPage'
import Teams from '../../TEAMS/Teams'

export default function PageRoutes(props) {


    return (
        <div>
            <Routes>

                {/* HomePage */}
                <Route path="/" element={<Navigate to="homepage" />}></Route>
                <Route path="homepage">
                    <Route index element={<HomePage />} />

                </Route>

                {/* ADMIN */}

                {/* This is how to view Bankers and their Details */}
                <Route path="viewbankers">
                    <Route index element={<Bankers />} />
                    <Route path=":id" element={<BankerDetails />}></Route>
                </Route>

                {/* This is how to view customers and their Details */}
                <Route path="viewcustomers">
                    <Route index element={<Customers />} />
                    <Route path=":id" element={<CustomerDetails />}></Route>
                </Route>

                {/* This is how to view accounts and their Transactions */}
                <Route path="viewaccounts">
                    <Route index element={<Accounts />} />
                    <Route path=":id" element={<TransactionDetails />}></Route>
                </Route>


                {/* This is how to add a banker */}
                <Route path="addbanker" element={<AddBanker />}></Route>
                {/* This is how to manage a banker */}
                <Route path="managebanker/:id" element={<ManageBanker />}></Route>


                {/* BANKER */}

                {/* This is how to add a customer */}
                <Route path="addcustomer" element={<AddCustomer />}></Route>

                {/* This is how to add an account */}
                <Route path="addaccount/:id" element={<AddAccount />}></Route>

                {/* This is how to view customers and their details */}
                <Route path="viewcustomerinfo">
                    <Route index element={<Customers />} />
                    <Route path=":id" element={<CustomerDetails />}></Route>
                </Route>

                {/* This is how to manage a customer */}
                <Route path="managecustomer/:id" element={<ManageCustomer />}></Route>


                {/* CUSTOMER */}
                <Route path="viewbalance" element={<ViewSavingOrChecking />}></Route>
                <Route path="deposit" element={<DepositMoney />}></Route>
                <Route path="withdraw" element={<WithdrawMoney />}></Route>
                <Route path="viewtransaction" element={<ViewTransactionHistroy />}></Route>


                {/* log in */}
                <Route path="login" element={<LogInPage />}></Route>
                <Route path='address' element={<Address/>}></Route>
                <Route path='teams' element={<Teams/>}></Route>
               




            </Routes>
        </div>
    )
}
