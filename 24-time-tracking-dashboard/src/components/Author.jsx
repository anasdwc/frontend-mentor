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
          <li className="daily ">Daily</li>
          <li className="weekly active">Weekly</li>
          <li className="monthly">Monthly</li>
        </ul>
      </div>
    </div>
  );
}

export default Author;
