import React from "react";

export default function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="focus: inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 uppercase ring-yellow-300 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-offset-2 focus:outline-none sm:px-6 sm:py-4"
    >
      {children}
    </button>
  );
}
