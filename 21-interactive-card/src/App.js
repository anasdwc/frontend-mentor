import "./App.scss";
import Banner from "./components/Banner";
import Form from "./components/Form";
import BackgroundDesktop from "./images/bg-main-desktop.png";
import BackgroundMobile from "./images/bg-main-mobile.png";
import CardFront from "./images/bg-card-front.png";
import CardBack from "./images/bg-card-back.png";
import CardLogo from "./images/card-logo.svg";

function App() {
  return (
    <div className="App">
      <Banner
        bgDesktop={BackgroundDesktop}
        bgMobile={BackgroundMobile}
        cardBack={CardBack}
        cardFront={CardFront}
        cardLogo={CardLogo}
      />
      <Form />
    </div>
  );
}

export default App;
