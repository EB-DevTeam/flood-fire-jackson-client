import React from "react";

export default function MinimizeMold() {
  return (
    <section className="minimizeMold__section">
      <div>
        <div>
          <h2>Minimize Mold Damage</h2>
        </div>
        <div>
          <div className="effects__div-right">
            <div className="effects__div-gridBoxTwo">
              <div>
                <h3 className="effects__h3">Act Fast</h3>
                <p className="effects__p">
                It is very important that you don’t wait to call a mold removal and restoration company because mold, in the right environment, can grow quickly and turn a small problem into a big (and expensive) issue.                </p>
              </div>
              <div className="effects__div-imgCont">
                <div className="effects__div-rightImg minimizeMold__img1"></div>
              </div>
            </div>
          </div>

          <div className="effects__div-gridBoxOne">
            <div className="effects__div-imgCont">
              <div className="effects__div-leftImg minimizeMold__img2"></div>
            </div>
            <div>
              <h3 className="effectsn__h3">Free Inspection</h3>
              <p className="effects__p">
              Although you may only see small signs of mold there is a good possibility that there is mold growing in places that we can not see (behind drywall, inside insulation, etc.). Call for a free inspection.               </p>
            
              <a className="red-to-grey__button" href="tel:3072159741">
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
