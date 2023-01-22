import clsx from "clsx";
import React from "react";

function Card({ title, description, color, image }) {
  return (
    <section>
      <div className="image-wrapper">
        <img src={`./images/mobile/${image}`} alt="" />
      </div>
      <div className="body px-4 py-12 text-center">
        <h3 className="px-4 font-['Fraunces'] text-3xl text-very-dark-desaturated-blue">
          {title}
        </h3>
        <p className="px-4 py-8 text-dark-grayish-blue">{description}</p>
        <a href="#" className="relative font-['Fraunces'] uppercase">
          Learn more
          <div
            className={clsx(
              "absolute inset-0 top-4 -z-10 m-auto h-2 w-full",
              color && color
            )}
          ></div>
        </a>
      </div>
    </section>
  );
}

function CardImage({ title, description, image }) {
  return (
    <section className="relative">
      <img src={`./images/mobile/${image}`} alt="" />
      <div className="absolute bottom-16 px-4 text-center text-dark-desaturated-cyan">
        <h3 className="font-['Fraunces'] text-2xl">{title}</h3>
        <p className="mt-6 leading-relaxed">{description}</p>
      </div>
    </section>
  );
}

export { Card, CardImage };
