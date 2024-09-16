import { StartupsList } from "@/shared/data/dashboards/startupsdata";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import StartupHighlight from "./startuphighlight";
import StartupFounders from "./StartupFounders";
import StartupDescription from "./startupdescription";

const StartupDetails = () => {
  return (
    <Fragment>
      <Seo title={"Startup Management"} />
      <Pageheader
        currentpage="Startup Details"
        activepage="Dashboards"
        mainpage="Startup Details"
      />
      <div className="box">
        <StartupHighlight />
      </div>
      <div className=" mt-6">
        <StartupDescription />
      </div>
    </Fragment>
  );
};

StartupDetails.layout = "Contentlayout";

export default StartupDetails;
