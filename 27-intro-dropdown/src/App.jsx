import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";

import "@fontsource/epilogue/500.css";
import "@fontsource/epilogue/700.css";
import { useState } from "react";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="App overflow-hidden bg-almost-white">
      <Header
        isCollapsed={isCollapsed}
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
