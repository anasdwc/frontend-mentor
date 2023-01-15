import logoDollar from "../assets/icon-dollar.svg";
import logoPeople from "../assets/icon-person.svg";
import InputNumber from "./InputNumber";

function Body() {
  return (
    <main className="-mt-4 h-screen rounded-3xl bg-white px-8 py-16">
      <InputNumber id="bill" label="Bill" labelIcon={logoDollar} />
      <div className="input-group mb-8 grid grid-cols-2 gap-4">
        <label
          htmlFor="tip"
          className="col-span-full mb-2 block text-lg font-bold text-dark-grayish-cyan"
        >
          Select Tip %
        </label>
        <div className="radio">
          <input type="radio" id="fivePercent" value="5" />
          <label htmlFor="fivePercent">5%</label>
        </div>
        <div className="radio">
          <input type="radio" id="tenPercent" value="10" />
          <label htmlFor="tenPercent">10%</label>
        </div>
        <div className="radio">
          <input type="radio" id="fiveteenPercent" value="15" />
          <label htmlFor="fiveteenPercent">15%</label>
        </div>
        <div className="radio">
          <input type="radio" id="twentyPercent" value="25" />
          <label htmlFor="twentyPercent">20%</label>
        </div>
        <div className="radio">
          <input type="radio" id="twentyFivePercent" value="25" />
          <label htmlFor="twentyFivePercent">25%</label>
        </div>
        <div className="input">
          <input
            type="number"
            id="customTip"
            placeholder="Custom"
            className="w-full rounded-md bg-very-light-grayish-cyan py-2 px-4 text-right text-2xl font-bold text-very-dark-cyan placeholder-dark-grayish-cyan"
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
