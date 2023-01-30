function HamburgerButton({ handleHamburger, isOpen }) {
  return (
    <div id="burger" className="relative z-20 h-[32px] md:hidden">
      <button onClick={handleHamburger}>
        {isOpen ? (
          <img src="./images/icon-close.svg" />
        ) : (
          <img src="./images/icon-hamburger.svg" alt="" />
        )}
      </button>
    </div>
  );
}

export default HamburgerButton;
