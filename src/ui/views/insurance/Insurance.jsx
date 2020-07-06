import React, { useEffect } from "react";
import Helmet from 'react-helmet';
import InsuranceBanner from "./childCom/InsuranceBanner";



function Insurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
       <Helmet>
         </Helmet>
         <InsuranceBanner/>
      
    </div>
  );
}

export default Insurance;
