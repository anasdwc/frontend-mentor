import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";
import Content from "./components/Content";

import image_mobile from "./assets/images/image-web-3-mobile.jpg";
import logo from "./assets/images/logo.svg";
import iconMenu from "./assets/images/icon-menu.svg";
import image1 from "./assets/images/image-retro-pcs.jpg";
import image2 from "./assets/images/image-top-laptops.jpg";
import image3 from "./assets/images/image-gaming-growth.jpg";
import Footer from "./components/Footer";

function App() {
  const contentData = [
    {
      id: 1,
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
      image: image1,
    },
    {
      id: 2,
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
      image: image2,
    },
    {
      id: 3,
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      image: image3,
    },
  ];

  const newsData = [
    {
      id: 1,
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      id: 2,
      title: "The Downsides of AI Artistry",
      description:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      id: 3,
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <div className="App">
      <Header img={logo} brand={logo} icon_menu={iconMenu} />
      <Hero bannerImg={image_mobile} />
      <main>
        <News data={newsData} />
        <Content data={contentData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
