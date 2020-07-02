import React, { useEffect } from "react";

import Helmet from 'react-helmet';

import MoldBanner from './childComp/MoldBanner'
import MoldInsurance from './childComp/MoldInsurance'
import MoldCall from './childComp/MoldCall'

function Mold() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <Helmet>
      </Helmet>
      
      <MoldBanner/>
      <MoldCall/>
      <MoldInsurance/>

   
 </div>
  );
}

export default Mold;
