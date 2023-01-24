import clsx from "clsx";

export default function Header({ isCollapsed, onClick }) {
  return (
    <header>
      <nav className="relative flex items-center justify-between px-4 py-6 pt-3">
        <div id="brand">
          <img src="./images/logo.svg" alt="" />
        </div>
        <div id="nav-list">
          <div
            className={clsx(
              "fixed inset-0 h-screen w-screen bg-almost-black opacity-60 transition-all duration-500",
              isCollapsed && "-z-10 opacity-0"
            )}
          ></div>
          <ul
            className={clsx(
              "fixed right-0 top-0 flex h-screen w-[60vw]  flex-col gap-4 bg-almost-white  pl-6 pt-20 pr-4 text-sm text-medium-gray transition-transform duration-500",
              isCollapsed && "translate-x-64 ",
              "[&>li]:cursor-pointer"
            )}
          >
            <li
              className={clsx(
                "[&>div>img]:hover:rotate-180 [&>div>img]:hover:transition-transform [&>div>img]:hover:duration-500",
                "[&_ul]:hover:relative [&_ul]:hover:z-10 [&_ul]:hover:flex [&_ul]:hover:translate-y-0 [&_ul]:hover:opacity-100 [&_ul]:hover:transition-all [&_ul]:hover:duration-500"
              )}
            >
              <div className="flex items-center gap-3">
                Features{" "}
                <img
                  className={clsx("h-[.4rem]")}
                  src="./images/icon-arrow-down.svg"
                  alt=""
                />
              </div>
              <div>
                <ul
                  className={clsx(
                    "absolute -z-10 flex -translate-y-20 flex-col gap-4 py-4 pl-6 opacity-0",
                    "[&_li]:flex [&_li]:items-center [&_li]:gap-3"
                  )}
                >
                  <li>
                    <img src="./images/icon-todo.svg" alt="" /> Todo List
                  </li>
                  <li>
                    <img src="./images/icon-calendar.svg" alt="" /> Calendar
                  </li>
                  <li>
                    <img src="./images/icon-reminders.svg" alt="" /> Reminders
                  </li>
                  <li>
                    <img src="./images/icon-planning.svg" alt="" /> Planning
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={clsx(
                "[&_img]:hover:rotate-180 [&_img]:hover:transition-transform [&_img]:hover:duration-500",
                "[&_ul]:hover:relative [&_ul]:hover:z-10 [&_ul]:hover:flex [&_ul]:hover:translate-y-0 [&_ul]:hover:opacity-100 [&_ul]:hover:transition-all [&_ul]:hover:duration-500"
              )}
            >
              <div className="flex items-center gap-3">
                Company{" "}
                <img
                  className={clsx("h-[.4rem]")}
                  src="./images/icon-arrow-down.svg"
                  alt=""
                />
              </div>
              <div>
                <ul className="absolute -z-10 flex -translate-y-20 flex-col gap-4 py-4 pl-6 opacity-0">
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
                </ul>
              </div>
            </li>
            <li>Careers</li>
            <li>About</li>
            <li className="mt-2 w-full text-center">Login</li>
            <li className="mr-4 w-full rounded-xl border-2 border-medium-gray  py-2 text-center">
              Register
            </li>
          </ul>
        </div>
        <div id="burger" className="relative z-10">
          <button
            onClick={onClick}
            className={clsx("h-10", !isCollapsed && "fixed right-4 top-3")}
          >
            {isCollapsed ? (
              <img src="./images/icon-menu.svg" alt="" />
            ) : (
              <img src="./images/icon-close-menu.svg" alt="" />
            )}
          </button>
        </div>
      </nav>
      <div id="banner">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="./images/image-hero-desktop.png"
          />
          <source srcset="./images/image-hero-mobile.png" />
          <img src="./images/image-hero-mobile.png" alt="" />
        </picture>
      </div>
    </header>
  );
}
