export default function Balance({logo}) {
  return (
    <div className="balance flex bg-soft-red my-2 mx-4 p-6 justify-between rounded-lg text-white text-left">
      <div className="balance__detail">
        <h1 className="text-base font-normal text-pale-orange">My Balance</h1>
        <h2 className="text-2xl font-bold pt-1">$921.48</h2>
      </div>
      <div className="balance__logo flex">
        <img src={logo} alt="" aria-hidden={true} />
      </div>
    </div>
  )
}
