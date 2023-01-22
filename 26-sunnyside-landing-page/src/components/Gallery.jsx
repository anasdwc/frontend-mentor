import React from "react";

export default function Gallery() {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <img
          className="w-full"
          src="./images/mobile/image-gallery-milkbottles.jpg"
          alt=""
        />
        <img
          className="w-full"
          src="./images/mobile/image-gallery-orange.jpg"
          alt=""
        />
        <img
          className="w-full"
          src="./images/mobile/image-gallery-cone.jpg"
          alt=""
        />
        <img
          className="w-full"
          src="./images/mobile/image-gallery-sugar-cubes.jpg"
          alt=""
        />
      </div>
    </section>
  );
}
