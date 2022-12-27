function Hero({ bannerImg, bannerDesktop }) {
  return (
    <div className="hero">
      <div className="hero__banner">
        <picture>
          <source media="(min-width: 1000px)" srcSet={bannerDesktop} />
          <source srcSet={bannerImg} />
          <img src={bannerImg} alt="" aria-hidden="true" />
        </picture>
      </div>
      <div className="hero__body">
        <h1>The Bright Future of Web 3.0?</h1>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="hero__button">Read More</button>
      </div>
    </div>
  );
}

export default Hero;
