import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/actors">
        <Actors />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/directors">
        <Directors />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </BrowserRouter>
  );
}

export default App;
