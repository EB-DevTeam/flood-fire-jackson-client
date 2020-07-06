import React, { useEffect } from "react";
import Helmet from 'react-helmet'
import FireBanner from "./childComp/FireBanner";
import FireRepair from "./childComp/FireRepair";
import FireCallout from "./childComp/FireCallOut";
import FireCraft from "./childComp/FireCraft";
import FireTwoImg from "./childComp/FireTwoImg";


function Fire() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
      </Helmet>
      <FireBanner/>
      <FireRepair/>
      <FireCallout/>
      <FireCraft/>
      <FireTwoImg/>
    </div>
  );
}

export default Fire;
