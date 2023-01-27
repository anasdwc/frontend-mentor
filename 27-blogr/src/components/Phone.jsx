function Phone() {
  return (
    <section
      className="relative mt-64 rounded-tr-[5rem] 
     rounded-bl-[5rem] bg-gradient-to-br from-very-dark-gray-blue to-very-dark-desaturated-blue pb-32"
    >
      <img
        src="./images/illustration-phones.svg"
        alt=""
        className="absolute -top-48 z-10 w-full"
      />
      <div className="relative overflow-hidden rounded-tr-[5rem]">
        <img
          src="./images/bg-pattern-circles.svg"
          alt=""
          className="absolute -top-72 -left-28 max-w-[38rem]"
        />
        <div className="relative z-20 px-8 pt-48 text-center text-white">
          <h2 className="font-overpass text-[2rem] font-[600] leading-normal">
            State of the Art Infrasturcture
          </h2>
          <p className="mt-4 font-overpass leading-relaxed opacity-80">
            With realiability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Phone;
