import logoDollar from "../assets/icon-dollar.svg";
import logoPeople from "../assets/icon-person.svg";
import InputNumber from "./InputNumber";
import InputRadio from "./InputRadio";

function Body({ onClick, percentValue }) {
  return (
    <main className="-mt-4 h-screen rounded-3xl bg-white px-8 py-16">
      <InputNumber id="bill" label="Bill" labelIcon={logoDollar} />
      {/* Need to refactor select tip */}
      <div className="input-group mb-8 grid grid-cols-2 gap-4">
        <label
          htmlFor="tip"
          className="col-span-full mb-2 block text-lg font-bold text-dark-grayish-cyan"
        >
          Select Tip %
        </label>
        <InputRadio text="5" onClick={onClick} percentValue={percentValue} />
        <InputRadio text="10" onClick={onClick} percentValue={percentValue} />
        <InputRadio text="15" onClick={onClick} percentValue={percentValue} />
        <InputRadio text="25" onClick={onClick} percentValue={percentValue} />
        <InputRadio text="50" onClick={onClick} percentValue={percentValue} />
        <div className="input">
          <input
            type="number"
            id="customTip"
            placeholder="Custom"
            className="w-full rounded-md bg-very-light-grayish-cyan py-2 px-4 text-right text-2xl font-bold text-very-dark-cyan placeholder-dark-grayish-cyan"
            onInput={onClick}
          />
        </div>
      </div>
      <InputNumber
        id="people"
        label="Number of People"
        labelIcon={logoPeople}
      />
    </main>
  );
}

export default Body;
