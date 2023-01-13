export default function Card({
  desktopDividerImg,
  mobileDividerImg,
  iconDiceImg,
  quote,
}) {
  return (
    <div className="card">
      <div className="card__header">
        <h1>Advice #{quote.id}</h1>
      </div>
      <div className="card__quote">
        <p>"{quote.advice}"</p>
      </div>
      <div className="card__divider">
        <picture>
          <source
            media="(min-width: 1000px)"
            srcSet={desktopDividerImg}
          />
          <source srcSet={mobileDividerImg} />
          <img
            src={mobileDividerImg}
            alt=""
            aria-hidden="true"
          />
        </picture>
      </div>
      <div className="card__dice">
        <button>
          <img
            src={iconDiceImg}
            alt="click to get random advice"
          />
        </button>
      </div>
    </div>
  );
}
