import clsx from "clsx";
import { Button } from "./Button";
import Card from "./Card";
import MiniCard from "./MiniCard";
import dataProduct from "../data/dataProduct";

const About: React.FC<{ modal: boolean; toggleModal: any }> = ({
  modal,
  toggleModal,
}) => {
  return (
    <Card>
      <div className="[&>p]:my-6 [&>p]:font-[500] [&>p]:text-dark-gray">
        <h2 className="text-xl font-bold">About this project</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftmanship, the simpliciy of design creates extra
          desk space below your computer to allow notepads, pens, and USB sticks
          to be stored under the stand.
        </p>
      </div>
      <div>
        {dataProduct.map((product) => (
          <MiniCard key={product.id} {...product} toggleModal={toggleModal} />
        ))}
      </div>
    </Card>
  );
};

export default About;
