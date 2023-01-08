function InputItem({ inputName, inputType, inputPlaceholder }) {
  return (
    <input
      type={inputType}
      id={inputName}
      name={inputName}
      placeholder={inputPlaceholder}
    />
  );
}

function FormItem({
  labelValue,
  inputType,
  inputName,
  inputPlaceholder,
  totalInputItem = 1,
}) {
  const inputEle = [];

  while (totalInputItem > 0) {
    let i = totalInputItem - 1;
    inputEle.unshift(
      <InputItem
        key={totalInputItem}
        inputType={inputType}
        inputName={Array.isArray(inputName) ? inputName[i] : inputName}
        inputPlaceholder={
          Array.isArray(inputPlaceholder)
            ? inputPlaceholder[i]
            : inputPlaceholder
        }
      />
    );
    totalInputItem--;
  }

  return (
    <div className="form__input">
      <label htmlFor={inputName}>{labelValue}</label>
      {inputEle}
    </div>
  );
}

export default FormItem;
