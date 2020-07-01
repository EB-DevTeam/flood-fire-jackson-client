import React, { useState, useEffect, useReducer, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Routes from "./services/routes";
import Footer from "./ui/static/footer/Footer";
import Nav from "./ui/static/nav/Nav"
import ContactUsButton from './ui/static/contactUsButton/ContactUsButton'

function App() {
  return (
    <Router>
      <Nav/>
      <Routes />
      <Footer />
      <ContactUsButton />
      </Router>
  );
}

export default App;
