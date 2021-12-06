import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login/login";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />

        {/* Ruta de páginas que no existen, error 404 */}
        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Página no encontrada
            </h1>
          )}
        />
        {/*<Route exact path={["/home"]} component={Home} />*/}
      </Switch>
    </Router>
  );
}

{
  /*function Home() {
  return <h2 style={{ marginTop: 50 }}>Home</h2>;
} */
}
