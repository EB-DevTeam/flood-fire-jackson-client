import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./services/routes";
import "./App.scss";

import Header from "./ui/static/header/Header"
import Footer from "./ui/static/footer/Footer";
import ContactUsButton from './ui/static/contactUsButton/ContactUsButton';

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
