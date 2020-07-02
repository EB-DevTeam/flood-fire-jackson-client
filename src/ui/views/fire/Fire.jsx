import React, { useEffect } from "react";
import Helmet from 'react-helmet'
import FireBanner from "./childComp/FireBanner";
import FireRepair from "./childComp/FireRepair";


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
        
    </div>
  );
}

export default Fire;
