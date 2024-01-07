/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import Logo from "../assets/anil-logo.png";

const Header = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [navToggle, setNavToggle] = useState(false);
  const [theme, setTheme] = useState("light");
  const themeModeHandler = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const isActive = (url) =>
    activeLink === url.substring(url.indexOf("#"))
      ? "text-red-600 focus:text-red-600"
      : "";

  const handleNavItemClick = (url) => {
    setActiveLink(url.substring(url.indexOf("#")));
    setNavToggle(false);
  };
  const navItems = [
    {
      title: "Home",
      url: "#home",
    },
    {
      title: "About",
      url: "#about",
    },
    {
      title: "Skills",
      url: "#skills",
    },
    {
      title: "Projects",
      url: "#projects",
    },
    {
      title: "Contact",
      url: "#contact",
    },
  ];
  return (
    <header className="w-full h-20 p-5 self-center  bg-slate-100 shadow-md dark:bg-neutral-800 dark:shadow-gray-600">
      <nav className="max-w-5xl mx-auto flex items-center my-auto ">
        <a href="/" className="transition-all duration-700 hover:scale-110">
          <img
            src={Logo}
            alt="company logo"
            width={200}
            className="dark:brightness-200"
          />
        </a>
        <button
          className="ms-auto lg:hidden text-3xl"
          onClick={() => setNavToggle(!navToggle)}
        >
          <MdMenu />
        </button>
        <div
          id="navbar-default"
          className={`ms-auto ${
            navToggle ? "block absolute top-16 start-0 " : "hidden"
          } w-full lg:w-auto lg:block`}
        >
          <ul className="flex flex-col gap-4 p-4 text-gray-800 bg-gray-300 list-none font-medium lg:flex-row lg:p-0 lg:gap-8 lg:bg-inherit lg:text-lg dark:text-white">
            {navItems.map(({ title, url }) => (
              <li
                key={title}
                className={`transition-all duration-500 hover:text-cyan-600 hover:translate-x-1 hover:scale-110 ${isActive(
                  url
                )}`}
                onClick={() => handleNavItemClick(url)}
              >
                <a href={url} className="capitalize">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button className="text-3xl ms-6 md:ms-10" onClick={themeModeHandler}>
          {theme === "light" ? (
            <MdOutlineDarkMode />
          ) : (
            <MdOutlineLightMode className="text-white" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
