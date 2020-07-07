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
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Luxury Home Restoration - Servicing Jackson Hole | Flood &amp; Fire
          Solutions
        </title>
        <meta
          name="keywords"
          content="Cabin Repair, Jackson, Jackson Hole, Alpine, Water Damage, Restoration, Water, Repair, Water Cleanupt"
        />
        <meta
          name="description"
          content="An emergency restoration company near you. Flood &amp; Fire Solutions Jackson repairs water, fire, and mold damage in Wyoming. Available 24/7 for emergency cleanup. "
        />
      </Helmet>

      <HomeBanner />
      <Highlights />
      <Restoration />
      <QualityCraft />
      <CallCallout />
      <DamageAssess />
      <InsuranceCallout />
      <Service />
    </div>
  );
}

export default Home;
