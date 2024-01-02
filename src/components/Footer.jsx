/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full max-h-72 bg-slate-700 text-white">
      <div className="max-w-5xl mx-auto py-12 text-center">
        <h2 className="text-4xl font-medium mb-7">Anil Kumar</h2>
        <ul className="mb-7 flex justify-center">
          <li className="mr-7">
            <a
              className="inline-block transition-all duration-500 hover:text-cyan-600 hover:translate-x-1"
              href="https://www.linkedin.com/in/anil-kumar-66001"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="inline-block transition-all duration-500 hover:text-cyan-600 hover:translate-x-1"
              href="https://github.com/anilk749"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
        <p>Copyright &copy;2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
