import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">

        <div className="my-5 h-[1px] w-full bg-neutral-700" />
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <p className="text-center text-xs font-semibold text-gray">
            Copyright © 2025 Unruggable LLC. All rights reserved
          </p>
          <ul className="flex divide-x">
            {footerLinks.map((link) => (
              <li
                key={link}
                className="px-1 text-center text-xs font-semibold text-gray transition-colors hover:text-blue md:px-3"
              >
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
