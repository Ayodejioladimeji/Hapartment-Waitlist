import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Aos from "aos";
import "aos/dist/aos.css";

//

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  //
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
