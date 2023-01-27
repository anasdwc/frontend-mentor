function Phone() {
  return (
    <section
      className="relative overflow-hidden rounded-tr-[5rem] rounded-bl-[5rem] 
     bg-gradient-to-br from-very-dark-gray-blue to-very-dark-desaturated-blue pb-24"
    >
      <img src="./images/illustration-phones.svg" alt="" className="w-full" />
      <img
        src="./images/bg-pattern-circles.svg"
        alt=""
        className="absolute inset-0 bottom-96 -left-[6rem] m-auto max-w-[35rem]"
      />
      <div className="px-8 text-center text-white">
        <h2 className="font-overpass text-3xl font-[600] leading-normal">
          State of Art Infrasturcture
        </h2>
        <p className="mt-4 font-overpass leading-relaxed opacity-80">
          With realiability and speed in mind, worldwide data centers provide
          the backbone for ultra-fast connectivity. This ensures your site will
          load instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
  );
}

export default Phone;
