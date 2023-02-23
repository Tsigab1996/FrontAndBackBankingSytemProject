import React, { useContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";
import './Login.css'
import { LoginContext } from "../CONTEXT/LoginContext";



const LogInPage = () => {

  const [isLogin, setIsLogin] = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()



  const handleLogin = (event) => {
    event.preventDefault()
    getToken();
    navigate("/")
  };
  const loginData = {
    email: email,
    password: password
  };



  let getToken = () => {

    axios.post("http://localhost:8080/api/v1/authenticate", loginData)
      .then(res => {

        window.localStorage.setItem('token', JSON.stringify(res.data.accessToken));
        window.localStorage.setItem('roles', JSON.stringify(res.data.roles));
        console.log('token', localStorage.getItem('token'))
        console.log("roles", localStorage.getItem("roles"))
        setIsLogin(true);


      }).catch(() => {
        console.error();

      });
  }


  return (
    <div>
      <form id="login" onSubmit={handleLogin}>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)} /><br /><br />



        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)} /><br /><br />

        <button id="loginbtn" type="submit"> LogIn </button>
        <button id="loginbtn" type="submit"> Register </button>

      </form>
    </div>
  );
};

export default LogInPage;