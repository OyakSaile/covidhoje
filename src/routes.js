import { BrowserRouter, Route } from "react-router-dom";

import React from "react";
import Homepage from "./pages/homepage";
import Statistics from "./pages/Statistics";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/statistics" exact component={Statistics} />
    </BrowserRouter>
  );
}

export default Routes;
