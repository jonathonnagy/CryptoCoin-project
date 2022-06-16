import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate()
	const nav = (path) =>{
		console.log('routing in progress') //Barmilyen route elotti logika
		navigate(path)
	}

  return (
    <nav>
      <button onClick={() => nav("/")}>Browse</button>
      <button onClick={() => nav("/mycoins")}>MyCoins</button>
      {/* <button onClick={() => }>Logout</button> */}
      {/* <button onClick={() => navigate("/profile")}>Profile</button> */}
	  {/* <Link to='/profile'>Profile</Link> */}
    </nav>
  );
};

export default Navbar;
