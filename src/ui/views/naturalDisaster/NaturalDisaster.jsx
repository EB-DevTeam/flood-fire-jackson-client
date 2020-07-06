import React, { useEffect } from "react";

import Helmet from 'react-helmet';
import NaturalBanner from "./childComp/NaturalBanner";
import NaturalCallCallout from "./childComp/NaturalCallCallout";
import HaveYour from "./childComp/HaveYour";
import DisasterServices from "./childComp/DisasterServices";
import CraftsMatter from "./childComp/CraftsMatter";
import ExperiencedRestoration from "./childComp/ExperiencedRestoration";



function NaturalDisaster() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <Helmet>
      </Helmet>

      <NaturalBanner/>
      <HaveYour/>
      <NaturalCallCallout/>
      <CraftsMatter />
      <DisasterServices />
      <ExperiencedRestoration />
   
 </div>
  );
}

export default NaturalDisaster;
