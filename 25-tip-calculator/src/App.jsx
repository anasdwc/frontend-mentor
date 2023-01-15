import "./App.css";
import Header from "./components/Header";

import logoBrand from "./assets/logo.svg";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header logoBrand={logoBrand} />
      <Body />
    </div>
  );
}

export default App;
