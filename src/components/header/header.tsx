import { ReactNode } from "react";
import { MdAdd } from "react-icons/md";

import Logo from "@/assets/logo.svg";

function Header({
  onReset,
  children,
}: {
  onReset: () => void;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-teal-700 bg-blue-900 px-3 lg:px-6 py-2 flex justify-between items-center sticky top-0 z-20">
      <div className="flex items-center justify-start gap-3">
        <h1 className="text-white text-lg lg:text-xl font-bold flex items-center justify-start">
          <img
            src={Logo}
            alt="BuildWithAbdou Logo"
            className="size-6 lg:size-8 mr-2"
          />
          BuildWithAbdou
        </h1>
        <p className="text-teal-300 max-md:hidden">|</p>
        <button
          className="max-md:hidden relative cursor-pointer flex-none flex items-center justify-center rounded-md text-xs font-semibold leading-4 py-1.5 px-3 hover:bg-teal-500 text-white shadow-sm dark:shadow-highlight/20 bg-teal-600"
          onClick={onReset}
        >
          <MdAdd className="mr-1 text-base" />
          New
        </button>
        <p className="text-teal-300 text-sm max-md:hidden">
          Build and Share with Abdou
        </p>
      </div>
      {children}
    </header>
  );
}

export default Header;
