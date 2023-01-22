import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark-moderate-cyan px-8 pt-12 pb-4">
      <div className="brand flex justify-center">
        <img src="./images/logo.svg" alt="" />
      </div>
      <div className="nav mx-auto max-w-sm">
        <ul className="my-8 flex justify-between text-base text-dark-desaturated-cyan">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </div>
      <div className="social-media">
        <ul className="mt-16 flex justify-center gap-6">
          <li>
            <img src="./images/icon-facebook.svg" alt="" />
          </li>
          <li>
            <img src="./images/icon-instagram.svg" alt="" />
          </li>
          <li>
            <img src="./images/icon-twitter.svg" alt="" />
          </li>
          <li>
            <img src="./images/icon-pinterest.svg" alt="" />
          </li>
        </ul>
      </div>
      <div>
        <div className="attribution mt-10 text-center text-xs text-dark-desaturated-cyan">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="#" className="text-bold">
            Annas Dwi
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
