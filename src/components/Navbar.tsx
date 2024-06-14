import { appleImg, bagImg, searchImg } from "../utils";

import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between px-5 py-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <ul className="flex flex-1 justify-center gap-x-14 max-sm:hidden">
          {navLists.map((link) => (
            <li
              key={link}
              className="text-gray transition-colors hover:text-white"
            >
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <button>
            <img src={searchImg} alt="search" width={18} height={18} />
          </button>
          <button>
            <img src={bagImg} alt="bag" width={18} height={18} />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
