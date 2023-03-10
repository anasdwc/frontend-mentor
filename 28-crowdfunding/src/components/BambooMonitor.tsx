import clsx from "clsx";
import { useState } from "react";
import { Button, BookmarkButton } from "./Button";
import Card from "./Card";

const BambooMonitor: React.FC<{ toggleModal: any }> = ({ toggleModal }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => setIsBookmarked(!isBookmarked);

  return (
    <Card>
      <div>
        <img
          className="absolute inset-0 -top-7 mx-auto"
          src="./assets/logo-mastercraft.svg"
          alt=""
        />
      </div>
      <div className="text-center">
        <h1 className={clsx("text-2xl font-bold text-black", "md:text-3xl")}>
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className={clsx("py-4 pb-6 text-dark-gray", "md:pb-12")}>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div className="flex justify-between">
        <Button text="Back this project" onClick={toggleModal} />
        <BookmarkButton isBookmarked={isBookmarked} onClick={toggleBookmark} />
      </div>
    </Card>
  );
};

export default BambooMonitor;
