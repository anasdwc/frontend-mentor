import clsx from "clsx";

const Card: React.FC<{ children: any; customCss?: any }> = ({
  children,
  customCss,
}) => {
  return (
    <section
      className={clsx(
        "relative mx-4 my-8 rounded-lg bg-white px-6 py-8 shadow-[0_.5px_2px] shadow-dark-gray first-of-type:mt-44 first-of-type:pt-14",
        "md:mx-auto md:max-w-3xl md:px-12",
        customCss
      )}
    >
      {children}
    </section>
  );
};

export default Card;
