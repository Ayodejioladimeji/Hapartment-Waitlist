import React from "react";
import { Route, Routes } from "react-router-dom";
//
import Homepage from "./../pages/Homepage";
import Newsletter from "./../pages/Newsletter";
import Error from "./../pages/Error";

//

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Error />} />
      {/* HOMEPAGE */}
      <Route path="/" element={<Homepage />} />
      {/* ================================================================ */}
      {/*   NEWSLETTER SECTION */}
      <Route path="/subscribe" element={<Newsletter />} />
    </Routes>
  );
};

export default Router;
