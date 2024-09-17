import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer mt-auto xl:ps-[15rem]  font-normal font-inter bg-[#fdf9e2] hs-dark-mode-active:bg-[#1a1e25] text-defaultsize leading-normal text-[0.813] shadow-[0_0_0.4rem_rgba(0,0,0,0.1)] dark:bg-bodybg border-t border-white/40 py-4 text-center">
        <div className="container">
          <span className="text-black dark:text-white">
            {" "}
            Copyright © <span id="year">2024</span>{" "}
            <a href="#!" className="text-black dark:text-white">
              Accelerate Africa
            </a>
            <a href="#!"> </a> All rights reserved{" "}
          </span>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
