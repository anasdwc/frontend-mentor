function Author({ avatar }) {
  return (
    <div className="card author">
      <div className="author__header">
        <div className="author__header__avatar">
          <img
            src={avatar}
            alt=""
            aria-hidden={true}
          />
        </div>
        <div className="author__header__name">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="author__body">
        <ul>
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    </div>
  );
}

export default Author;
