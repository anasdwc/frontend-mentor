import "@fontsource/commissioner/400.css";
import "@fontsource/commissioner/500.css";
import "@fontsource/commissioner/700.css";

import Header from "./components/Header";
import BambooMonitor from "./components/BambooMonitor";
import Stats from "./components/Stats";
import About from "./components/About";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(true);

  const toggleModal = () => setModal(!modal);

  return (
    <div className="App relative">
      <Header />
      <main>
        <BambooMonitor toggleModal={toggleModal} />
        <Stats />
        <About />
        {modal && <Modal isOpen={modal} toggleModal={toggleModal} />}
      </main>
    </div>
  );
}

export default App;
