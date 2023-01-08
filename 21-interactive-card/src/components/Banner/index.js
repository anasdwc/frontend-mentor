function Banner({
  bgDesktop,
  bgMobile,
  cardBack,
  cardFront,
  cardLogo,
  cardName,
  cardNum,
}) {
  return (
    <header>
      <div className="banner__bg">
        <picture>
          <source media="min-width: 1000px" srcSet={bgDesktop} />
          <source srcSet={bgMobile} />
          <img src={bgMobile} alt="" aria-hidden="true" />
        </picture>
        <div className="banner__bg__card">
          <img src={cardBack} alt="" aria-hidden="true" />
          <div className="banner__bg__card__front">
            <img src={cardFront} alt="" aria-hidden="true" />
            <img
              className="card-logo"
              src={cardLogo}
              alt=""
              aria-hidden="true"
            />
            <div className="banner__bg__card__front__input">
              <h1 className="card-number">{cardNum.join("")}</h1>
              <p>{cardName ? cardName : "Jane Appleseed"}</p>
              <p>00/00</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
