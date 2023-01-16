import logoDollar from "../assets/icon-dollar.svg";
import logoPeople from "../assets/icon-person.svg";
import InputNumber from "./InputNumber";
import Result from "./Result";
import SelectTip from "./SelectTip";

function Body({
  onClick,
  percentValue,
  billValue,
  handleBill,
  peopleValue,
  handlePeople,
}) {
  return (
    <main className="-mt-4 max-w-5xl rounded-3xl bg-white px-8 py-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:p-12">
      <section className="calculator flex flex-col justify-evenly">
        <InputNumber
          id="bill"
          label="Bill"
          labelIcon={logoDollar}
          inputValue={billValue}
          onInput={handleBill}
        />
        <SelectTip onClick={onClick} percentValue={percentValue} />
        <InputNumber
          id="people"
          label="Number of People"
          labelIcon={logoPeople}
          inputValue={peopleValue}
          onInput={handlePeople}
        />
      </section>
      <section className="result">
        <Result bill={billValue} people={peopleValue} tip={percentValue} />
      </section>
    </main>
  );
}

export default Body;
