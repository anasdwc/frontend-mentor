import clsx from "clsx";
import React from "react";

const MiniCardContainer: React.FC<{
  stock: number;
  children: React.ReactNode;
}> = ({ stock, children }) => {
  return (
    <div
      className={clsx(
        "mb-6 rounded-lg border-2 p-8 last-of-type:mb-2",
        stock === 0 && "opacity-50"
      )}
    >
      {children}
    </div>
  );
};

export default MiniCardContainer;
