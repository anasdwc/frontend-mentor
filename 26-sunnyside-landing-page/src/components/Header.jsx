import React from "react";

export default function Header() {
  return (
    <header className="relative">
      <nav className="relative z-10 flex justify-between p-4 md:p-8">
        <div className="brand">
          <img className="w-28" src="./images/logo.svg" alt="Sunnyside Logo" />
        </div>
        <div>
          <ul className="flex items-center gap-8 text-sm text-white opacity-90">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li className="rounded-full bg-white py-3 px-5 font-['Fraunces'] uppercase text-very-dark-desaturated-blue">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="burger md:hidden">
          <button>
            <img src="./images/icon-hamburger.svg" alt="" />
          </button>
        </div>
      </nav>
      <div className="hero">
        <div className="absolute inset-0 top-32 m-auto text-center font-['Fraunces'] text-4xl uppercase leading-tight tracking-widest text-white">
          <h2 className="text-6xl">We Are Creatives</h2>
          <img
            className="inset-0 m-auto mt-8 inline md:absolute md:top-56"
            src="./images/icon-arrow-down.svg"
            alt=""
          />
        </div>
        <picture>
          <source
            media="(min-width: 768px)"
            srcset={`./images/desktop/image-header.jpg`}
          />
          <source srcset={`./images/mobile/image-header.jpg`} />
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
