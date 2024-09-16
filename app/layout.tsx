"use client";

import React, { Fragment, useEffect, useState } from "react";

import { Provider } from "react-redux";
import store from "@/shared/redux/store";

import { Helmet, HelmetProvider } from "react-helmet-async";
import Switcher from "@/shared/layout-components/switcher/switcher";
import Header from "@/shared/layout-components/header/header";
import Sidebar from "@/shared/layout-components/sidebar/sidebar";
import Footer from "@/shared/layout-components/footer/footer";
import Backtotop from "@/shared/layout-components/backtotop/backtotop";

const ContentLayout = ({ children }: any) => {
  const [lateLoad, setlateLoad] = useState(false);
  const Add = () => {
    document.querySelector("body")?.classList.remove("error-1");
    document.querySelector("body")?.classList.remove("landing-body");
  };

  useEffect(() => {
    Add();
    setlateLoad(true);
  });

  useEffect(() => {
    import("preline");
  }, []);

  const [MyclassName, setMyClass] = useState("");
  const Bodyclickk = () => {
    const theme = store.getState();
    if (localStorage.getItem("ynexverticalstyles") == "icontext") {
      setMyClass("");
    }
    if (window.innerWidth > 992) {
      let html = document.documentElement;
      if (html.getAttribute("icon-overlay") === "open") {
        html.setAttribute("icon-overlay", "");
      }
    }
  };
  return (
    <Fragment>
      <Provider store={store}>
        <div style={{ display: `${lateLoad ? "block" : "none"}` }}>
          <Switcher />
          <div className="page">
            <Header />
            <Sidebar />
            <div className="content">
              <div className="main-content" onClick={Bodyclickk}>
                {children}
              </div>
            </div>
            <Footer />
          </div>
          <Backtotop />
        </div>
      </Provider>
    </Fragment>
  );
};

export default ContentLayout;
