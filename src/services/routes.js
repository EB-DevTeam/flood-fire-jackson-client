import React from 'react';
import { Switch, Route } from "react-router-dom";

// import ReactGA from "react-ga";

//Import Views
import Home from '../ui/views/home/Home';
import Water from '../ui/views/water/Water';
import Fire from '../ui/views/fire/Fire';
import Mold from '../ui/views/mold/Mold';
import NaturalDisaster from '../ui/views/naturalDisaster/NaturalDisaster';
import Insurance from '../ui/views/insurance/Insurance';
import Contact from '../ui/views/contact/Contact';



//Footer View
import TermsOfUse from "../ui/views/terms/TermsOfUse";
import SiteMap from '../ui/views/sitemap/SiteMap';
// import XML from '../ui/views/sitemap/sitemap.xml';
import PrivacyPolicy from "../ui/views/privacyPolicy/PrivacyPolicy";
import NotFound from '../ui/views/notFound/NotFound';


function Routes() {
  
  return (
    
          <Switch>
            <Route exact={true} path="/" component={Home} /> 


            <Route path="/fire" component={Fire} />
            <Route path="/water" component={Water} />
            <Route path="/mold" component={Mold} />
            <Route path="/natural-disaster" component={NaturalDisaster} />
            <Route path="/insurance" component={Insurance} />
            <Route path="/contact" component={Contact} />

                     
            <Route path="/terms-of-use" component={TermsOfUse} />
            <Route path="/sitemap" component={SiteMap} />
            {/* <Route component={XML} path={'localhost:3000/sitemap.xml'} /> */}
            <Route path="/privacy-policy" component={PrivacyPolicy} />          

                   
            <Route component={NotFound} />       
          </Switch>          
  );
}

export default Routes;