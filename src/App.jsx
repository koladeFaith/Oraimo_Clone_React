import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Collection from "./components/Collection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Collection />
      <About />
      <Footer />
    </div>
  );
};

export default App;
