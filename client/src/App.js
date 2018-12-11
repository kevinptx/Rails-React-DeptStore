import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Departments from "./components/Departments";
// import DepartmentForm from "./components/DepartmentForm";
import Department from "./components/Department";
// import ItemForm from "./components/ItemForm";

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/departments" component={Departments} />
      {/* <Route exact path="/departments/new" component={DepartmentForm} /> */}
      <Route exact path="/departments/:id" component={Department} />
      {/* <Route exact path="/departments/:id/items/new" component={ItemForm} /> */}
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default App;
