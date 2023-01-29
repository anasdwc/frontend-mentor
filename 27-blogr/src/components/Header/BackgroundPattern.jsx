import clsx from "clsx";

function BackgroundPattern() {
  return (
    <div
      className={clsx(
        "absolute -top-[200px] -left-[250px] m-auto",
        "md:-top-[1300px] md:-left-[420px]"
      )}
    >
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="./images/bg-pattern-intro-desktop.svg"
        />
        <source srcset="./images/bg-pattern-intro-mobile.svg" />
        <img
          src="./images/bg-pattern-intro-mobile.svg"
          alt=""
          className="max-w-[70rem] md:max-w-[200rem]"
        />
      </picture>
    </div>
  );
}

export default BackgroundPattern;
