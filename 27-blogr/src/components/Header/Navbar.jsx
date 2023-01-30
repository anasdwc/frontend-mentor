import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

function NavbarItemDropdown({ title, hamburgerIsOpen }) {
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
    <li
      className={clsx(
        "relative",
        hamburgerIsOpen && "w-full text-center !text-very-dark-blue"
      )}
    >
      <div ref={ref}>
        <button
          onClick={expandedItem}
          className={clsx(
            "flex items-center gap-3",
            isExpanded && "underline decoration-2 transition-all",
            hamburgerIsOpen && "m-auto"
          )}
        >
          {title}
          <img
            src={
              hamburgerIsOpen
                ? "./images/icon-arrow-dark.svg"
                : "./images/icon-arrow-light.svg"
            }
            alt=""
            className={clsx(
              "h-2 w-2 rotate-0 transition-transform duration-500",
              isExpanded && "!rotate-180 transition-transform duration-500"
            )}
          />
        </button>
      </div>
      <div
        className={clsx(
          "absolute -left-6 z-10 hidden animate-dropdown",
          isExpanded && "!block",
          isExpanded && hamburgerIsOpen && "!relative left-0 z-20 !block "
        )}
      >
        <ul
          className={clsx(
            "flex flex-col gap-3 rounded-md bg-white py-6 pr-16 pl-6 text-black [&>li]:opacity-50",
            hamburgerIsOpen &&
              "mb-2 bg-grayish-blue !px-0 py-6 !text-very-dark-blue"
          )}
        >
          <li className="cursor-pointer hover:opacity-100">Contact</li>
          <li className="cursor-pointer hover:opacity-100">Newsletter</li>
          <li className="cursor-pointer hover:opacity-100">LinkedIn</li>
        </ul>
      </div>
    </li>
  );
}

function Navbar({ hamburgerIsOpen }) {
  return (
    <div
      className={clsx(
        "hidden w-full items-center justify-between text-white md:flex md:flex-row",
        hamburgerIsOpen &&
          "absolute top-16 !flex flex-col gap-4 rounded-md bg-white py-8 px-8 text-black"
      )}
    >
      <ul
        className={clsx(
          "flex flex-col gap-16 md:flex-row",
          hamburgerIsOpen && "w-full items-center !gap-4"
        )}
      >
        <NavbarItemDropdown title="Product" hamburgerIsOpen={hamburgerIsOpen} />
        <NavbarItemDropdown title="Company" hamburgerIsOpen={hamburgerIsOpen} />
        <NavbarItemDropdown title="Connect" hamburgerIsOpen={hamburgerIsOpen} />
      </ul>
      <ul
        className={clsx(
          "flex flex-col items-center gap-8 md:flex-row",
          hamburgerIsOpen && "w-full !gap-4 border-t-2 border-grayish-blue pt-4"
        )}
      >
        <li className="cursor-pointer opacity-80">Login</li>
        <li
          className={clsx(
            "cursor-pointer rounded-full bg-white py-2 px-8 font-bold text-very-light-red hover:bg-very-light-red hover:text-white",
            hamburgerIsOpen && "bg-very-light-red !text-white"
          )}
        >
          Sign Up
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
