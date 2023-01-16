function InputNumber({ id, label, labelIcon, onInput, inputValue }) {
  const errorInfo = inputValue == 0 ? "block" : "hidden";
  const errorBorder =
    inputValue == 0
      ? "border-2 border-solid border-red-500 focus-within:outline-red-500"
      : "";

  return (
    <div className="input-group">
      <div className="label flex items-center justify-between">
        <label
          htmlFor={id}
          className="mb-2 block text-lg font-bold text-dark-grayish-cyan"
        >
          {label}
        </label>
        <p className={`text-sm font-bold text-red-500 ${errorInfo}`}>
          Cant be zero
        </p>
      </div>
      <div className="input-icon relative">
        <label htmlFor={id} className="cursor-pointer">
          <img
            src={labelIcon}
            alt=""
            aria-hidden={true}
            className="absolute bottom-0 top-0 left-6 my-auto w-4"
          />
        </label>
        <input
          type="number"
          id={id}
          onChange={onInput}
          value={inputValue}
          placeholder="0"
          className={`w-full rounded-lg  bg-very-light-grayish-cyan py-2 px-6 text-right text-2xl font-bold text-very-dark-cyan focus-within:outline-strong-cyan ${errorBorder}`}
        />
      </div>
    </div>
  );
}

export default InputNumber;
