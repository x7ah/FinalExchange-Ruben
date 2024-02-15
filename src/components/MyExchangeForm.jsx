import React, { useState } from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import "./styles/MyExchangeForm.css";
import CurrencyComboBoxCustom from "./CurrencyComboBoxCustom";
import currencies from "../currencies";

export default function MyExchangeForm() {
  const [selectedOriginCurrency, setSelectedOriginCurrency] = useState(null);
  const [selectedDestinationCurrency, setSelectedDestinationCurrency] =
    useState(null);

  const handleSelectOriginCurrency = (currency) => {
    setSelectedOriginCurrency(currency);
  };

  const handleSelectDestinationCurrency = (currency) => {
    setSelectedDestinationCurrency(currency);
  };

  return (
    <form className="section">
      <MyInput type="number" title="Select an Amount" label="Amount" />
      <CurrencyComboBoxCustom
        currencies={currencies}
        onSelectCurrency={handleSelectOriginCurrency}
        label={"Origin Currency:"}
      />

      <span>
        <i class="ri-arrow-right-line"></i>
      </span>

      <CurrencyComboBoxCustom
        currencies={currencies}
        onSelectCurrency={handleSelectDestinationCurrency}
        label="Destination Currency:"
      />

      <MyButton title="Add to List" />
    </form>
  );
}