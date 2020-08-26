import { BrowserRouter, Route } from "react-router-dom";

import React from "react";
import Homepage from "./pages/Homepage";
import Statistics from "./pages/Statistics";
import NewsPage from "./pages/News"

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Homepage} />
      <Route path="/statistics" exact component={Statistics} />
      <Route path="/newspage" exact component={NewsPage} />

    </BrowserRouter>
  );
}

export default Routes;
