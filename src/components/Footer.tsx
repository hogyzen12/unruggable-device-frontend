import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            More ways to shop: <span className="text-blue underline">Apple Store</span> or{" "}
            <span className="text-blue underline">other retailer near you.</span>
          </p>
          <p className="text-xs font-semibold text-gray">or call 1-800-MY-APPLE.</p>
        </div>
        <div className="my-5 h-[1px] w-full bg-neutral-700" />
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <p className="text-center text-xs font-semibold text-gray">
            Copyright © 2024 Apple Inc. All rights reserved
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
