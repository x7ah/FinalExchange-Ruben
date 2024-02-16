import React, { useState } from "react";
import MyInput from "./MyInput";
import "./styles/MyExchangeForm.css";
import "./styles/MyButton.css";
import CurrencyComboBoxCustom from "./CurrencyComboBoxCustom";
import currencies from "../currencies";

export default function MyExchangeForm({ onAddExchange }) {
  const [selectedOriginCurrency, setSelectedOriginCurrency] = useState(null);
  const [selectedDestinationCurrency, setSelectedDestinationCurrency] =
    useState(null);
  const [selectedAmount, setSelectedAmount] = useState(0);

  const handleAddExchange = () => {

    if (
      !selectedOriginCurrency ||
      !selectedDestinationCurrency ||
      !selectedAmount
    ) {
      alert("Fill All Fields");
      return;
    }

    const newExchange = {
      id: Date.now(),
      codOri: selectedOriginCurrency,
      codDes: selectedDestinationCurrency,
      amount: selectedAmount,
    };
    
    onAddExchange(newExchange);
  };

  const handleSelectOriginCurrency = (currency) => {
    setSelectedOriginCurrency(currency);
  };

  const handleSelectDestinationCurrency = (currency) => {
    setSelectedDestinationCurrency(currency);
  };

  return (
    <form className="section">
      <MyInput
        type="number"
        title="Select an Amount"
        label="Amount"
        onChange={(e) => setSelectedAmount(e.target.value)}
      />
      <CurrencyComboBoxCustom
        currencies={currencies}
        onSelectCurrency={handleSelectOriginCurrency}
        label={"Origin Currency:"}
      />

      <span>
        <i className="ri-arrow-right-line"></i>
      </span>

      <CurrencyComboBoxCustom
        currencies={currencies}
        onSelectCurrency={handleSelectDestinationCurrency}
        label="Destination Currency:"
      />
      <button
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          handleAddExchange();
        }}
      >
        Add to List
      </button>
    </form>
  );
}