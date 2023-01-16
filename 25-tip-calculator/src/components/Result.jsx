function BoxTotal({ title, total }) {
  return (
    <div className="tip-amount mb-6 grid grid-cols-2 last:lg:mt-10">
      <h2 className="text-base font-bold ">
        {title}{" "}
        <span className="block text-sm text-grayish-cyan">/ person</span>
      </h2>
      <h3 className="self-center justify-self-end text-3xl font-bold text-strong-cyan lg:text-4xl">
        ${total}
      </h3>
    </div>
  );
}

function Result() {
  return (
    <div className="result flex h-full flex-col justify-between rounded-xl bg-very-dark-cyan px-6 pt-8 pb-6 text-white lg:px-8 lg:pt-10">
      <div className="result-body">
        <BoxTotal title={"Tip Amount"} total={4.27} />
        <BoxTotal title={"Total"} total={32.79} />
      </div>
      <div className="reset-button">
        <button
          type="reset"
          className="w-full rounded-md bg-strong-cyan py-2 text-lg font-bold uppercase text-very-dark-cyan lg:py-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Result;
