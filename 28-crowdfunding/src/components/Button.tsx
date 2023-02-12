import clsx from "clsx";

const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button
      className={clsx(
        "rounded-full bg-moderate-cyan px-12 py-4 font-[500] text-white"
      )}
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

export { Button, BookmarkButton };
