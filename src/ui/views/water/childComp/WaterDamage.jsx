import React from "react";

export default function WaterDamage() {
  return (
    <section className="waterDamage__section">
      <div>
        <div>
          <h2>Minmize Water Damage</h2>
        </div>
        <div>
          <div className="effects__div-right">
            <div className="effects__div-gridBoxTwo">
              <div>
                <h3 className="effects__h3">Act Quickly</h3>
                <p className="effects__p">
                  Water damage can be caused by a number of things including
                  heavy rains, broken pipes and even roof leaks. The devastation
                  can come in a short amount of time and if not treated
                  immediately can quickly grow from a small situation into a
                  giant problem. If you notice signs of water damage call Flood
                  and Fire Solutions right away. Our professionals will act
                  quickly as possible to minimize the water damage.
                </p>
              </div>
              <div className="effects__div-imgCont">
                <div className="effects__div-rightImg waterDamage__img1"></div>
              </div>
            </div>
          </div>

          <div className="effects__div-gridBoxOne">
            <div className="effects__div-imgCont">
              <div className="effects__div-leftImg waterDamage__img2"></div>
            </div>
            <div>
              <h3 className="effectsn__h3">Save Money</h3>
              <p className="effects__p">
                Our water damage repair pros have saved our clients thousands of
                dollars in the past by acting quickly and thoroughly and saving
                their hardwood floors, furniture and other priceless belongings.
              </p>
            
              <a className="blue-to-grey__button" href="tel:3072159741">
                {" "}
                (307) 215-9741
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
