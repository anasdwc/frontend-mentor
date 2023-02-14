import clsx from "clsx";
import { MouseEvent } from "react";
import { Button } from "./Button";
import MiniCardContainer from "./MiniCardContainer";

const ModalCard: React.FC<{
  title: string;
  price: number;
  desc: string;
  stock: number;
  project: any;
  setProject: any;
}> = ({ title, price, desc, stock, project, setProject }) => {
  const nameValue = title.toLowerCase().split(" ").join("_");
  const isChecked = project === nameValue;

  return (
    <MiniCardContainer stock={stock} isChecked={isChecked}>
      <label>
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2">
            <input
              type="radio"
              name={nameValue}
              id={nameValue}
              value={nameValue}
              className="h-3 w-3 appearance-none rounded-full checked:bg-moderate-cyan"
              onChange={() => setProject(nameValue)}
              checked={isChecked}
              disabled={stock === 0}
            />
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
        {isChecked && (
          <div className="mt-8 border-t-2 pt-2">
            <label className="text-center">
              <p className="py-6 text-sm text-dark-gray">Enter your pledge</p>
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
                      className="w-full rounded-full border-2 px-4 py-2 pl-10 font-bold"
                      id="pledge"
                      value={price}
                    />
                    <span className="absolute inset-y-0 left-6 my-auto h-fit w-fit text-dark-gray focus-within:outline-dark-gray">
                      $
                    </span>
                  </div>
                )}

                <Button
                  text="Continue"
                  onClick={() => console.log("success")}
                  customCss="!p-4 text-sm"
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
