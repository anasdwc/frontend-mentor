import clsx from "clsx";
import { MouseEventHandler } from "react";

const Button: React.FC<{ text: string; isDisabled?: boolean }> = ({
  text,
  isDisabled = false,
}) => {
  return (
    <button
      className={clsx(
        "rounded-full px-12 py-4 font-[500] text-white",
        isDisabled ? "bg-dark-gray" : "bg-moderate-cyan"
      )}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

const BookmarkButton = () => {
  return (
    <button
      className={clsx(
        "md:flex md:items-center md:gap-4 md:rounded-full md:bg-gray-200 md:pr-6 md:font-bold md:text-dark-gray"
      )}
    >
      <img src="./assets/icon-bookmark.svg" alt="" />
      <p className={clsx("hidden", "md:block")}>Bookmark</p>
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
