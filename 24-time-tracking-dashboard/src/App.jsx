import "./App.scss";
import { useState } from "react";

import Footer from "./components/Footer";
import Author from "./components/Author";

import avatarImg from "./assets/image-jeremy.png";
import CardsList from "./components/CardsList";
import exerciseIcon from "./assets/icon-exercise.svg";
import playIcon from "./assets/icon-play.svg";
import selfCareIcon from "./assets/icon-self-care.svg";
import socialIcon from "./assets/icon-social.svg";
import studyIcon from "./assets/icon-study.svg";
import workIcon from "./assets/icon-work.svg";

import data from "./data/data.json";

function App() {
  const [timeframes, setTimeframes] = useState("weekly");
  const banners = [
    workIcon,
    playIcon,
    studyIcon,
    exerciseIcon,
    socialIcon,
    selfCareIcon,
  ];

  return (
    <div className="App">
      <main>
        <Author avatar={avatarImg} />

        <CardsList
          data={data}
          time={timeframes}
          banners={banners}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
