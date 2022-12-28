function Header({ read }) {
  return (
    <header>
      <h1>
        Notifications <span className="no-read">{read}</span>{" "}
      </h1>
      <button>Mark all as read</button>
    </header>
  );
}

export default Header;
