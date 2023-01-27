import clsx from "clsx";

function MenuList({ title, itemList }) {
  return (
    <ul className="my-12 flex flex-col gap-1 text-center text-white last:mb-0 md:my-0 md:text-left">
      <li className="mb-4 font-bold opacity-80 ">{title}</li>
      {itemList.map((item) => (
        <li className="opacity-50">{item}</li>
      ))}
    </ul>
  );
}

function Footer() {
  return (
    <footer
      className={clsx(
        "flex flex-col items-center rounded-tr-[5rem] bg-very-dark-black-blue py-16",
        " md:flex-row md:items-start md:justify-between md:pr-80 md:pl-44"
      )}
    >
      <div>
        <img src="./images/logo.svg" alt="" />
      </div>
      <div>
        <MenuList
          title="Product"
          itemList={[
            "Overview",
            "Pricing",
            "Marketplace",
            "Features",
            "Integrations",
          ]}
        />
      </div>
      <div>
        <MenuList
          title="Company"
          itemList={["About", "Team", "Blog", "Careers"]}
        />
      </div>
      <div>
        <MenuList
          title="Connect"
          itemList={["Contact", "Newsletetr", "LinkedIn"]}
        />
      </div>
      {/* <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </footer>
  );
}

export default Footer;
