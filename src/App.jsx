import React, { useEffect, useState } from "react";
import ToggleTheme from "./components/ToggleTheme";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { toggleTheme } from "./redux/ThemeSlice";

const App = () => {
  const { darkMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <BrowserRouter>
      <nav className="bg-[#131212] p-5 text-white shadow-lg  dark:shadow-yellow-50 font-bold dark:text-yellow-100">
        <ul className="flex justify-end space-x-6">
          <div>
            <button
              onClick={() => dispatch(toggleTheme())}
              className="cursor-pointer "
            >
              {darkMode ? (
                <BsSunFill size={25} className="mx-3 shadow-lg " />
              ) : (
                <BsMoonFill size={25} className="mx-3" />
              )}
            </button>
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">Page-1</Link>
          </li>
          <li>
            <Link to="/page2">Page-2</Link>
          </li>
          <li>
            <Link to="/page3">Page-3</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ToggleTheme />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
