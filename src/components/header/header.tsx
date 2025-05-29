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
    <header className="border-b border-primary-700 bg-gradient-to-r from-primary-800 to-primary-900 px-3 lg:px-6 py-3 flex justify-between items-center sticky top-0 z-20 shadow-md">
      <div className="flex items-center justify-start gap-3">
        <h1 className="text-white text-lg lg:text-xl font-display font-bold flex items-center justify-start">
          <img
            src={Logo}
            alt="BuildWithAbdou Logo"
            className="size-6 lg:size-8 mr-2 animate-pulse-slow"
          />
          <span className="text-gradient bg-gradient-to-r from-white to-secondary-300">BuildWithAbdou</span>
        </h1>
        <p className="text-secondary-300 max-md:hidden">|</p>
        <button
          className="max-md:hidden relative cursor-pointer flex-none flex items-center justify-center rounded-md text-xs font-semibold leading-4 py-1.5 px-3 hover:bg-secondary-500 text-white shadow-sm hover:shadow-glow-teal transition-all duration-300 bg-secondary-600"
          onClick={onReset}
        >
          <MdAdd className="mr-1 text-base" />
          New
        </button>
        <p className="text-secondary-200 text-sm max-md:hidden font-light">
          Build and Share with Abdou
        </p>
      </div>
      {children}
    </header>
  );
}

export default Header;
