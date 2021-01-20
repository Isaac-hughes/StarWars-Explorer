// import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Films from "./components/films"
import People from "./components/people"
import Starships from "./components/starships"
import Planets from "./components/planets"
import Vehicles from "./components/vehicles"
import Species from "./components/species"
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
  return (
    <div className="homeContent">
      <div className="tileRow">
        <div className="pageRedirectTile">
          <Link to="/films">FILMS</Link>
        </div>
        <div className="pageRedirectTile">
          <Link to="/people">PEOPLE</Link>
        </div>
      </div>
      <div className="tileRow">
        <div className="pageRedirectTile">
          <Link to="/planets">PLANETS</Link>
        </div>
        <div className="pageRedirectTile">
          <Link to="/species">SPECIES</Link>
        </div>
      </div>
      <div className="tileRow">
        <div className="pageRedirectTile">
          <Link to="/starships">STARSHIPS</Link>
        </div>
        <div className="pageRedirectTile">
          <Link to="/vehicles">VEHICLES</Link>
        </div>
      </div>
    </div>
  );
}

function FilmsPage() {
  return (
    <div className="pageContent">
      <h2>Films</h2>
      <Films />
    </div>
  );
}

function PeoplePage() {
  return (
    <div className="pageContent">
      <h2>People</h2>
      <People />
    </div>
  );
}

function PlanetsPage() {
  return (
    <div className="pageContent">
      <h2>Planets</h2>
      <Planets />
    </div>
  );
}

function SpeciesPage() {
  return (
    <div className="pageContent">
      <h2>Species</h2>
      <Species />
    </div>
  );
}

function StarshipsPage() {
  return (
    <div className="pageContent">
      <h2>Starships</h2>
      <Starships />
    </div>
  );
}

function VehiclesPage() {
  return (
    <div className="pageContent">
      <h2>Vehicles</h2>
      <Vehicles />
    </div>
  );
}


export default App;