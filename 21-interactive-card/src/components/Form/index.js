import FormItem from "./FormItem";

function Form() {
  return (
    <div className="form">
      <form>
        <FormItem
          key={1}
          labelValue="Cardholder Name"
          inputName={["name"]}
          inputType="text"
          inputPlaceholder="e.g. Jane Appleseed"
        />
        <FormItem
          key={2}
          labelValue="Card Number"
          inputName="cardNumber"
          inputType="number"
          inputPlaceholder="e.g. 1234 5678 9123 0000"
        />
        <FormItem
          key={3}
          labelValue="Exp. Date (MM/YY)"
          inputName={["month", "year"]}
          inputType="number"
          inputPlaceholder={["MM", "YY"]}
          totalInputItem={2}
        />
        <FormItem
          key={4}
          labelValue="CVC"
          inputName="cvc"
          inputType="number"
          inputPlaceholder="e.g. 123"
        />
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default Form;
