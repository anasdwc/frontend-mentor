import clsx from "clsx";

import Hero from "./Hero";
import BackgroundPattern from "./BackgroundPattern";

function Header() {
  return (
    <header
      className={clsx(
        "relative overflow-hidden rounded-bl-[5rem] bg-gradient-to-br from-gradient-very-light-red  to-gradient-light-red py-8 px-4",
        "md:px-44"
      )}
    >
      <BackgroundPattern />
      <div
        id="navbar"
        className="relative z-10 flex items-center justify-between md:gap-24"
      >
        <div id="brand">
          <img src="./images/logo.svg" alt="" className="w-20" />
        </div>
        <div className="flex w-full items-center justify-between text-white ">
          <div>
            <ul className="flex gap-16 opacity-80">
              <li className="cursor-pointer">
                <div className="flex items-center gap-3">
                  Product
                  <img
                    src="./images/icon-arrow-light.svg"
                    alt=""
                    className="h-2 w-2"
                  />
                </div>
              </li>
              <li>Company</li>
              <li>Connect</li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center gap-8">
              <li className="opacity-80">Login</li>
              <li className="rounded-full bg-white py-2 px-8 font-bold text-very-light-red ">
                Sign Up
              </li>
            </ul>
          </div>
        </div>
        <div id="burger" className="md:hidden">
          <button>
            <img src="./images/icon-hamburger.svg" alt="" />
          </button>
        </div>
      </div>
      <Hero />
    </header>
  );
}

export default Header;
