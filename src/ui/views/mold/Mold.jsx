import React, { useEffect } from "react";

import Helmet from 'react-helmet';

import MoldBanner from './childComp/MoldBanner';
import MoldCall from './childComp/MoldCall';
import DestroyMold from './childComp/DestroyMold';
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
      </Helmet>
      
      <MoldBanner/>
      <MoldEffects />
      <MoldInsurance />
      <DestroyMold/>
      <MoldCall/>  
      <MoldServices/>
      <MinimizeMold/>
 </div>
  );
}

export default Mold;
