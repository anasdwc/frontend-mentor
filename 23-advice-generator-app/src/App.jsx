import "./App.scss";
import Card from "./components/Card";
import mobileDividerImg from "./images/pattern-divider-mobile.svg";
import desktopDividerImg from "./images/pattern-divider-desktop.svg";
import iconDiceImg from "./images/icon-dice.svg";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <Card
          mobileDividerImg={mobileDividerImg}
          desktopDividerImg={desktopDividerImg}
          iconDiceImg={iconDiceImg}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
