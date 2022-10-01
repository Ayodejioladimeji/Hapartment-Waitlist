import React from "react";
import Enjoy from "./components/enjoy/Enjoy";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import Negotiate from "./components/negotiate/Negotiate";

//

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Negotiate />
      <Enjoy />
    </>
  );
}

export default App;
