import React, { useEffect } from "react";
import Helmet from 'react-helmet';
import InsuranceBanner from "./childCom/InsuranceBanner";
import InsuranceClaim from "./childCom/InsuranceClaim";
import NavClaims from "./childCom/NavClaims";



function Insurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
       <Helmet>
         </Helmet>
         <InsuranceBanner/>
         <InsuranceClaim/>
         <NavClaims/>
      
    </div>
  );
}

export default Insurance;
