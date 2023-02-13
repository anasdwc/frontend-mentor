import clsx from "clsx";
import { Button } from "./Button";
import Card from "./Card";
import MiniCard from "./MiniCard";

const dataProduct = [
  {
    id: 1,
    title: "Bamboo Stand",
    price: 25,
    desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    stock: 101,
  },
  {
    id: 2,
    title: "Black Edition Stand",
    price: 75,
    desc: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    stock: 64,
  },
  {
    id: 3,
    title: "Mahogany Special Edition",
    price: 200,
    desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    stock: 0,
  },
];

function About() {
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
          <MiniCard key={product.id} {...product} />
        ))}
      </div>
    </Card>
  );
}

export default About;
