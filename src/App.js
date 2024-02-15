
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
    amount: 20.9045,
  },
  {
    id: 1002,
    codOri: "USD",
    codDes: "JPY",
    amount: 20.9045,
  },
];

function App() {
  const [exchanges, setExchanges] = useState(initialExchanges);

  return (

    <div>
      <MyHeader />
      <MyExchangeForm />
      <MyExchangeList exchanges={exchanges}/>
    </div>
  );
}
export default App;