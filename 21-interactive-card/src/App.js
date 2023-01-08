import "./App.scss";
import Banner from "./components/Banner";
import Form from "./components/Form";
import BackgroundDesktop from "./images/bg-main-desktop.png";
import BackgroundMobile from "./images/bg-main-mobile.png";
import CardFront from "./images/bg-card-front.png";
import CardBack from "./images/bg-card-back.png";
import CardLogo from "./images/card-logo.svg";
import { useState } from "react";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [arr, setArr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [monthExp, setMonthExp] = useState(0);
  const [yearExp, setYearExp] = useState(0);
  const [cvc, setCvc] = useState(0);

  const handleConfirm = (e) => {
    console.log("Klik Konfirm");
  };

  const handleCardName = ({ target }) => setCardName(target.value);

  const handleCardNum = ({ target }) => {
    let lastDigit = Number(target.value) % 10;
    let indexDigit = target.value.length - 1;
    let newVal = [];

    const newArr = arr.map((item, i) => {
      if (i === indexDigit) {
        return (item = lastDigit);
      } else {
        return item;
      }
    });

    setArr(newArr);

    for (let i = 0; i < arr.length; i++) {}

    setCardNum(target.value);
  };

  return (
    <div className="App">
      <Banner
        bgDesktop={BackgroundDesktop}
        bgMobile={BackgroundMobile}
        cardBack={CardBack}
        cardFront={CardFront}
        cardLogo={CardLogo}
        cardName={cardName}
        cardNum={arr}
      />
      <Form
        cardName={cardName}
        cardNum={cardNum}
        handleCardName={handleCardName}
        handleCardNum={handleCardNum}
        handleConfirm={handleConfirm}
      />
    </div>
  );
}

export default App;
