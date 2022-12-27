function Header({ img, icon_menu, menuOnClick }) {
  return (
    <header>
      <div className="header__img ">
        <img src={img} alt="" aria-hidden="true" />
      </div>
      <div className="header__button">
        <button className="menu-button" onClick={menuOnClick}>
          <img src={icon_menu} alt="menu" />
        </button>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">New</a>
          </li>
          <li>
            <a href="#home">Popular</a>
          </li>
          <li>
            <a href="#home">Trending</a>
          </li>
          <li>
            <a href="#home">Categories</a>
          </li>
        </ul>
      </div>
      <div className="menu-darken"></div>
    </header>
  );
}

export default Header;
