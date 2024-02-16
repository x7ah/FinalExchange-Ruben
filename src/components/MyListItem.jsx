import React from "react";
import "./styles/MyListItem.css";
import currencies from "../currencies";

export default function MyListItem({ exchange, onDeleteExchange }) {

  const handleDelete = ()=>{
    onDeleteExchange(exchange.id)
  }

  return (
    <div className="item">
      <div className="ori">
        <img
          src={`./img/flags/${currencies[exchange.codOri].flag}`}
          style={{
            width: "40px",
          }}
        />
        <small>{currencies[exchange.codOri].name}</small>
        <small>{`${exchange.amount} ${exchange.codOri}`}</small>
      </div>
      <button className="deleteBtn" onClick={handleDelete}>
        <i className="ri-delete-bin-line"></i>
      </button>
      <div className="des">
        <img
          src={`./img/flags/${currencies[exchange.codDes].flag}`}
          style={{
            width: "40px",
          }}
        />
        <small>{currencies[exchange.codDes].name}</small>
        <small>
          {`${exchange.amount * currencies[exchange.codDes].exchangeRate} ${exchange.codDes}`}
        </small>
      </div>
    </div>
  );
}
 