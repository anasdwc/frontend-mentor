function Card({
  altClass,
  isQuote,
  userAvatar,
  userName,
  userStatus,
  title,
  desc,
}) {
  return (
    <div className={`card ${altClass} ${isQuote ? "quote" : ""}`}>
      <div className="card__header">
        <div className="card__header__img">
          <img src={userAvatar} alt="" aria-hidden="true" />
        </div>
        <div className="card__header__author">
          <h1>{userName}</h1>
          <p>{userStatus}</p>
        </div>
      </div>
      <div className="card__body">
        <h2 className="title">{title}</h2>
        <p className="body-text">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
