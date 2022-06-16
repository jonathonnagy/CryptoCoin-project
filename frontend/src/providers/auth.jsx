import React,{ useContext, createContext, useState } from "react";
import http from 'axios'
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const googleAuth = (e) => {
	e.preventDefault()
    const googleBaseUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
    const searchParams = new URLSearchParams()
    searchParams.append('client_id', '651816047225-1us03r4vchvce7h51t0c49f4u0ip7ubm.apps.googleusercontent.com')
    searchParams.append('scope', 'openid')
    searchParams.append('redirect_uri', 'http://localhost:3000/callback')
    searchParams.append('response_type', 'code')
    // searchParams.append('prompt', 'select_account')

    const fullUrl = googleBaseUrl + '?' + searchParams.toString()
    window.open(fullUrl,"_self")
  };

  const socialLogin = async (code, provider) => {
    try {
      const response = await http.post('http://localhost:4000/api/user/login',{code, provider})
      console.log(response)
      setToken(response.data)
    } catch (error) {
		console.log(error)
      setToken(null)
    }
  }
  
  const logout = () => {
    setToken(null)
  };

  const contextValue = {token, googleAuth, logout, socialLogin }

  return (
	<AuthContext.Provider value={contextValue}>
		{children}
	</AuthContext.Provider>

  )
};

const useAuth = () => {
	const context = useContext(AuthContext)
  if(!context) throw new Error('add authProvider to root')
  return context
}

export {AuthProvider, useAuth};
