import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Departments from "./components/Departments";
import Department from "./components/Department";
// import DepartmentForm from "./components/DepartmentForm";
// import Item from "./components/Item";
// import ItemForm from "./components/ItemForm";
import NoMatch from "./components/NoMatch";
import ItemForm from "./components/ItemForm";

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/departments" component={Departments} />
      {/* <Route exact path="/departments/new" component={DepartmentForm} /> */}
      <Route exact path="/departments/:id" component={Department} />
      <Route exact path="/departments/:id/items/new" component={ItemForm} />
      {/* <Route
        exact
        path="/departments/:department_id/items/:id"
        component={Item}
      /> */}
      {/* <Route
        exact
        path="/departments/:department_id/items/:id/edit"
        component={ItemForm}
      /> */}
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default App;
