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

function Result({ bill, people, tip }) {
  const disableButton = bill === 0 && people === 0 ? true : false;

  const tipTotal = ((Number(bill) * Number(tip)) / 100).toFixed(2);
  const tipPerson = (tipTotal / Number(people)).toFixed(2);

  const total = Number(tipTotal) + Number(bill);
  const totalPerson = (total / Number(people)).toFixed(2);

  return (
    <div className="result flex h-full flex-col justify-between rounded-xl bg-very-dark-cyan px-6 pt-8 pb-6 text-very-light-grayish-cyan lg:px-8 lg:pt-10">
      <div className="result-body">
        <BoxTotal
          title={"Tip Amount"}
          total={tipPerson === "NaN" ? 0 : tipPerson}
        />
        <BoxTotal
          title={"Total"}
          total={totalPerson === "NaN" ? 0 : totalPerson}
        />
      </div>
      <div className="reset-button">
        <button className="w-full rounded-md bg-strong-cyan py-2 text-lg font-bold uppercase text-very-dark-cyan hover:bg-light-grayish-cyan lg:py-4">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Result;
