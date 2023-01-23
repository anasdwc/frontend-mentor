export default function Header() {
  return (
    <header>
      <nav className="flex justify-between px-4 py-6">
        <div id="brand">
          <img src="./images/logo.svg" alt="" />
        </div>
        <div id="burger">
          <button>
            <img src="./images/icon-menu.svg" alt="" />
          </button>
        </div>
      </nav>
      <div id="banner">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="./images/image-hero-desktop.png"
          />
          <source srcset="./images/image-hero-mobile.png" />
          <img src="./images/image-hero-mobile.png" alt="" />
        </picture>
      </div>
    </header>
  );
}
