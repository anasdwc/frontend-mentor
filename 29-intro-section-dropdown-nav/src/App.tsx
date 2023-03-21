import Navbar from "./components/Navbar";
import FullImage from "./components/FullImage";
import Body from "./components/Body";
import GlobalStyles from "./components/styles/Global";

import brandLogo from "./assets/logo.svg";
import burgerButton from "./assets/icon-menu.svg";
import imageHeroMobile from "./assets/image-hero-mobile.png";
import imageHeroDesktop from "./assets/image-hero-desktop.png";

import databizLogo from "./assets/client-databiz.svg";
import audiophileLogo from "./assets/client-audiophile.svg";
import meetLogo from "./assets/client-meet.svg";
import makerLogo from "./assets/client-maker.svg";
import { ThemeProvider } from "styled-components";
import {
  CenterFlex,
  FlexContainer,
} from "./components/styles/Container.styled";

const dataClient = [
  {
    id: 1,
    name: "Databiz",
    logoSrc: databizLogo,
  },
  {
    id: 2,
    name: "Audiophile",
    logoSrc: audiophileLogo,
  },
  {
    id: 3,
    name: "Meet",
    logoSrc: meetLogo,
  },
  {
    id: 4,
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
        <CenterFlex>
          <FullImage
            mobileImg={imageHeroMobile}
            desktopImg={imageHeroDesktop}
          />
          <Body dataClient={dataClient} />
        </CenterFlex>
      </>
    </ThemeProvider>
  );
}

export default App;
