import "./App.css";
import Header from "./components/Header";

import "@fontsource/commissioner/400.css";
import "@fontsource/commissioner/500.css";
import "@fontsource/commissioner/700.css";
import BambooMonitor from "./components/BambooMonitor";
import Stats from "./components/Stats";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BambooMonitor />
        <Stats />
        <About />
      </main>
    </div>
  );
}

export default App;
