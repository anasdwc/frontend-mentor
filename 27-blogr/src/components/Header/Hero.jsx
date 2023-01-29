function Hero() {
  return (
    <div
      id="hero"
      className="relative py-24 px-8 text-center text-white md:py-32"
    >
      <div>
        <h1 className="font text-3xl md:text-5xl">
          A modern publishing platform
        </h1>
        <p className="mt-4 font-overpass font-light opacity-90">
          Grow you audience and build your online brand
        </p>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <button className="rounded-full bg-white px-4 py-2 font-bold text-light-red">
          Start for Free
        </button>
        <button className="rounded-full border-2 px-4 py-2">Learn More</button>
      </div>
    </div>
  );
}

export default Hero;
