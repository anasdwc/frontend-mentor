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
import { ThemeProvider } from "styled-components";

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

const theme = {
  colors: {
    white: "hsl(0, 0%, 98%)",
    gray: "hsl(0, 0%, 41%)",
    black: "hsl(0, 0%, 8%)",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
