import clsx from "clsx";
import Card from "./Card";
import ProgressBar from "./ProgressBar";
import StatsNumber from "./StatsNumber";

function Stats() {
  return (
    <Card>
      <div className={clsx("md:grid md:grid-cols-3 md:gap-16")}>
        <StatsNumber mb={8} border title="$89,914" subs="of $100,000 backed" />
        <StatsNumber mb={8} border title="5,007" subs="total backers" />
        <StatsNumber mb={0} border={false} title="56" subs="days left" />
      </div>
      <ProgressBar />
    </Card>
  );
}

export default Stats;
