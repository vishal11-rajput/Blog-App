import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { UserContext } from "../UserContext";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {setUserInfo} = useContext(UserContext)


  const loginHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
    });

    if(res.status!==200){
      alert('Login Failed')
     
    }
    else{
      res.json().then(userInfo => {
        setUserInfo(userInfo)
      })
      alert('Login Success')
      navigate('/')
    }
  };
  return (
    <>
      <form className="login" onSubmit={loginHandler}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value, username);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
