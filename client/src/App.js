import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Departments from "./components/Departments";
import Department from "./components/Department";
import DepartmentForm from "./components/DepartmentForm";
import NoMatch from "./components/NoMatch";
import ItemForm from "./components/ItemForm";
import { Container } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentForm} />
        <Route exact path="/departments/:id" component={Department} />
        <Route exact path="/departments/:id/items/new" component={ItemForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
