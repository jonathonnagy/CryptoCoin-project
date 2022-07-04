import React, { useEffect, useState } from "react";
import CoinCard from "../components/CoinCard";
import http from "axios";
import { useAuth } from "../providers/auth";
import MyCoinCard from "../components/MyCoinCard";
import '../pages/styles/MyCoins.css'

const MyCoins = () => {
  const { user, reloadPage } = useAuth();
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

  
  useEffect(() => {
    getSavedCoinsDB();
  }, [reloadPage]);
  

  // console.log(savedCoinData);
  return (
    <>
      <div className="wrapper-bg">
      <h1>MyCoins Collection</h1>
        <div className="top-wrapper top-wrapper-mycoin">
          <div className="card-container">
            {coinId.map((id, index) => (
              <MyCoinCard key={index} id={id} handler={setState} />
              ))}
          </div>
        </div>
              <div className="space-cat-img"></div>
      </div>
    </>
  );
};

export default MyCoins;
