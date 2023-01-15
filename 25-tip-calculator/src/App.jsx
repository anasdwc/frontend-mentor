import "./App.css";
import Header from "./components/Header";

import logoBrand from "./assets/logo.svg";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  const [tip, setTip] = useState();

  const handleSelectTip = ({ target }) => {
    if (target.id === "customTip") {
      setTip(target.value);
    } else {
      const percentValue = target.innerText.split("%")[0];
      setTip(percentValue);
    }
  };

  return (
    <div className="App">
      <Header logoBrand={logoBrand} />
      <Body onClick={handleSelectTip} percentValue={tip} />
    </div>
  );
}

export default App;
