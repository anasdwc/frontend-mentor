import InputRadio from "./InputRadio";

function SelectTip({ onClick, percentValue }) {
  const tips = ["5", "10", "15", "25", "50"];

  return (
    <div className="input-group my-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
      <label
        htmlFor="tip"
        className="col-span-full mb-2 block text-lg font-bold text-dark-grayish-cyan"
      >
        Select Tip %
      </label>
      {tips.map((tip, idx) => (
        <InputRadio
          key={idx}
          text={tip}
          onClick={onClick}
          percentValue={percentValue}
        />
      ))}
      <div className="input">
        <input
          type="number"
          id="customTip"
          value={percentValue}
          placeholder="Custom"
          className="w-full rounded-md bg-very-light-grayish-cyan py-2 px-4 text-right text-2xl font-bold text-very-dark-cyan placeholder-dark-grayish-cyan focus-within:outline-strong-cyan"
          onInput={onClick}
        />
      </div>
    </div>
  );
}

export default SelectTip;
