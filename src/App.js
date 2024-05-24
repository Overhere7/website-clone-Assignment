import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import IntroPage from "./components/IntroPage/IntroPage";
import Footer from "./components/Footer/Footer";
import Values from "./components/Values/Values";
import Data from "./components/Data/Data";
import Revenue from "./components/Revenue/Revenue";
import Charts from "./components/Charts/Charts";
import Stats from "./components/Stats/Stats";

export default function App() {
  return (
    <>
      <NavBar />
      <IntroPage />
      <Values />
      <Data />
      <Revenue />
      <Charts />
      <Stats />
      <Footer />
    </>
  );
}
