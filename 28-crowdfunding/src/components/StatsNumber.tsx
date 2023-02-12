import clsx from "clsx";

const StatsNumber: React.FC<{
  title: string;
  subs: string;
  border: boolean;
  mb: number;
}> = ({ title, subs, border, mb }) => {
  return (
    <div
      className={clsx(
        `mb-${mb} text-center`,
        "md:grid-cols-[1fr 1px] md:mb-8 md:grid md:grid-rows-2 md:gap-x-8 md:text-left"
      )}
    >
      <p className="text-4xl font-bold">{title}</p>
      <p className={clsx("pt-2 pb-6 text-dark-gray", "md:row-start-2 md:pb-0")}>
        {subs}
      </p>
      <div
        className={clsx(
          "mx-auto w-1/3",
          "md:col-start-2 md:row-span-full md:w-0",
          border && "border-[1px]"
        )}
      ></div>
    </div>
  );
};

export default StatsNumber;
