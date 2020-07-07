import React, { useEffect } from "react";

import Helmet from "react-helmet";

import MoldBanner from "./childComp/MoldBanner";
import MoldCall from "./childComp/MoldCall";
import DestroyMold from "./childComp/DestroyMold";
import MoldServices from "./childComp/MoldServices";
import MinimizeMold from "./childComp/MinimizeMold";
import MoldInsurance from "./childComp/moldInsurance";
import MoldEffects from "./childComp/MoldEffects";

function Mold() {
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
          Mold Inspection & Removal - Servicing Jackson Hole | Flood & Fire
          Solutions{" "}
        </title>
        <meta
          name="description"
          content=" Flood & Fire Solutions Jackson inspects and removes mold. We restore & cleanup mold damage for luxury homes in Jackson Hole and surrounding areas.
"
        />
        <meta
          name="keywords"
          content="Smoke, Odor Removal, Fire Damage, Fire Cleanup, Restoration Company, Jackson Hole, Wyoming"
        />
      </Helmet>

      <MoldBanner />
      <MoldEffects />
      <MoldInsurance />
      <DestroyMold />
      <MoldCall />
      <MoldServices />
      <MinimizeMold />
    </div>
  );
}

export default Mold;
