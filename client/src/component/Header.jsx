import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import { UserContext } from "../UserContext";

const Header = () => {
  const navigate = useNavigate();
  const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials: 'include',
    }).then(res => {
      res.json().then(userInfo => {
       setUserInfo(userInfo)
      })
    })

  },[])

  const logout = ()=>{
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    })
    setUserInfo(null);
    navigate('/login');
    alert('Logout Success')
    // window.location.reload();
  }

  const userName = userInfo?.username

  return (
    <div>
      <header>
        <Link to="/" className="logo">
          MY Blog
        </Link>
        <nav>
          {userName && (
            <>
            <Link to="/create">Create new Post</Link>
            <a onClick={logout}>Logout</a>
            </>
          )}
          {!userName && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
         
        </nav>
      </header>
    </div>
  );
};

export default Header;
