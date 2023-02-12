import "./App.css";
import Header from "./components/Header";

import "@fontsource/commissioner/400.css";
import "@fontsource/commissioner/500.css";
import "@fontsource/commissioner/700.css";
import BambooMonitor from "./components/BambooMonitor";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BambooMonitor />
      </main>
    </div>
  );
}

export default App;
