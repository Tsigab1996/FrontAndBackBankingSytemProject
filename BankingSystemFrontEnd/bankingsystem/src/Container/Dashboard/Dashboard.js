import React, { createContext, useContext, useState } from 'react'
import { LoginContext } from '../../CONTEXT/LoginContext';

import Header from '../Header/Header'
import PageRoutes from './PageRoutes'



export default function Dashboard() {


  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin);

  return (

    <React.Fragment>

      <LoginContext.Provider value={[isLogin, setIsLogin]}>
        <div className='header'>
          <Header />

        </div>
        <div className="bankPages">
          <PageRoutes />

        </div>

      </LoginContext.Provider>

    </React.Fragment>
  )
}
