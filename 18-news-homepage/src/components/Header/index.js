function Header({ img, icon_menu }) {
  return (
    <header>
      <div className="header__img ">
        <img src={img} alt="" aria-hidden="true" />
      </div>
      <div className="header__button">
        <button className="menu">
          <img src={icon_menu} alt="menu" />
        </button>
      </div>
    </header>
  );
}

export default Header;
