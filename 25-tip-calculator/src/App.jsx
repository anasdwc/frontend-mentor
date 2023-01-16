import "./App.css";
import Header from "./components/Header";

import logoBrand from "./assets/logo.svg";
import Body from "./components/Body";
import { useState } from "react";
import Footer from "./components/Footer";

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
    <div className="App flex w-screen flex-col items-center justify-center bg-light-grayish-cyan">
      <Header logoBrand={logoBrand} />
      <Body onClick={handleSelectTip} percentValue={tip} />
      <Footer />
    </div>
  );
}

export default App;
