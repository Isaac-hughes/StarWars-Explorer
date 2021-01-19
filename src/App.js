// import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Films from "./components/films"
import "./App.css";

const App = () => {


  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/planets">Planets</Link>
            </li>
            <li>
              <Link to="/species">Species</Link>
            </li>
            <li>
              <Link to="/starships">Starships</Link>
            </li>
            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>
          </ul>
        </nav>

        
        <Switch>
          <Route path="/films">
            <FilmsPage />
          </Route>
          <Route path="/people">
            <PeoplePage />
          </Route>
          <Route path="/planets">
            <PlanetsPage />
          </Route>
          <Route path="/species">
            <SpeciesPage />
          </Route>
          <Route path="/starships">
            <StarshipsPage />
          </Route>
          <Route path="/vehicles">
            <VehiclesPage />
          </Route>
          
          <Route path="/">
            <Page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function Page() {
  return <h2>Home</h2>;
}

function FilmsPage() {
  return (
    <div>
      <h2>Films</h2>
      <Films />
    </div>
  );
}

function PeoplePage() {
  return <h2>People</h2>;
}

function PlanetsPage() {
  return <h2>Planets</h2>;
}

function SpeciesPage() {
  return <h2>Species</h2>;
}

function StarshipsPage() {
  return <h2>Starships</h2>;
}

function VehiclesPage() {
  return <h2>Vehicles</h2>;
}


export default App;