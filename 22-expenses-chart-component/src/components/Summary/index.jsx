import Bar from './Bar'

export default function Summary({data, today})  {
  const handleBar = (e) => {
    setTimeout(() => e.target.classList.remove('active'), 2000)
    e.target.classList.add('active')
  }
  return (
    <div className="summary text-left m-2 mt-6 mx-4 bg-pale-orange p-6 rounded-lg">
      <h2 className='text-dark-brown font-bold text-2xl'>Spending - Last 7 Days</h2>
      <div className="summary__bar-chart grid grid-cols-7 pb-8 mt-10 mb-6 text-center gap-3 text-medium-brown border-b-solid border-b-cream border-b-2 items-end">
        {data.map((item, i) => (
          <Bar key={i} day={item.day} height={item.amount} today={today} handleBar={handleBar} />
        ))}
      </div>
      <div className="summary__footer grid grid-cols-2 text-medium-brown">
        <div className="summary__footer__this-month">
          <h3 className='text-sm'>Total this month</h3>
          <p className='text-dark-brown pt-1 text-3xl font-bold'>$478.33</p>
        </div>
        <div className="summary__footer__last-month self-end text-right">
          <p className='text-dark-brown font-bold'>+2.4%</p>
          <h3 className='text-sm'>from last month</h3>
        </div>
      </div>
    </div>
  )
}