import React from "react";

export default function Header() {
  return (
    <header className="relative">
      <nav className="relative z-10 flex justify-between p-4">
        <div className="brand">
          <img className="w-28" src="./images/logo.svg" alt="Sunnyside Logo" />
        </div>
        <div className="burger">
          <button>
            <img src="./images/icon-hamburger.svg" alt="" />
          </button>
        </div>
      </nav>
      <div className="hero">
        <div className="absolute inset-0 top-32 m-auto text-center font-['Fraunces'] text-4xl uppercase leading-tight tracking-widest text-white">
          <h2>We Are Creatives</h2>
          <img
            className="inset-0 my-auto mt-8 inline"
            src="./images/icon-arrow-down.svg"
            alt=""
          />
        </div>
        <img
          className="-mt-24 object-center"
          src="./images/mobile/image-header.jpg"
          alt=""
        />
      </div>
    </header>
  );
}
