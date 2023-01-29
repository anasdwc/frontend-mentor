import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

function NavbarItemDropdown({ title }) {
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
    <li className="relative">
      <div ref={ref}>
        <button
          onClick={expandedItem}
          className={clsx(
            "flex items-center gap-3",
            isExpanded && "underline decoration-2 transition-all"
          )}
        >
          {title}
          <img
            src="./images/icon-arrow-light.svg"
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
          isExpanded && "!block"
        )}
      >
        <ul className="flex flex-col gap-3 rounded-md bg-white py-6 pr-16 pl-6 text-black [&>li]:opacity-50">
          <li className="cursor-pointer hover:opacity-100">Contact</li>
          <li className="cursor-pointer hover:opacity-100">Newsletter</li>
          <li className="cursor-pointer hover:opacity-100">LinkedIn</li>
        </ul>
      </div>
    </li>
  );
}

function Navbar() {
  return (
    <div className="flex w-full items-center justify-between text-white ">
      <div>
        <ul className="flex gap-16">
          <NavbarItemDropdown title="Product" />
          <NavbarItemDropdown title="Company" />
          <NavbarItemDropdown title="Connect" />
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-8">
          <li className="cursor-pointer opacity-80">Login</li>
          <li className="cursor-pointer rounded-full bg-white py-2 px-8 font-bold text-very-light-red hover:bg-very-light-red hover:text-white">
            Sign Up
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
