import React from "react";
import { Helmet } from "react-helmet";
// import { usePageView } from '../../../services/CustomHooks';

function TermsOfUse(props) {
  // usePageView(props.location.pathname);
  return (
    <main className="terms">
      <Helmet>
        <title>
          Terms Of Use | Flood &amp; Fire Premium Cleaning & Restoration
        </title>
        <meta
          name="description"
          content="Flood &amp; Fire Solutions provides Cleaning &amp; Restoration services for a variety of disasters, including water and flood damage, fire, mold & more in Idaho Falls, ID. Call Us 24/7 at (307) 2015-9741"
        />
      </Helmet>

      <section className="termsOfUse__section">
        <div className="termsOfUse__div">
          <h1 className="termsOfUse__h1">Terms Of Use</h1>
          <h2 className="termsOfUse__h2">1. Terms</h2>
          <p className="termsOfUse__p">
            By accessing this web site, you are agreeing to be bound by these
            web site Terms and Conditions of Use, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this web site are protected by applicable
            copyright and trade mark law.
          </p>
          <h2 className="termsOfUse__h2">2. Use License</h2>
          <p className="termsOfUse__p">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Flood &amp; Fire Solutions’s
            web site for personal, non-commercial transitory viewing only. This
            is the grant of a license, not a transfer of title, and under this
            license you may not:
          </p>
          <ol type="a" className="termsOfUse__ol">
            <li className="termsOfUse__li">modify or copy the materials;</li>
            <li className="termsOfUse__li">
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li className="termsOfUse__li">
              attempt to decompile or reverse engineer any software contained on
              Flood &amp; Fire Solutions’s web site;
            </li>
            <li className="termsOfUse__li">
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li className="termsOfUse__li">
              transfer the materials to another person or “mirror” the materials
              on any other server.
            </li>
          </ol>
          <p className="termsOfUse__p">
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by Flood &amp; Fire
            Solutions at any time. Upon terminating your viewing of these
            materials or upon the termination of this license, you must destroy
            any downloaded materials in your possession whether in electronic or
            printed format.
          </p>
          <h2 className="termsOfUse__h2">3. Disclaimer</h2>
          <p className="termsOfUse__p">
            The materials on Flood &amp; Fire Solutions’s web site are provided
            “as is”. Flood &amp; Fire Solutions makes no warranties, expressed
            or implied, and hereby disclaims and negates all other warranties,
            including without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of
            rights. Further, Flood &amp; Fire Solutions does not warrant or make any
            representations concerning the accuracy, likely results, or
            reliability of the use of the materials on its Internet web site or
            otherwise relating to such materials or on any sites linked to this
            site.
          </p>
          <h2 className="termsOfUse__h2">4. Limitations</h2>
          <p className="termsOfUse__p">
            In no event shall Flood &amp; Fire Solutions or its suppliers be
            liable for any damages (including, without limitation, damages for
            loss of data or profit, or due to business interruption,) arising
            out of the use or inability to use the materials on Flood &amp; Fire
            Solutions’s Internet site, even if Flood &amp; Fire Solutions or a Flood
            &amp; Fire Solutions authorized representative has been notified orally
            or in writing of the possibility of such damage. Because some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            these limitations may not apply to you.
          </p>
          <h2 className="termsOfUse__h2">5. Revisions and Errata</h2>
          <p className="termsOfUse__p">
            The materials appearing on Flood &amp; Fire Solutions’s web site
            could include technical, typographical, or photographic errors.
            Flood &amp; Fire Solutions does not warrant that any of the materials on
            its web site are accurate, complete, or current. Flood &amp; Fire
            Solutions may make changes to the materials contained on its web
            site at any time without notice. Flood &amp; Fire Solutions does not,
            however, make any commitment to update the materials.
          </p>
          <h2 className="termsOfUse__h2">6. Links</h2>
          <p className="termsOfUse__p">
            Flood &amp; Fire Solutions has not reviewed all of the sites linked
            to its Internet web site and is not responsible for the contents of
            any such linked site. The inclusion of any link does not imply
            endorsement by Flood &amp; Fire Solutions of the site. Use of any such
            linked web site is at the user’s own risk.
          </p>
          <h2 className="termsOfUse__h2">7. Site Terms of Use Modifications</h2>
          <p className="termsOfUse__p">
            Flood &amp; Fire Solutions may revise these terms of use for its web
            site at any time without notice. By using this web site you are
            agreeing to be bound by the then current version of these Terms and
            Conditions of Use.
          </p>
          <h2 className="termsOfUse__h2">8. Governing Law</h2>
          <p className="termsOfUse__p">
            Any claim relating to Flood &amp; Fire Solutions’s web site shall be
            governed by the laws of the State of Idaho without regard to its
            conflict of law provisions.
          </p>
        </div>
      </section>
    </main>
  );
}

export default TermsOfUse;
