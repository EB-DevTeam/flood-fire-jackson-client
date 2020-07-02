import React, { useEffect } from "react";

import Helmet from 'react-helmet';
import NaturalBanner from "./childComp/NaturalBanner";
import NaturalCallCallout from "./childComp/NaturalCallCallout";



function NaturalDisaster() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <Helmet>
      </Helmet>

      <NaturalBanner/>
      <NaturalCallCallout/>
   
 </div>
  );
}

export default NaturalDisaster;
