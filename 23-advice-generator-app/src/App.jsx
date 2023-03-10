import "./App.scss";
import Card from "./components/Card";
import mobileDividerImg from "./images/pattern-divider-mobile.svg";
import desktopDividerImg from "./images/pattern-divider-desktop.svg";
import iconDiceImg from "./images/icon-dice.svg";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const urlApi = "https://api.adviceslip.com/advice";

  useEffect(() => {
    fetch(urlApi + "/71")
      .then((res) => res.json())
      .then((data) => setQuote(data.slip));
  }, []);

  const handleRandomButton = () => {
    fetch(urlApi, { method: "GET", cache: "reload" })
      .then((res) => res.json())
      .then((data) => setQuote(data.slip));
  };

  return (
    <div className="App">
      <main>
        <Card
          mobileDividerImg={mobileDividerImg}
          desktopDividerImg={desktopDividerImg}
          iconDiceImg={iconDiceImg}
          quote={quote}
          randomButton={handleRandomButton}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
