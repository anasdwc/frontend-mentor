import buttonImg from "../assets/icon-ellipsis.svg";

function Card({ banner, title, currentTime, prevTime }) {
  return (
    <div className={`card ${title.split(" ").join("-").toLowerCase()}`}>
      <div className="card__banner">
        <img
          src={banner}
          alt=""
          aria-hidden={true}
        />
      </div>
      <div className="card__body">
        <div className="card__body__current-time">
          <h2>{title}</h2>
          <h3>{currentTime}hrs</h3>
        </div>
        <div className="card__body__previous-time">
          <div className="card__body__previous-time__button">
            <button>
              <img
                src={buttonImg}
                alt="other settings"
              />
            </button>
          </div>
          <h3>Last Week - {prevTime}hrs</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
