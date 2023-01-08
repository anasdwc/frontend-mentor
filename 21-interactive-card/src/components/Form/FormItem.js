function InputItem({
  inputName,
  inputType,
  inputPlaceholder,
  handleChange,
  value,
}) {
  return (
    <input
      type={inputType}
      id={inputName}
      name={inputName}
      placeholder={inputPlaceholder}
      onChange={handleChange}
      value={value}
    />
  );
}

function FormItem({
  labelValue,
  inputType,
  inputName,
  inputPlaceholder,
  totalInputItem = 1,
  handleChange,
  value,
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
        handleChange={handleChange}
        value={value}
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
