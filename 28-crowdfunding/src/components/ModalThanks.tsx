import { MouseEvent } from "react";
import { Button } from "./Button";
import Card from "./Card";

const ModalThanks: React.FC<{ closeModal: any }> = ({ closeModal }) => {
  return (
    <Card customCss="!fixed inset-0 h-fit !my-auto overflow-hidden">
      <div>
        <img className="mx-auto" src="./assets/icon-check.svg" alt="" />
      </div>
      <div className="text-center">
        <h2 className="mt-4 text-lg font-bold">Thanks for your support!</h2>
        <p className="mb-6 mt-4 text-sm leading-relaxed text-dark-gray">
          Your pledge bring us one stpe closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
      </div>
      <div className="flex justify-center">
        <Button text="Got it!" customCss="!px-10" onClick={closeModal} />
      </div>
    </Card>
  );
};

export default ModalThanks;
