import React from "react";

import logo_white from "../../../images/FFS_logo_white.png";

export default function Footer() {
  const date = new Date().toISOString().substr(0, 4);

  return (
    <footer className="footer__footer">
      <div className="footer__div-upperCont">
        <div className="footer__div-upper">
          <div className="footer__div-logo">
            <img
              src={logo_white}
              alt="Flood &amp; Fire Solutions logo"
              className="footer__img-logo"
            />
          </div>

          <div className="footer__div-address">
            <p className="footer__p">
              <span className="footer__span-header">Company</span>
              <br />
              #18 McCoy Creek Rd.<br></br>
              Alpine, WY 83128<br></br>
              (307) 215-9741
            </p>
          </div>
        

        <div className="footer__div-legal">
          <p className="footer__p">
            <span className="footer__span-header">Legal</span>
            <br />
            <a className="footer__a" href="/privacy-policy">
              Privacy Policy
            </a>
            <br />
            <a className="footer__a" href="/terms-of-use">
              Terms of Use
            </a>
            <br />
            <a className="footer__a" href="/sitemap">
              Sitemap
            </a>
          </p>
        </div>

        <div className="footer__div-call">
          <p className="footer__p">
            <span className="footer__span-callHeader">Give us a call</span>
            <a
              href="tel:3072159741"
              className="footer__button red-to-grey__button"
            >
              (307) 215-9741
            </a>
          </p>
        </div>
      </div>
      </div>

      <div className="footer__div-lowerCont">
        <div className="footer__div-lower">
          <div className="footer__div-copyright">
            <p className="footer__p-copyrightText">
              <span className="footer__span-rights">All Rights Reserved. </span>{" "}
              Copyright © {date} Flood &amp; Fire Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
