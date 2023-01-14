import buttonImg from "../assets/icon-ellipsis.svg";

function Card({ banner, title, currentTime, prevTime }) {
  return (
    <div className={`card ${title.split(" ").join("-").toLowerCase()}`}>
      <div className="card__banner">
        {/* <img
          src={banner}
          alt=""
          aria-hidden={true}
        /> */}
      </div>
      <div className="card__body">
        <h2 className="title">{title}</h2>
        <button className="button-setting">
          <img
            src={buttonImg}
            alt="other settings"
          />
        </button>
        <h3 className="current-time">{currentTime}hrs</h3>
        <h3 className="previous-time">Last Week - {prevTime}hrs</h3>
      </div>
    </div>
  );
}

export default Card;
