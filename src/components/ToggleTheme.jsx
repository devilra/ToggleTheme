import React from "react";

const ToggleTheme = () => {
  return (
    <div
      className={`flex dark:transition-all justify-center items-center h-screen dark:bg-neutral-900 dark:text-white`}
    >
      <h1 className="text-3xl text-slate-600 font-mono dark:text-white px-5 py-2 shadow-lg rounded-md">
        ToggleTheme
      </h1>
    </div>
  );
};

export default ToggleTheme;
