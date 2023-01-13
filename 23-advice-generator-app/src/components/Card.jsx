export default function Card({
  desktopDividerImg,
  mobileDividerImg,
  iconDiceImg,
}) {
  return (
    <div className="card">
      <div className="card__header">
        <h1>Advice #117</h1>
      </div>
      <div className="card__quote">
        <p>
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </p>
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
