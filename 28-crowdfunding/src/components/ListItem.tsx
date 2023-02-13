import clsx from "clsx";

const ListItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <li
      className={clsx(
        "border-b-2 border-gray-100 pb-4 last-of-type:border-b-0 last-of-type:pb-0",
        "md:border-b-0 md:pb-0"
      )}
    >
      <a href="#">{text}</a>
    </li>
  );
};

export default ListItem;
