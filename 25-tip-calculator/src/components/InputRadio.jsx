function InputRadio({ text, onClick, percentValue }) {
  const textToNum = text.split("%")[0];
  const active =
    percentValue === textToNum
      ? "bg-strong-cyan text-very-dark-cyan"
      : "bg-very-dark-cyan text-white";

  return (
    <div
      className={`radio  ${active} flex w-full cursor-pointer items-center justify-center rounded-md py-2 px-4 text-center text-2xl font-bold `}
      onClick={onClick}
    >
      <p>{text}%</p>
    </div>
  );
}

export default InputRadio;
