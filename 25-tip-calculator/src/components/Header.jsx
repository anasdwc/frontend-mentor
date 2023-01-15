function Header({ logoBrand }) {
  return (
    <header className="flex justify-center bg-light-grayish-cyan pt-12 pb-16">
      <img src={logoBrand} alt="Splitter Logo" />
    </header>
  );
}

export default Header;
