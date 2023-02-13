import clsx from "clsx";
import { Button } from "./Button";
import MiniCardContainer from "./MiniCardContainer";

const MiniCard: React.FC<{
  title: string;
  price: number;
  desc: string;
  stock: number;
}> = ({ title, price, desc, stock }) => {
  return (
    <MiniCardContainer stock={stock}>
      <div className="md:flex md:items-center md:justify-between">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="font-medium text-moderate-cyan">
          Pledge ${price} or more
        </p>
      </div>
      <div>
        <p className="my-6 text-dark-gray">{desc}</p>
      </div>
      <div className="md:flex md:justify-between">
        <p
          className={clsx(
            "my-6 flex items-center gap-2 text-4xl font-bold",
            "md:my-0"
          )}
        >
          {stock}{" "}
          <span className="text-base font-medium text-dark-gray">left</span>
        </p>
        <Button
          isDisabled={stock === 0 ? true : false}
          text={stock === 0 ? "Out of Stock" : "Select Reward"}
        />
      </div>
    </MiniCardContainer>
  );
};

export default MiniCard;
