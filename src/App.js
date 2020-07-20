import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./services/routes";
import "./App.scss";


import Header from "./ui/static/header/Header"
import Footer from "./ui/static/footer/Footer";
import ContactUsButton from './ui/static/contactUsButton/ContactUsButton';


import ReactGA from 'react-ga';
// import TagManager from 'react-gtm-module';
// import { createBrowserHistory } from 'history';


//Google Anylitics 
ReactGA.initialize('UA-75452441-3');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactGA.event({
  category: 'User',
  action: 'Sent message'
});


// const history = createBrowserHistory();

// history.listen((location) => {
//   ReactGA.set({ page: location.pathname });
//   ReactGA.pageview(location.pathname)
// }
// );


//Tag Manager
// const tagManagerArgs = {
//     gtmId: 'GTM-MT8C2TJ'
// }

// TagManager.initialize(tagManagerArgs)



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
        <ContactUsButton />
      </BrowserRouter>   
    </>
  );
}

export default App;
