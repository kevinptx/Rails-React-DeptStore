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
import Item from "./components/Item";
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
        {/* Another way to render routes: You're rendering the actual component and you can render props with the actual component. This is how you can render components through react router. You don't have to do it this way but you can. We're getting the props through React Router. Any component rendered through these routes will give us these props. */}
        <Route
          exact
          path="/departments/:id/edit"
          render={props => <DepartmentForm edit {...props} />}
        />
        <Route exact path="/departments/:id" component={Department} />
        <Route exact path="/departments/:id/items/new" component={ItemForm} />
        <Route exact path="/departments/:id/items/:itemId" component={Item} />
        <Route
          exact
          path="/departments/:id/items/:itemId/edit"
          component={ItemForm}
        />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
