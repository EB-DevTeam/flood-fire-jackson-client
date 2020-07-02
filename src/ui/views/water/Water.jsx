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
        <title></title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>

      <WaterBanner />
      <DamageRestore />
      <WaterCallCallout />
      <WaterDamage/>
      <RestoreServices/>
      <WaterInCallout />
      <Craftsmanship/>
    </div>
  );
}

export default Water;
