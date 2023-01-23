export default function Body() {
  return (
    <main>
      <section className="text-center">
        <h2 className="mt-8 mb-4 text-4xl font-bold text-almost-black">
          Make remote work
        </h2>
        <p className="text-sm text-medium-gray">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="mt-4 rounded-xl bg-almost-black px-5 py-3 text-sm text-almost-white">
          Learn more
        </button>
      </section>
      <section id="clients" className="mt-10 mb-8 px-4">
        <ul className="grid grid-cols-4 items-center gap-8">
          <li>
            <img src="./images/client-databiz.svg" alt="" />
          </li>
          <li>
            <img src="./images/client-audiophile.svg" alt="" />
          </li>
          <li>
            <img src="./images/client-meet.svg" alt="" />
          </li>
          <li>
            <img src="./images/client-maker.svg" alt="" />
          </li>
        </ul>
      </section>
    </main>
  );
}
