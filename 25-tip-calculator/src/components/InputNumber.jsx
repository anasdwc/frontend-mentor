function InputNumber({ id, label, labelIcon }) {
  return (
    <div className="input-group">
      <label
        htmlFor={id}
        className="mb-2 block text-lg font-bold text-dark-grayish-cyan"
      >
        {label}
      </label>
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
          placeholder="0"
          className=" w-full rounded-lg bg-very-light-grayish-cyan py-2 px-6 text-right text-2xl font-bold text-very-dark-cyan"
        />
      </div>
    </div>
  );
}

export default InputNumber;
