import React from "react";
import Enjoy from "./components/enjoy/Enjoy";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import Negotiate from "./components/negotiate/Negotiate";
import WhatWeDo from "./components/whatwedo/WhatWeDo";

//

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Negotiate />
      <Enjoy />
      <WhatWeDo />
    </>
  );
}

export default App;
