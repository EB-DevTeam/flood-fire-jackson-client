import React from "react";

export default function Highlights () {

return(
<section className="highlights__section">
        <div className="highlights__div-Cont">

        <div className="highlights__div">
        <i className="fas fa-phone highlights__icon" />
        <h3>24/7 Emergency Response</h3>
        <p>Help is just a quick phone call away.</p>
        </div>

        <div className="highlights__div">
            <div className="highlights__div-stars highlights__icon">
            <i className="fas fa-star highlights__iconStar" />
            <i className="fas fa-star highlights__iconStar" />
            <i className="fas fa-star highlights__iconStar" />
            <i className="fas fa-star highlights__iconStar" />
            <i className="fas fa-star highlights__iconStar" />
            </div>
          <h3>5 Start Google Rating</h3>
          <p>Customer satisfaction is our top priority.</p>
        </div>

        <div className="highlights__div">
        <i className="fas fa-file-alt highlights__icon" />
          <h3>We Bill Your Insurance</h3>
          <p>We make the billing process simple & easy.</p>
        </div>

        </div>
      </section>
);
}