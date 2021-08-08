import React, { useContext } from "react";

export const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: "dodgerblue" }}
      {...props}
      className={`rounded-full px-4 py-2 text-white hover:text-black hover:shadow-lg transition duration-200 outline-none focus:outline-none focus:ring-4 ${props.className}`}
    >
      {props.children}
    </button>
  );
};
