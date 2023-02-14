import clsx from "clsx";
import { MouseEventHandler } from "react";

const Button: React.FC<{
  text: string;
  isDisabled?: boolean;
  onClick: MouseEventHandler;
  customCss?: string;
}> = ({ text, isDisabled = false, onClick, customCss }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-full px-12 py-4 font-[500] text-white hover:bg-dark-cyan",
        isDisabled ? "bg-dark-gray" : "bg-moderate-cyan",
        customCss && customCss
      )}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

const BookmarkButton: React.FC<{
  onClick: MouseEventHandler;
  isBookmarked: boolean;
}> = ({ onClick, isBookmarked }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "hover:bg-slate-200 md:flex md:items-center md:gap-4 md:rounded-full md:bg-gray-200 md:pr-6 md:font-bold",
        isBookmarked
          ? "fill-moderate-cyan md:bg-slate-100 md:text-moderate-cyan"
          : "md:text-dark-gray"
      )}
    >
      <img
        src="./assets/icon-bookmark.svg"
        className="fill-moderate-cyan"
        alt=""
      />
      <p className={clsx("hidden", "md:block")}>
        {isBookmarked ? "Bookmarked" : "Bookmark"}
      </p>
    </button>
  );
};

const HamburgerButton: React.FC<{
  onClick: MouseEventHandler;
  isExpanded: boolean;
}> = ({ onClick, isExpanded }) => {
  return (
    <div className={clsx("z-10", "md:hidden")}>
      <button onClick={onClick}>
        <img
          src={
            isExpanded
              ? "./assets/icon-close-menu.svg"
              : "./assets/icon-hamburger.svg"
          }
          alt=""
        />
      </button>
    </div>
  );
};

export { Button, BookmarkButton, HamburgerButton };
