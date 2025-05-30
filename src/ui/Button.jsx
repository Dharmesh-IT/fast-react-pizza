import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type }) {
  const base =
    "focus: inline-block rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase ring-yellow-300 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-offset-2 focus:outline-none ";
  const styles = {
    primary: base + "px-4 py-3 sm:px-6 sm:py-4",
    // small: base + "px-2 py-1 text-sm",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "border-2 border-stone-300 inline-block rounded-full bg-transparent font-semibold tracking-wide text-stone-400 uppercase ring-yellow-300 transition-colors duration-300 hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-200  focus:text-stone-800focus:ring focus:ring-offset-2 focus:outline-none px-4 py-2.5 sm:px-6 sm:py-3.5",
  };
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
