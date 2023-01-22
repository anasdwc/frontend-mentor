import clsx from "clsx";
import React from "react";

function Card({ title, description, color, image, reverse }) {
  return (
    <section className="md:grid md:grid-cols-2">
      <div className={clsx(reverse && "order-2")}>
        <picture>
          <source
            media="(min-width: 768px)"
            srcset={`./images/desktop/${image}`}
          />
          <source srcset={`./images/mobile/${image}`} />
          <img className="w-full" src={`./images/mobile/${image}`} alt="" />
        </picture>
      </div>
      <div className="body px-4 py-12 text-center md:mx-auto md:flex md:max-w-lg md:flex-col md:justify-center">
        <h3 className="px-4 font-['Fraunces'] text-3xl text-very-dark-desaturated-blue md:flex md:text-left">
          {title}
        </h3>
        <p className="px-4 py-8 text-dark-grayish-blue md:text-left md:leading-relaxed">
          {description}
        </p>
        <a
          href="#"
          className="relative px-4 font-['Fraunces'] uppercase md:text-left"
        >
          Learn more
          <div
            className={clsx(
              "absolute inset-0 top-4 -z-10 m-auto h-2 w-full md:inset-auto md:top-4 md:m-0 md:w-1/4",
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
      <picture>
        <source
          media="(min-width: 768px)"
          srcset={`./images/desktop/${image}`}
        />
        <source srcset={`./images/mobile/${image}`} />
        <img className="w-full" src={`./images/mobile/${image}`} alt="" />
      </picture>
      <div
        className="absolute
       bottom-16 px-4 text-center text-dark-desaturated-cyan md:inset-x-0 md:mx-auto md:max-w-md"
      >
        <h3 className="font-['Fraunces'] text-2xl">{title}</h3>
        <p className="mt-6 leading-relaxed">{description}</p>
      </div>
    </section>
  );
}

export { Card, CardImage };
