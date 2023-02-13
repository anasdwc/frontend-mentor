import clsx from "clsx";
import MiniCardContainer from "./MiniCardContainer";

const ModalCard: React.FC<{
  title: string;
  price: number;
  desc: string;
  stock: number;
  isChecked: boolean;
}> = ({ title, price, desc, stock, isChecked = false }) => {
  return (
    <MiniCardContainer stock={stock}>
      <div className="mb-6 flex items-center gap-4">
        <div className="h-8 w-8 rounded-full border-2">
          {isChecked && <img src="./assets/icon-check.svg" alt="" />}
        </div>
        <div>
          <h3 className="font-bold">{title}</h3>
          {price && (
            <p className="text-sm font-medium text-moderate-cyan">
              Pledge ${price} or more
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-sm leading-relaxed text-dark-gray">{desc}</p>
      </div>
      <div>
        {stock >= 0 && (
          <p className="mt-6 text-xl font-bold">
            {stock}{" "}
            <span className="text-sm font-medium text-dark-gray">left</span>
          </p>
        )}
      </div>
    </MiniCardContainer>
  );
};

export default ModalCard;
