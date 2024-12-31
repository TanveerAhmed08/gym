import { BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import Notfound from "./pages/notFound/Notfound";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainers />
      <Notfound />
    </BrowserRouter>
  );
};

export default App;
