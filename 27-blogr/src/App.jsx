import Header from "./components/Header";

import "@fontsource/overpass/300.css";
import "@fontsource/overpass/600.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import { ArticleOne, ArticleTwo } from "./components/Article";
import Phone from "./components/Phone";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App overflow-hidden">
      <Header />
      <main>
        <ArticleOne />
        <Phone />
        <ArticleTwo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
