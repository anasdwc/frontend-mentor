import clsx from "clsx";
import { MouseEvent, useState } from "react";
import { Button } from "./Button";
import MiniCardContainer from "./MiniCardContainer";

const ModalCard: React.FC<{
  title: string;
  price: number;
  desc: string;
  stock: number;
  project: any;
  setProject: any;
  toggleThanks: any;
}> = ({ title, price, desc, stock, project, setProject, toggleThanks }) => {
  const [pricePledge, setPricePledge] = useState(price);

  const nameValue = title.toLowerCase().split(" ").join("_");
  const isChecked = project === nameValue;

  return (
    <MiniCardContainer stock={stock} isChecked={isChecked}>
      <label>
        <div className="md:grid md:grid-cols-[5%_65%_27%] md:grid-rows-2 md:gap-2">
          <div className="mb-6 flex items-center gap-4 md:col-start-1 md:col-end-3 md:mb-0">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2">
              <input
                type="radio"
                name={nameValue}
                id={nameValue}
                value={nameValue}
                className={clsx(
                  "h-3 w-3 appearance-none rounded-full checked:bg-moderate-cyan",
                  "md:col-start-1 md:col-end-2"
                )}
                onChange={() => setProject(nameValue)}
                checked={isChecked}
                disabled={stock === 0}
              />
            </div>
            <div className="md:flex md:items-center md:gap-4">
              <h3 className="font-bold">{title}</h3>
              {price && (
                <p className="text-sm font-medium text-moderate-cyan">
                  Pledge ${price} or more
                </p>
              )}
            </div>
          </div>
          <div className="md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-3">
            <p className="text-sm leading-relaxed text-dark-gray md:col-start-2 md:col-end-4">
              {desc}
            </p>
          </div>
          <div className="md:col-start-3 md:col-end-4 md:w-full md:self-center">
            {stock >= 0 && (
              <p className="mt-6 text-xl font-bold md:mt-0 md:text-right">
                {stock}{" "}
                <span className="text-sm font-medium text-dark-gray">left</span>
              </p>
            )}
          </div>
        </div>
        {isChecked && (
          <div className="mt-8 border-t-2 pt-2">
            <label className="md:mt-6 md:grid md:grid-cols-2 md:content-between md:justify-between">
              <p className="py-6 text-center text-sm text-dark-gray md:py-4 md:text-left">
                Enter your pledge
              </p>
              <div
                className={clsx(
                  "grid grid-cols-2 justify-between gap-x-6",
                  price ? "grid-cols-2" : "grid-cols-1"
                )}
              >
                {price && (
                  <div className="relative">
                    <input
                      type="number"
                      name="pledge"
                      className="h-full w-full rounded-full border-2 px-4 py-2 pl-10 font-bold"
                      id="pledge"
                      value={pricePledge}
                      onChange={(e: any) => setPricePledge(e.target.value)}
                    />
                    <span className="absolute inset-y-0 left-6 my-auto h-fit w-fit text-dark-gray focus-within:outline-dark-gray">
                      $
                    </span>
                  </div>
                )}
                <Button
                  text="Continue"
                  onClick={toggleThanks}
                  customCss="!p-3 text-sm"
                />
              </div>
            </label>
          </div>
        )}
      </label>
    </MiniCardContainer>
  );
};

export default ModalCard;
