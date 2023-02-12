import clsx from "clsx";

function Navbar() {
  return (
    <nav className={clsx("relative")}>
      <div>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="./assets/image-hero-desktop.jpg"
          />
          <source srcSet="./assets/image-hero-mobile.jpg" />
          <img
            src="./assets/image-hero-mobile.jpg"
            className="absolute inset-0 -z-10"
            alt=""
          />
        </picture>
      </div>
      <div
        className={clsx(
          "flex justify-between p-6",
          "md:mx-auto md:max-w-6xl md:py-12"
        )}
      >
        <div>
          <img src="./assets/logo.svg" alt="" />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-6 text-white">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button>
            <img src="./assets/icon-hamburger.svg" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
