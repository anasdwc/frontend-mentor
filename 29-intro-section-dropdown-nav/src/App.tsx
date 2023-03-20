import Navbar from "./components/Navbar";
import FullImage from "./components/FullImage";
import GlobalStyles from "./components/styles/Global";

import brandLogo from "./assets/logo.svg";
import burgerButton from "./assets/icon-menu.svg";
import imageHeroMobile from "./assets/image-hero-mobile.png";
import Body from "./components/Body";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar
        brandLogo={brandLogo}
        burgerIcon={burgerButton}
      />
      <main>
        <FullImage imgSrc={imageHeroMobile} />
        <Body />
      </main>
    </>
  );
}

export default App;
