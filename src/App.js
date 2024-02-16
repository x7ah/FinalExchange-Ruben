
import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import MyHeader from "./components/MyHeader";
import MyExchangeForm from "./components/MyExchangeForm";
import MyExchangeList from "./components/MyExchangeList";

const initialExchanges = [
  {
    id: 1001,
    codOri: "EUR",
    codDes: "USD",
    amount: 20,
  },
  {
    id: 1002,
    codOri: "USD",
    codDes: "JPY",
    amount: 20,
  },
];

function App() {
  const [exchanges, setExchanges] = useState(initialExchanges);

  const handleAddExchange = (newExchange) => {
    setExchanges([...exchanges, newExchange]);
  };

  const handleOnDeleteExchange = (id) => {
    setExchanges(exchanges.filter((e) => e.id !== id));
  };

  return (

    <div>
      <MyHeader />
      <MyExchangeForm />
      <MyExchangeList exchanges={exchanges}/>
      <MyExchangeForm onAddExchange={handleAddExchange} />
      <MyExchangeList
        exchanges={exchanges}
        onDeleteExchange={handleOnDeleteExchange}
      />
    </div>
  );
}
export default App;