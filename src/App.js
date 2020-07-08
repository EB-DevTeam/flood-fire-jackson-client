import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./services/routes";
import "./App.scss";

import Header from "./ui/static/header/Header"
import Footer from "./ui/static/footer/Footer";

import ReactGA from 'react-ga';

//Google Anylitics 

ReactGA.initialize('UA-75452441-3');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
