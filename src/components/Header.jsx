/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MdOutlineLightMode,
    MdOutlineDarkMode,
    MdMenu,
    MdClose,
} from "react-icons/md";
import Logo from "../assets/anil-logo.png";

const ulVariants = {
    closed: {
        transition: {
            staggerChildren: 0.15,
            staggerDirection: -1,
        },
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1,
        },
    },
};

const liVariants = {
    closed: {
        opacity: 0,
    },
    open: {
        opacity: 1,
    },
};

const Header = () => {
    const [activeLink, setActiveLink] = useState("#home");
    const [navToggle, setNavToggle] = useState(false);
    const [theme, setTheme] = useState("light");
    const [scrolling, setScrolling] = useState(false);

    const themeModeHandler = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    // this will check the current browser theme set by user
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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isActive = (url) =>
        activeLink === url.substring(url.indexOf("#"))
            ? "text-cyan-600 focus:text-cyan-600"
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
        <header
            className={`w-full fixed z-40 top-0 left-0 bg-neutral-200 shadow-md dark:bg-slate-800 dark:shadow-gray-600 duration-500 ${
                scrolling ? "h-12 md:h-16" : "h-14 md:h-20"
            }`}
        >
            <nav className="max-w-7xl md:w-[94%] h-full mx-auto flex items-center justify-between px-4">
                <a href="/">
                    <img
                        src={Logo}
                        alt="company logo"
                        width={200}
                        className="w-40 lg:w-56 dark:brightness-200"
                    />
                </a>
                <motion.div className={`ms-auto w-auto`}>
                    <ul
                        className={`hidden md:flex text-gray-800 md:list-none md:font-normal md:p-0 md:gap-7 md:bg-neutral md:text-lg dark:text-white dark:bg-neutral-800 dark:md:bg-inherit dark:md:shadow-none`}
                    >
                        {navItems.map(({ title, url }) => (
                            <li
                                key={title}
                                className={`text-center transition-colors duration-500 ease-in-out hover:text-cyan-600 ${isActive(
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
                </motion.div>
                {/* mobile navbar */}
                <AnimatePresence>
                    {navToggle && (
                        <motion.div
                            initial={{ width: 0, height: "100vh" }}
                            animate={{
                                position: "fixed",
                                top: 0,
                                right: 0,
                                width: "100%",
                                transition: { duration: 0.7 },
                            }}
                            exit={{
                                width: 0,
                                transition: { delay: 0.3, duration: 0.9 },
                            }}
                            className={`shadow-inner shadow-black/30 dark:shadow-cyan-50/20 bg-neutral-300 dark:bg-slate-900`}
                        >
                            <MdClose
                                className="mx-auto mt-6 mb-2 text-3xl rounded-md hover:ring focus:ring ring-cyan-500 dark:text-white"
                                onClick={() => setNavToggle(!navToggle)}
                            />
                            <motion.ul
                                initial="closed"
                                animate="open"
                                variants={ulVariants}
                                exit="closed"
                                className={`flex flex-col gap-5 p-4 text-gray-800 list-none font-medium dark:text-white `}
                            >
                                {navItems.map(({ title, url }) => (
                                    <motion.li
                                        variants={liVariants}
                                        key={title}
                                        className={`w-full text-center transition-colors duration-500 ease-in-out hover:text-cyan-600 ${isActive(
                                            url
                                        )}`}
                                        onClick={() => handleNavItemClick(url)}
                                    >
                                        <a
                                            href={url}
                                            className="w-full inline-block text-xl font-medium capitalize"
                                        >
                                            {title}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* -------------mobile nav end ------------ */}
                {/* dark/light mode button */}
                <button
                    className="text-3xl ms-6 md:ms-10"
                    onClick={themeModeHandler}
                >
                    {theme === "light" ? (
                        <MdOutlineDarkMode />
                    ) : (
                        <MdOutlineLightMode className="text-white" />
                    )}
                </button>
                {/* hamburger menu  */}
                <button
                    className="md:hidden ms-6 sm:ms-10 text-3xl rounded-md hover:ring focus:ring ring-cyan-500 dark:text-white"
                    onClick={() => setNavToggle(!navToggle)}
                >
                    <MdMenu />
                </button>
            </nav>
        </header>
    );
};

export default Header;
