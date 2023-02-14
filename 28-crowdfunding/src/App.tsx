import "@fontsource/commissioner/400.css";
import "@fontsource/commissioner/500.css";
import "@fontsource/commissioner/700.css";

import Header from "./components/Header";
import BambooMonitor from "./components/BambooMonitor";
import Stats from "./components/Stats";
import About from "./components/About";
import Modal from "./components/Modal";
import { useState } from "react";
import ModalThanks from "./components/ModalThanks";
import { BackgroundModal } from "./components/Background";

function App() {
  const [modal, setModal] = useState(false);
  const [project, setProject] = useState("");
  const [openThanks, setOpenThanks] = useState(false);

  const toggleThanks = () => {
    setModal(false);
    setOpenThanks(!openThanks);
  };

  const toggleModal = () => setModal(!modal);

  return (
    <div className="App relative pb-8">
      <Header />
      <main>
        <BambooMonitor toggleModal={toggleModal} />
        <Stats />
        <About
          modal={modal}
          toggleModal={toggleModal}
          setProject={setProject}
        />
        {modal && (
          <>
            <BackgroundModal />
            <Modal
              toggleThanks={toggleThanks}
              isOpen={modal}
              toggleModal={toggleModal}
              project={project}
              setProject={setProject}
            />
          </>
        )}
        {openThanks && (
          <>
            <BackgroundModal />
            <ModalThanks closeModal={() => setOpenThanks(false)} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
