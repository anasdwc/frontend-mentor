import clsx from "clsx";
import Hero from "./Hero";
import BackgroundPattern from "./BackgroundPattern";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);

  const expandedItem = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isExpanded]);

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
            <ul className="flex gap-16">
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
              <li className="relative">
                <div ref={ref}>
                  <button
                    onClick={expandedItem}
                    className={clsx(
                      "flex items-center gap-3",
                      isExpanded && "underline decoration-2 transition-all"
                    )}
                  >
                    Connect
                    <img
                      src="./images/icon-arrow-light.svg"
                      alt=""
                      className={clsx(
                        "h-2 w-2 rotate-0 transition-transform duration-500",
                        isExpanded &&
                          "!rotate-180 transition-transform duration-500"
                      )}
                    />
                  </button>
                </div>
                <div
                  className={clsx(
                    "absolute -left-6 z-10 hidden animate-dropdown",
                    isExpanded && "!block"
                  )}
                >
                  <ul className="flex flex-col gap-3 rounded-md bg-white py-6 pr-16 pl-6 text-black [&>li]:opacity-50">
                    <li className="cursor-pointer hover:opacity-100">
                      Contact
                    </li>
                    <li className="cursor-pointer hover:opacity-100">
                      Newsletter
                    </li>
                    <li className="cursor-pointer hover:opacity-100">
                      LinkedIn
                    </li>
                  </ul>
                </div>
              </li>
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
