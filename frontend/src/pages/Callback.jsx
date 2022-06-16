import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/auth";

const Callback = () => {
	const { socialLogin } = useAuth();
	const navigate = useNavigate()
  
	useEffect(() => {
		const loginWithCode = async () =>{
			const params = new URLSearchParams(window.location.search);
			const code = params.get("code");
			// console.log(code)
	
			if (code) {
				await socialLogin(code, "google");
				// return navigate('/profile')
			}
			navigate('/')
		}
		loginWithCode()
	  // eslint-disable-next-line
	  }, []);

  return (

	<div>
		<h1>Callback page</h1>
		<p>Loadig</p>
	</div>
  )
}

export default Callback