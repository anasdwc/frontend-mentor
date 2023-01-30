function Phone() {
  return (
    <section
      className="relative mt-64 rounded-tr-[5rem] 
     rounded-bl-[5rem] bg-gradient-to-br from-very-dark-gray-blue to-very-dark-desaturated-blue pb-32 md:mt-72 md:grid md:grid-cols-2 md:pb-0"
    >
      <div>
        <img
          src="./images/illustration-phones.svg"
          alt=""
          className="absolute -top-48 z-10 w-full md:inset-0 md:col-start-1 md:col-end-2 md:m-auto md:w-auto"
        />
        <div className="relative h-full w-full overflow-y-hidden">
          <img
            src="./images/bg-pattern-circles.svg"
            alt=""
            className="absolute -top-96 -left-44 max-w-[50rem]"
          />
        </div>
      </div>
      <div className="relative overflow-hidden rounded-tr-[5rem] md:col-start-2 md:py-16">
        {/* <img
          src="./images/bg-pattern-circles.svg"
          alt=""
          className="absolute -top-72 -left-28 max-w-[38rem] md:right-96"
        /> */}
        <div className="relative z-20 px-8 pt-48 text-center text-white md:py-12 md:text-left">
          <h2 className="font-overpass text-[2rem] font-[600] leading-normal md:text-4xl">
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
