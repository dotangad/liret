import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { IPageProps } from "../lib/types";

interface ILayoutProps {
  children: React.ReactNode;
  links: { href: string; label: string }[];
}

const Layout: React.FC<ILayoutProps> = ({ children, links }: ILayoutProps) => {
  const {
    props: { authenticated, user },
  } = usePage<IPageProps>();
  links = links
    .concat(user?.admin ? [{ href: "/admin", label: "Admin" }] : [])
    .concat(authenticated ? [{ href: "/auth/logout", label: "Logout" }] : []);

  return (
    <div className="flex flex-col w-full h-full bg-gray-bg">
      <nav className="flex p-5 sm:px-12 justify-between items-center flex-col sm:flex-row">
        <div className="flex sm:w-1/3 w-full justify-center sm:justify-start">
          <div className="font-extrabold text-lg uppercase text-gray-400 tracking-wide">
            LIRET
          </div>
        </div>

        <div className="flex items-center justify-center sm:justify-end sm:w-1/3 w-full">
          {links.map(({ href, label }, i) => (
            <InertiaLink
              href={href}
              key={i}
              className={
                "font-bold text-lg sm:text-sm text-gray-700 uppercase mx-3" +
                (i === links.length - 1 ? "" : " mr-0")
              }
            >
              {label}
            </InertiaLink>
          ))}
        </div>
      </nav>

      <main className="flex-1 py-10 px-2 sm:px-0">{children}</main>

      <footer className="flex items-center justify-center py-4 text-gray-500 flex-col text-sm sm:text-xs text-center px-2">
        <div className="text-lg font-bold text-gray-300">
          &bull;&bull;&bull;
        </div>
        <div className="mb-2">
          &copy; 2021{" "}
          <a
            href="https://github.com/dotangad"
            className="font-bold"
            target="_blank"
            rel="noreferrer"
          >
            dotangad
          </a>
        </div>
        <div>
          Source{" "}
          <a
            href="https://github.com/dotangad/liret"
            className="font-bold"
            target="_blank"
            rel="noreferrer"
          >
            available
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
