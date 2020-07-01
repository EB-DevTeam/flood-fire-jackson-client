import React, { useEffect } from "react";

import Helmet from "react-helmet";

function Water() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title></title>
        <meta
          name="description"
          content=""
        />
        <meta name="keywords" content=""/>
      </Helmet>
    </div>
  );
}

export default Water;
