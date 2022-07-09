import React, { useEffect, useState } from "react";
import http from "axios";

import { useAuth } from "../providers/auth";
import { useNavigate } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resData, setResData] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [error, setError] = useState(null)
  // const [client, setClient] = useState(null)
  // const [redirectUri, setRedirectUri] = useState(null)

  const { googleAuth, user } = useAuth();

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await http.post(
        "http://localhost:4000/api/user/form_login",
        {
          username,
          password,
          // client,
          // redirectUri
        }
      );
      console.log(response.data);
      setResData(response.data.message);
      // const code = response.data.code
      // window.location.href = redirectUri + "?code=" + code
    } catch (error) {
      setResData(error.response.data.error);
    }
  };

  useEffect(() => {
    if(user?.userId) navigate('/')
    // const _client = searchParams.get('client_id')
    // const _redirect_uri = searchParams.get('redirect_uri')
    // if(!_client) {
    //   return setError("Missing params - client_id")
    // }
    // if(!_redirect_uri) {
    //   return setError("Missing params - redirect_uri")
    // }
    // setClient(_client)
    // setRedirectUri(_redirect_uri)
  }, [])
  
  

  return (
    <>
      <h1>Login</h1>
      {/* {error && <div>{error}</div>}


      {!error && <div>{error}</div>}  berakni az alatta levo html-t */}
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

        <button onClick={(e) => login(e)}>Sign in</button>
        <button onClick={googleAuth}>Sign in with Google</button>
        {/* <button onClick={(e) => formSignup(e)}>Signup with Facebook</button> */}
        <p>{resData}</p>
      </form>
      <p>
        Don't have an account?{" "}
        <button onClick={() => navigate("/registrate")}>Sign up here</button>.
      </p>
    </>
  );
};

export default Login;
