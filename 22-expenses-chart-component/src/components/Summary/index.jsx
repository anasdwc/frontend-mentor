import Bar from "./Bar";

export default function Summary({ data, today }) {
  const handleBar = (e) => {
    setTimeout(() => e.target.classList.remove("active"), 2000);
    e.target.classList.add("active");
  };
  return (
    <div className="summary m-2 mx-4 mt-6 rounded-lg bg-pale-orange p-6 text-left">
      <h2 className="text-2xl font-bold text-dark-brown">
        Spending - Last 7 Days
      </h2>
      <div className="summary__bar-chart border-b-solid mt-10 mb-6 grid grid-cols-7 items-end gap-3 border-b-2 border-b-cream pb-8 text-center text-medium-brown">
        {data.map((item, i) => (
          <Bar
            key={i}
            day={item.day}
            height={item.amount}
            today={today}
            handleBar={handleBar}
          />
        ))}
      </div>
      <div className="summary__footer grid grid-cols-2 text-medium-brown">
        <div className="summary__footer__this-month">
          <h3 className="text-sm">Total this month</h3>
          <p className="pt-1 text-3xl font-bold text-dark-brown">$478.33</p>
        </div>
        <div className="summary__footer__last-month self-end text-right">
          <p className="font-bold text-dark-brown">+2.4%</p>
          <h3 className="text-sm">from last month</h3>
        </div>
      </div>
    </div>
  );
}
