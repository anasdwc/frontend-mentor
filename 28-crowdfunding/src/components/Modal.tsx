import Card from "./Card";
import ModalCard from "./ModalCard";
import dataProduct from "../data/dataProduct";

const Modal: React.FC<{ isOpen: boolean; toggleModal: any }> = ({
  isOpen,
  toggleModal,
}) => {
  return (
    <Card customCss="!absolute inset-0">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Back this project</h2>
        <button onClick={toggleModal}>
          <img src="./assets/icon-close-modal.svg" alt="" />
        </button>
      </div>
      <div>
        <p className="my-6 text-sm leading-relaxed text-dark-gray">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>
      <div>
        <ModalCard
          title="Pledge with no reward"
          desc="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email"
        />
        {dataProduct.map((product) => (
          <ModalCard key={product.id} {...product} />
        ))}
      </div>
    </Card>
  );
};

export default Modal;
