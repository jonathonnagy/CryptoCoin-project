import React, { useEffect, useState } from "react";
import CoinCard from "../components/CoinCard";
import http from "axios";
import { useAuth } from "../providers/auth";
import MyCoinCard from "../components/MyCoinCard";
import '../index.css'

const MyCoins = () => {
  const { user } = useAuth();
  const [savedCoinsId, setSavedCoinsId] = useState([]);
  const [state, setState] = React.useState(0);

  const getSavedCoinsDB = async () => {
    try {
      const response = await http.get(
        "http://localhost:4000/api/user/get-saved",
        user
      );
      // console.log(response.data.coins);
      setSavedCoinsId(response.data.coins);
    } catch (err) {
      console.log(err);
    }
  };

  const coinId = savedCoinsId.map((elem) => elem.id);
  // console.log(coinId);
console.log('this is state: '+state)
  
  useEffect(() => {
    getSavedCoinsDB();
    console.log('reload')
    // getSavedFromApi();
  }, [state]);
  

  // console.log(savedCoinData);
  return (
    <>
      <div>MyCoins</div>
      <div className="bottom">
        <div className="bottom-wrapper">
          <div className="card-container">
            {coinId.map((id, index) => (
					<MyCoinCard key={index} id={id} handler={setState} />
					))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCoins;
