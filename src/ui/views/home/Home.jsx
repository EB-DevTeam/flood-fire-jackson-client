import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import HomeBanner from "./childComp/HomeBanner";
import CallCallout from "./childComp/CallCallout";
import InsuranceCallout from "./childComp/InsuranceCallout";
import Restoration from "./childComp/Restoration";
import QualityCraft from "./childComp/QualityCraft";
import DamageAssess from "./childComp/DamageAssess";
import Service from "./childComp/Service";
import Highlights from "./childComp/Highlights";


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet></Helmet>
      <HomeBanner />
      <Highlights />
      <Restoration/>

      <QualityCraft/>
      <CallCallout />
      <DamageAssess/>
      <InsuranceCallout />
      <Service />
    </div>
  );
}

export default Home;
