import React from "react";

export default function RestoreServices() {
  return (
    <section className="restoreServices__section">
      <div className="imageLeftFlush__div-gridBox">
        <div className="imageLeftFlush__div-img restoreServices_img"></div>
        <div className="imageLeftFlush__div-boxTwo">
          <h2>Water Damage Restoration Services</h2>
          <ul>
            <span className="dot restoreServices__dot"></span>
            <li className="buttonSpace">
              Identify, control and eliminate the source of the water damage.
              <br />
            </li>{" "}
            <span className="dot restoreServices__dot"></span>
            <li className="buttonSpace">
              Extraction of standing water with high powered equipment.
              <br />
            </li>
            <span className="dot restoreServices__dot"></span>
            <li className="buttonSpace">
              High-speed drying with strategically placed Air Movers.
              <br />
            </li>
            <span className="dot restoreServices__dot"></span>
            <li className="buttonSpace">
              Dehumidifying affected areas with state-of-the-art efficient and
              effective equipment.
              <br />
            </li>
            <span className="dot restoreServices__dot"></span>
            <li className="buttonSpace">
              Temperature control to provide the most effective drying
              conditions with TES Evaporator.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
