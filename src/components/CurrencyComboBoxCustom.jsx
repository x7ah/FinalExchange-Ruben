import React, { useState } from "react";
import "./styles/MyInput.css";

const CurrencyComboBoxCustom = ({ currencies, onSelectCurrency, label }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleCurrencyClick = (currency) => {
    setSelectedCurrency(currency);
    onSelectCurrency(currency);
    setShowOptions(false);
  };

  return (
    <label>
      {label}
      <div className="input" onClick={() => setShowOptions(!showOptions)}>
        {selectedCurrency ? (
          <>
            <img
              src={`/img/flags/${currencies[selectedCurrency].flag}`}
              alt={selectedCurrency}
              style={{ marginRight: "5px", width: "25px", height: "18px" }}
            />
            {currencies[selectedCurrency].name}
          </>
        ) : (
          "Select a Currency"
        )}
      </div>

      {showOptions && (
        <div
          style={{
            maxHeight: 200,
            width: 180,
            overflowY: "scroll",
            padding: ".4em 1em",
            marginTop: "4em",
            position: "absolute",
            zIndex: "1",
            backgroundColor: '#fff',
            boxShadow: '0 10px 10px #0004',
          }}
        >
          {Object.keys(currencies).map((currencyCode) => (
            <div
              key={currencyCode}
              onClick={() => handleCurrencyClick(currencyCode)}
              style={{
                padding: "5px",
                cursor: "pointer",
              }}
            >
              <img
                src={`/img/flags/${currencies[currencyCode].flag}`}
                alt={currencyCode}
                style={{ marginRight: "5px", width: "25px", height: "18px" }}
              />
              {currencies[currencyCode].name}
            </div>
          ))}
        </div>
      )}
    </label>
  );
};

export default CurrencyComboBoxCustom;