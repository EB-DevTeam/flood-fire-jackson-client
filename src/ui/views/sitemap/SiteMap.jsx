import React from 'react';
// import { usePageView } from '../../../services/CustomHooks';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function SiteMap({location}) {
    // usePageView(location.pathname);
    return(
        <main className="sitemap">
            {/* <Helmet>
                <title>Sitemap | Flood &amp; Fire Premium Cleaning &amp; Restoration</title>
                <meta name="description" content="Sitemap to the core webpages on the Flood &amp; Fire Solutions website."/>
            </Helmet> */}
            <Helmet>
                <title>Sitemap | Flood &amp; Fire Premium Cleaning &amp; Restoration</title>
                <meta name="description" content="Sitemap to the core webpages on the flood & fire solutions website."/>
            </Helmet>
            <section className="sitemap__section">
                <div className="sitemap__div">
                <h1 className="sitemap__h1">Flood &amp; Fire Solutions Jackson </h1>
                 <div className="sitemap__div-container">
                
                <Link className="sitemap__link--parent" to="/">Home</Link>
                
                <Link className="sitemap__link--child" to="/water">Water</Link>
                
                <Link className="sitemap__link--child" to="/fire">Fire</Link>
                
                <Link className="sitemap__link--child" to="/mold">Mold</Link>
               
                <Link className="sitemap__link--child" to="/mold">Natural Disasters</Link>

                <Link className="sitemap__link--child" to="/insurance">Insurance</Link>

                <Link className="sitemap__link--child" to="/contact">Contact</Link>

                <Link className="sitemap__link--child" to="/terms-of-use">Terms Of Use</Link>
                <Link className="sitemap__link--child" to="/privacy-policy">Privacy Policy</Link>
                <Link className="sitemap__link--child" to="/sitemap">Sitemap</Link>
                
            </div>
            </div>
            </section>
        </main>
    );
}

export default SiteMap;