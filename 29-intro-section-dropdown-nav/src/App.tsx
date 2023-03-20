import Navbar from "./components/Navbar";
import GlobalStyles from "./components/styles/Global";

import brandLogo from "./assets/logo.svg";
import burgerButton from "./assets/icon-menu.svg";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar
        brandLogo={brandLogo}
        burgerIcon={burgerButton}
      />
      <div>
        <h2>Hello World</h2>
      </div>
    </>
  );
}

export default App;
