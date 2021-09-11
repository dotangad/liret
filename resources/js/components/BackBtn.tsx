import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

interface IBackBtnProps {
  href: string;
  className?: string;
}

const BackBtn:React.FC<IBackBtnProps> = ({href, className}: IBackBtnProps) => {
  return (
    <InertiaLink
      href={href}
      className={`flex justify-center items-center mr-3 ${className}`}
    >
      <div className="flex justify-center items-center bg-gray-bg p-3 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>
    </InertiaLink>
  );
};

export default BackBtn;
