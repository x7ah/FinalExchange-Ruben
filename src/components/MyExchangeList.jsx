import React from "react";
import "./styles/MyExchangeList.css";
import MyListItem from "./MyListItem";

export default function MyExchangeList({ exchanges, onDeleteExchange }) {
  return (
    <div className="section list">
      {exchanges.map((exchange) => (
        <MyListItem exchange={exchange} onDeleteExchange={onDeleteExchange}/>
      ))}
    </div>
  );
}