import React from "react";
import { Route, Routes } from "react-router-dom";
//
import Homepage from "./../pages/Homepage";
import Newsletter from "./../pages/Newsletter";

//

const Router = () => {
  return (
    <Routes>
      {/* HOMEPAGE */}
      <Route path="/" element={<Homepage />} />
      {/* ================================================================ */}
      {/*   NEWSLETTER SECTION */}
      <Route path="/subscribe" element={<Newsletter />} />
    </Routes>
  );
};

export default Router;
