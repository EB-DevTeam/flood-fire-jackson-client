import React from "react";

export default function Highlights() {
  return (
    <section className="highlights__section">
      <div className="highlights__div-Cont">
        <div className="highlights__div">
          <i className="fas fa-phone highlights__icon" />
          <div>
            <h3>24/7 Emergency Response</h3>
            <p>Help is just a quick phone call away.</p>
          </div>
        </div>

        <div className="highlights__div">
          <div className="highlights__div-stars highlights__icon">
            <i className="fas fa-star highlights__iconStar" />
            <i className="fas fa-star highlights__iconStar" />
            <i className="fas fa-star highlights__iconStar" />
            <i className="fas fa-star highlights__iconStar" />
            <i className="fas fa-star highlights__iconStar" />
          </div>
          <div>
            <h3>5 Start Google Rating</h3>
            <p>Customer satisfaction is our top priority.</p>
          </div>
        </div>

        <div className="highlights__div">
          <i className="fas fa-medal highlights__icon" />
          <div>
            <h3>Careful Courteous Professionals</h3>
            <p>Our team of dedicated experts is here to assist you.</p>
          </div>
        </div>
        <div className="highlights__div">
          <i className="fas fa-house-user highlights__icon" />
          <div>
            <h3>No Break Gaurantee</h3>
            <p>Worry free cleanup and repairs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
