import FormItem from "./FormItem";

function Form({
  handleConfirm,
  cardName,
  handleCardName,
  cardNum,
  handleCardNum,
}) {
  const handleForm = (e) => e.preventDefault();

  return (
    <div className="form">
      <form onClick={handleForm}>
        <FormItem
          key={1}
          labelValue="Cardholder Name"
          value={cardName}
          inputName={["name"]}
          inputType="text"
          inputPlaceholder="e.g. Jane Appleseed"
          handleChange={handleCardName}
        />
        <FormItem
          key={2}
          labelValue="Card Number"
          inputName="cardNumber"
          inputType="text"
          inputPlaceholder="e.g. 1234 5678 9123 0000"
          value={cardNum}
          handleChange={handleCardNum}
        />
        <div className="form__column">
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
        </div>
        <button onClick={handleConfirm}>Confirm</button>
      </form>
    </div>
  );
}

export default Form;
