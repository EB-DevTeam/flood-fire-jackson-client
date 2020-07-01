import React, { useEffect } from "react";
import Helmet from 'react-helmet'


function Fire() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
      </Helmet>
        
    </div>
  );
}

export default Fire;
