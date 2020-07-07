import React, { useEffect } from "react";

import Helmet from "react-helmet";
import WaterBanner from "./childComp/WaterBanner";
import WaterCallCallout from "./childComp/WaterCallCallout";
import WaterInCallout from "./childComp/WaterInCallout";
import DamageRestore from "./childComp/DamageRestore";
import WaterDamage from "./childComp/WaterDamage";
import Craftsmanship from "./childComp/Craftsmanship";
import RestoreServices from "./childComp/RestoreServices";

function Water() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          {" "}
          Water Damage Restoration - Servicing Jackson Hole | Flood &amp; Fire
          Solutions{" "}
        </title>
        <meta
          name="description"
          content=" Flood &amp; Fire Solutions Jackson provides water damage restoration for luxury homes in Jackson Hole and surrounding areas 24/7.
"/>
        <meta
          name="keywords"
          content="Water Damage, Water Cleanup, Restoration Company, Pipe Leaks, Flood Restoration, Jackson Hole"
        />
      </Helmet>

      <WaterBanner />
      <DamageRestore />
      <WaterCallCallout />
      <WaterDamage />
      <RestoreServices />
      <WaterInCallout />
      <Craftsmanship />
    </div>
  );
}

export default Water;
