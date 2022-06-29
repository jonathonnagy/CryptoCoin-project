import React from "react";
import "../components/Popup.css";

const Popup = ({ coinInfo, handleClose }) => {
  const addToMyCoin = () => {};

  return (
    <div className="popup-box">
      <div className="close-background" onClick={handleClose}></div>
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>

        <div className="data-wrapper">
          <div className="left">
            <img src={coinInfo.logo} alt="" />
            <button onClick={addToMyCoin}>Add to MyCoin</button>
          </div>
          <div className="right">
            <h1>{coinInfo.name}</h1>
            <p>{coinInfo.description}</p>
            <div className="coin-details">
              <p>data: 50%</p>
              <p>data: 50%</p>
              <p>data: 50%</p>
              <p>data: 50%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
