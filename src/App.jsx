import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Recommendation from "./components/Recommendation";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Collection />
      <About />
      <Recommendation/>
      <Footer />
    </div>
  );
};

export default App;
