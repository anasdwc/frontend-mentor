import "./App.css";
import Balance from "./components/Balance";
import Logo from "./images/logo.svg";
import Data from "./data/data.json";
import Summary from "./components/Summary";
import Footer from "./components/Footer";

function App() {
  const today = new Date().toDateString().split(" ")[0].toLowerCase();

  return (
    <div className="App max-w-sm">
      <main>
        <Balance logo={Logo} />
        <Summary data={Data} today={today} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
