import React from "react";

const Button = ({ arrow, title, handleClick }) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className="relative rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {title} <span aria-hidden="true">{arrow ? "→" : null}</span>
      </button>
    </div>
  );
};

export default Button;
