export default function Bar({day, height, today}) {
  const maxHeight = height * 200 / 70

  const style = {
    height: `${maxHeight}px`
  }

  const bgBar = today === day ? 'bg-cyan' : 'bg-soft-red'

  return (
    <div className="bar-stats">
      <div className="bar-stats__header">
        <div className={`bar ${bgBar}`} data-day={day} style={style}></div>
        <p>{day}</p>
      </div>
    </div>
  )
}
