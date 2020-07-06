import React, { useEffect } from "react";
import Helmet from "react-helmet";
import FireBanner from "./childComp/FireBanner";
import FireRepair from "./childComp/FireRepair";
import FireCallout from "./childComp/FireCallOut";
import FireCraft from "./childComp/FireCraft";
import FireTwoImg from "./childComp/FireTwoImg";
import ToolsTrade from "./childComp/ToolsTrade";

function Fire() {
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
          Fire Damage Restoration - Servicing Jackson Hole | Flood & Fire
          Solutions{" "}
        </title>
        <meta
          name="description"
          content=" Flood & Fire Solutions Jackson provides fire & smoke damage restoration and cleanup for luxury cabins in Jackson Hole  and surrounding areas."
        />
        <meta
          name="keywords"
          content="Smoke, Odor Removal, Fire Damage, Fire Cleanup, Restoration Company, Jackson Hole, Wyoming"
        />
      </Helmet>
      <FireBanner />
      <FireRepair />
      <FireCallout />
      <FireCraft />
      <FireTwoImg />
      <ToolsTrade />
    </div>
  );
}

export default Fire;
