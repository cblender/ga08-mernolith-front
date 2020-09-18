import React from "react";
import "./App.css";
import Header from "./Header.js";
import DirectorPage from "./DirectorPage";
import { Route, HashRouter } from "react-router-dom";
import FilmPage from "./FilmPage";
import Home from "./Home";

function App() {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Header />
        <main>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/directors"
            render={({ match }) => <DirectorPage match={match} />}
          />
          <Route
            exact
            path="/films"
            render={({ match }) => <FilmPage match={match} />}
          />
        </main>
      </div>
    </HashRouter>
  );
}

export default App;