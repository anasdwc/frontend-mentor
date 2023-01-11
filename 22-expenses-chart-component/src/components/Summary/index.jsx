import Bar from './Bar'

export default function Summary({data})  {
  return (
    <div className="summary">
      <h2>Spending - Last 7 Days</h2>
      <div className="summary__bar-chart">
        {data.map((item, i) => (
          <Bar key={i} day={item.day} height={item.amount} />
        ))}
      </div>
      <div className="summary__footer">
        <div className="summary__footer__this-month">
          <h3>Total this month</h3>
          <p>$478.33</p>
        </div>
        <div className="summary__footer__last-month">
          <p>+2.4%</p>
          <h3>from last month</h3>
        </div>
      </div>
    </div>
  )
}
