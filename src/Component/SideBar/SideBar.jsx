import { GiMeal } from "react-icons/gi";
import img from "../../assets/logo-BfNap0Pe.png";
import styles from "./SideBar.module.scss";
import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className="sticky hidden md:block top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full w-full px-2 py-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              <img src={img} alt="Recipe Logo" className="w-full" />
            </li>
            <li className="w-full">
              <NavLink to={""} className={styles.list}>
                <GiMeal className="inline mx-3" />
                meal
              </NavLink>
            </li>
            <li className="w-full my-5">
              <NavLink to={"ingredient"} className={styles.list}>
                <GiMeal className="inline mx-3" />
                ingredient
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink to={"area"} className={styles.list}>
                <GiMeal className="inline mx-3" />
                area
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
