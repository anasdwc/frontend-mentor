function Header() {
  return (
    <header className="relative overflow-hidden rounded-bl-[5rem] bg-gradient-to-br from-gradient-very-light-red  to-gradient-light-red py-8 px-4">
      <div className="absolute -top-[200px] -left-[250px] m-auto">
        <img
          src="./images/bg-pattern-intro-mobile.svg"
          alt=""
          className="w-[70rem]"
        />
      </div>
      <div id="navbar" className="flex items-center justify-between">
        <div id="brand">
          <img src="./images/logo.svg" alt="" className="w-20" />
        </div>
        <div id="burger">
          <img src="./images/icon-hamburger.svg" alt="" />
        </div>
      </div>
      <div
        id="hero"
        className="relative z-10 py-24 px-8 text-center text-white"
      >
        <div>
          <h1 className="font text-3xl">A modern publishing platform</h1>
          <p className="mt-4 font-overpass font-light opacity-90">
            Grow you audience and build your online brand
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-full bg-white px-4 py-2 font-bold text-light-red">
            Start for Free
          </button>
          <button className="rounded-full border-2 px-4 py-2">
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
