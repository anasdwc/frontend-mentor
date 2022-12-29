function Header({ read, onMarkClick }) {
  return (
    <header>
      <h1>
        Notifications <span className="no-read">{read}</span>{" "}
      </h1>
      <button onClick={onMarkClick}>Mark all as read</button>
    </header>
  );
}

export default Header;
