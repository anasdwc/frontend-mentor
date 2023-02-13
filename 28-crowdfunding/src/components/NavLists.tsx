import clsx from "clsx";
import React from "react";

const NavLists: React.FC<{
  isExpanded: boolean;
  children: React.ReactNode;
}> = ({ isExpanded, children }) => {
  return (
    <div
      className={clsx(
        "md:block",
        isExpanded
          ? "absolute top-12 z-20 w-full rounded-lg bg-white p-6"
          : "hidden"
      )}
    >
      <ul
        className={clsx(
          "flex gap-6 ",
          isExpanded
            ? "flex-col font-bold text-black"
            : "font-medium text-white"
        )}
      >
        {children}
      </ul>
    </div>
  );
};

export default NavLists;
