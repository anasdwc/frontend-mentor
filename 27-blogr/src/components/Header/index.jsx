import clsx from "clsx";
import Hero from "./Hero";
import BackgroundPattern from "./BackgroundPattern";
import HamburgerButton from "./HamburgerButton";
import Navbar from "./Navbar";

function Header() {
  return (
    <header
      className={clsx(
        "relative overflow-hidden rounded-bl-[5rem] bg-gradient-to-br from-gradient-very-light-red  to-gradient-light-red py-8 px-4",
        "md:px-44"
      )}
    >
      <BackgroundPattern />
      <div className="relative z-10 flex items-center justify-between md:gap-24">
        <div id="brand">
          <img src="./images/logo.svg" alt="" className="w-20 md:w-28" />
        </div>
        <Navbar />
        <HamburgerButton />
      </div>
      <Hero />
    </header>
  );
}

export default Header;
