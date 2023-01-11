export default function Balance({logo}) {
  return (
    <div className="balance">
      <div className="balance__detail">
        <h1>My Balance</h1>
        <h2>$921.48</h2>
      </div>
      <div className="balance__logo">
        <img src={logo} alt="" aria-hidden={true} />
      </div>
    </div>
  )
}
