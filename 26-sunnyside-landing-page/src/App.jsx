import React from "react";
import Header from "./components/Header";

import "@fontsource/barlow/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/fraunces/900.css";
import { Card, CardImage } from "./components/Card";
import Testimonial from "./components/Testimonial";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleBurger = () => {
    console.log("halo");
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <Header handleBurger={handleBurger} isCollapsed={isCollapsed} />
      <main>
        <Card
          reverse
          title="Transform your brand"
          color={"bg-yellow-accent"}
          description="We are a full-service creative agency speacializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you."
          image="image-transform.jpg"
        />
        <Card
          color={"bg-soft-red"}
          title="Stand out to the right audience"
          description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places"
          image="image-stand-out.jpg"
        />
        <section className="md:grid md:grid-cols-2">
          <CardImage
            title="Graphic Design"
            description="Great design makes you memorable. We deliver artwork that underscores
          your brand message and captured potential clients' attention."
            image="image-graphic-design.jpg"
          />
          <CardImage
            title="Photography"
            description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image"
            image="image-photography.jpg"
          />
        </section>
        <Testimonial />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
