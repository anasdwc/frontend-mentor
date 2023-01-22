import React from "react";

export default function Gallery() {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`./images/desktop/image-gallery-milkbottles.jpg`}
          />
          <source srcSet={`./images/mobile/image-gallery-milkbottles.jpg`} />
          <img
            className="w-full"
            src={`./images/mobile/image-gallery-milkbottles.jpg`}
            alt=""
          />
        </picture>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`./images/desktop/image-gallery-orange.jpg`}
          />
          <source srcSet={`./images/mobile/image-gallery-orange.jpg`} />
          <img
            className="w-full"
            src={`./images/mobile/image-gallery-orange.jpg`}
            alt=""
          />
        </picture>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`./images/desktop/image-gallery-cone.jpg`}
          />
          <source srcSet={`./images/mobile/image-gallery-cone.jpg`} />
          <img
            className="w-full"
            src={`./images/mobile/image-gallery-cone.jpg`}
            alt=""
          />
        </picture>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`./images/desktop/image-gallery-sugarcubes.jpg`}
          />
          <source srcSet={`./images/mobile/image-gallery-sugar-cubes.jpg`} />
          <img
            className="w-full"
            src={`./images/mobile/image-gallery-sugar-cubes.jpg`}
            alt=""
          />
        </picture>
      </div>
    </section>
  );
}
