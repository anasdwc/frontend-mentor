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
  const [project, setProject] = useState("");

  const toggleModal = () => setModal(!modal);

  return (
    <div className="App relative pb-8">
      <Header />
      <main>
        <BambooMonitor toggleModal={toggleModal} />
        <Stats />
        <About modal={modal} toggleModal={toggleModal} />
        {modal && (
          <>
            <div className="absolute inset-0 w-screen bg-black opacity-25"></div>
            <Modal
              isOpen={modal}
              toggleModal={toggleModal}
              project={project}
              setProject={setProject}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
