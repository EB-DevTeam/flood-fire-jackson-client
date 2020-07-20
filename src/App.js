import React from "react";
import { Router } from "react-router-dom";
import Routes from "./services/routes";
import "./App.scss";
// import TagManager from 'react-gtm-module';
import { createBrowserHistory } from 'history';


import Header from "./ui/static/header/Header"
import Footer from "./ui/static/footer/Footer";
import ContactUsButton from './ui/static/contactUsButton/ContactUsButton';

import ReactGA from 'react-ga';

//Google Anylitics 
ReactGA.initialize('UA-75452441-3');
// ReactGA.pageview(window.location.pathname + window.location.search);

const history = createBrowserHistory();

history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname)
}
);

export const StateContext = React.createContext(undefined);
export const AppContext = React.createContext(undefined);

//Tag Manager
// const tagManagerArgs = {
//     gtmId: 'GTM-MT8C2TJ'
// }

// TagManager.initialize(tagManagerArgs)

function App() {

  return (
    <>
      {/* <AppContext.Provider value={{ ...appState, dispatch }}> */}
      <Router history={history}>
        <Header />
        <Routes />
        <Footer />
        <ContactUsButton />
      </Router>   
      {/* </AppContext.Provider>    */}
    </>
  );
}

export default App;
