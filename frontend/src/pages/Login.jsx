import React, { useState } from "react";
import http from 'axios';

import { useAuth } from "../providers/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
	const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resData, setResData] = useState('');

  const { googleAuth } = useAuth();

  const formSignup = async (e) => {
    e.preventDefault();
    try {
		const response = await http.post(
			"http://localhost:4000/api/user/form_login",
			{
			  username,
			  password
			}
		  );
		  console.log(response)
		  setResData(response.data.message);
	} catch (error) {
		setResData(error.response.data.error)
	}
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          autoComplete="on"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button onClick={(e) => formSignup(e)}>Signup</button>
        <button onClick={googleAuth}>Signup with Google</button>
        {/* <button onClick={(e) => formSignup(e)}>Signup with Facebook</button> */}
	  <p>{resData}</p>
      </form>
	  <p>Don't have an account? <button onClick={()=>navigate('/registrate')}>Sign up here</button>.</p>
    </>
  );
};

export default Login;
