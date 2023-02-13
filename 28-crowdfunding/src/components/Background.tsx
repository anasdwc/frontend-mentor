import clsx from "clsx";

const BackgroundMenu: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => {
  return (
    <div
      className={clsx(
        isExpanded &&
          "absolute inset-0 z-10 h-screen w-screen bg-black bg-gradient-to-b from-black to-white opacity-50"
      )}
    ></div>
  );
};

const BackgroundHero = () => {
  return (
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
  );
};

export { BackgroundMenu, BackgroundHero };
