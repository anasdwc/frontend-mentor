import Header from "./components/Header";

import logoBrand from "./assets/logo.svg";
import Body from "./components/Body";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [tip, setTip] = useState();
  const [bill, setBill] = useState();
  const [people, setPeople] = useState();

  const handleSelectTip = ({ target }) => {
    if (target.id === "customTip") {
      setTip(target.value);
    } else {
      const percentValue = target.innerText.split("%")[0];
      setTip(percentValue);
    }
  };

  const handleReset = () => {
    setTip("");
    setPeople("");
    setBill("");
  };

  return (
    <div className="App flex flex-col items-center justify-center bg-light-grayish-cyan lg:h-screen">
      <Header logoBrand={logoBrand} />
      <Body
        onClick={handleSelectTip}
        percentValue={tip}
        handleBill={({ target }) => setBill(target.value)}
        handlePeople={({ target }) => setPeople(target.value)}
        billValue={bill}
        peopleValue={people}
        handleReset={handleReset}
      />
      <Footer />
    </div>
  );
}

export default App;
