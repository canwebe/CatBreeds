import React from "react";
import Home from "./components/Home/index";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Nav from "./components/Nav";
const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/info" exact component={About} />
      </Switch>
    </>
  );
};

export default App;
