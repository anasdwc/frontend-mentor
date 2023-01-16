import logoDollar from "../assets/icon-dollar.svg";
import logoPeople from "../assets/icon-person.svg";
import InputNumber from "./InputNumber";
import Result from "./Result";
import SelectTip from "./SelectTip";

function Body({ onClick, percentValue }) {
  return (
    <main className="-mt-4 h-screen rounded-3xl bg-white px-8 py-16">
      <InputNumber id="bill" label="Bill" labelIcon={logoDollar} />
      <SelectTip onClick={onClick} percentValue={percentValue} />
      <InputNumber
        id="people"
        label="Number of People"
        labelIcon={logoPeople}
      />
      <Result />
    </main>
  );
}

export default Body;
