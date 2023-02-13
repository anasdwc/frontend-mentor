import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { BackgroundMenu, BackgroundHero } from "./Background";
import { HamburgerButton } from "./Button";
import ListItem from "./ListItem";
import NavLists from "./NavLists";

const navList = [
  {
    id: 1,
    text: "About",
  },
  {
    id: 2,
    text: "Discover",
  },
  {
    id: 3,
    text: "Get Started",
  },
];

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const hamburgerEle: any = useRef();

  const handleBurger = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (!hamburgerEle.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <nav className={clsx("relative p-6")}>
      <BackgroundHero />
      <BackgroundMenu isExpanded={isExpanded} />
      <div
        ref={hamburgerEle}
        className={clsx(
          "relative z-10 flex justify-between",
          "md:mx-auto md:max-w-6xl md:py-12"
        )}
      >
        <div>
          <img src="./assets/logo.svg" alt="" />
        </div>
        <NavLists isExpanded={isExpanded}>
          {navList.map((item) => (
            <ListItem key={item.id} {...item} />
          ))}
        </NavLists>
        <HamburgerButton isExpanded={isExpanded} onClick={handleBurger} />
      </div>
    </nav>
  );
}

export default Navbar;
