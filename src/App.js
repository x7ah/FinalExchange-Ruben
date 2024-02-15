
import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import MyHeader from "./components/MyHeader";
import MyExchangeForm from "./components/MyExchangeForm";
import MyExchangeList from "./components/MyExchangeList";

const initialExchanges = [
  {
    id: 1001,
    codOrigen: "EUR",
    codDest: "USD",
    amount: 2,
  },
  {
    id: 1002,
    codOrigen: "USD",
    codDest: "JPY",
    amount: 2,
  },
];

function App() {
  const [exchanges, setExchanges] = useState(initialExchanges);

  return (

    <div>
      <MyHeader />
      <MyExchangeForm />
      <MyExchangeList/>
    </div>
  );
}
export default App;