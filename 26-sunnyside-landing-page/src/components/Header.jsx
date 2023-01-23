import clsx from "clsx";
import React from "react";

export default function Header({ handleBurger, isCollapsed }) {
  return (
    <header className="relative">
      <nav className="relative z-10 flex justify-between p-4 md:p-8">
        <div className="brand">
          <img className="w-28" src="./images/logo.svg" alt="Sunnyside Logo" />
        </div>
        <div
          className={clsx(
            "before:content-[' '] absolute inset-x-4 top-[4.5rem] w-auto -translate-y-96 bg-white before:absolute before:-top-4 before:right-0 before:h-10 before:w-10  before:border-[1rem] before:border-white before:border-t-transparent before:border-l-transparent md:static md:block md:translate-y-0 md:bg-transparent md:before:hidden",
            isCollapsed && "translate-y-0 "
          )}
        >
          <ul className="flex flex-col items-center gap-6 py-8 text-base text-grayish-blue  opacity-90 md:flex-row md:py-0 md:text-white">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li className="rounded-full bg-yellow-accent py-3 px-5 font-['Fraunces'] text-sm uppercase text-very-dark-desaturated-blue md:bg-white">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="burger md:hidden">
          <button onClick={handleBurger}>
            <img src="./images/icon-hamburger.svg" alt="" />
          </button>
        </div>
      </nav>
      <div className="hero">
        <div className="absolute inset-0 top-32 m-auto text-center font-['Fraunces'] text-4xl uppercase leading-tight tracking-widest text-white">
          <h2 className="md:text-6xl">We Are Creatives</h2>
          <img
            className="inset-0 m-auto mt-8 inline md:absolute md:top-56"
            src="./images/icon-arrow-down.svg"
            alt=""
          />
        </div>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`./images/desktop/image-header.jpg`}
          />
          <source srcSet={`./images/mobile/image-header.jpg`} />
          <img
            className="-mt-24 object-center md:-mt-28"
            src={`./images/mobile/image-header.jpg`}
            alt=""
          />
        </picture>
      </div>
    </header>
  );
}
