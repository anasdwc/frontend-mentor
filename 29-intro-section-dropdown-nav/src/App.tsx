import Navbar from "./components/Navbar";
import FullImage from "./components/FullImage";
import GlobalStyles from "./components/styles/Global";

import brandLogo from "./assets/logo.svg";
import burgerButton from "./assets/icon-menu.svg";
import imageHeroMobile from "./assets/image-hero-mobile.png";
import Body from "./components/Body";

import databizLogo from "./assets/client-databiz.svg";
import audiophileLogo from "./assets/client-audiophile.svg";
import meetLogo from "./assets/client-meet.svg";
import makerLogo from "./assets/client-maker.svg";

function App() {
  const dataClient = [
    {
      name: "Databiz",
      logoSrc: databizLogo,
    },
    {
      name: "Audiophile",
      logoSrc: audiophileLogo,
    },
    {
      name: "Meet",
      logoSrc: meetLogo,
    },
    {
      name: "Maker",
      logoSrc: makerLogo,
    },
  ];

  return (
    <>
      <GlobalStyles />
      <Navbar
        brandLogo={brandLogo}
        burgerIcon={burgerButton}
      />
      <main>
        <FullImage imgSrc={imageHeroMobile} />
        <Body dataClient={dataClient} />
      </main>
    </>
  );
}

export default App;
