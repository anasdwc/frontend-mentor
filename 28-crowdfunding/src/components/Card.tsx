import clsx from "clsx";

const Card: React.FC<{ children: any }> = ({ children }) => {
  return (
    <section
      className={clsx(
        "relative mx-4 mt-44 rounded-lg bg-white px-6 py-8 pt-14 shadow-[0_.5px_2px] shadow-dark-gray",
        "md:mx-auto md:max-w-3xl md:px-12"
      )}
    >
      {children}
    </section>
  );
};

export default Card;
