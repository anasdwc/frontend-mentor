export default function Balance({ logo }) {
  return (
    <div className="balance my-2 mx-4 flex justify-between rounded-lg bg-soft-red p-6 text-left text-white">
      <div className="balance__detail">
        <h1 className="text-base font-normal text-pale-orange">My Balance</h1>
        <h2 className="pt-1 text-2xl font-bold">$921.48</h2>
      </div>
      <div className="balance__logo flex">
        <img src={logo} alt="" aria-hidden={true} />
      </div>
    </div>
  );
}
