import React, { useReducer } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Printers from './Printers';
import Filaments from './Filaments';
import Models from './Models';
import Prints from './Prints';
import Dashboard from './Dashboard';
import Header from './Header';
import Footer from './Footer';
import "../styles/App.scss"
import { initialState, reducer } from '../helpers/reducer'


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/printers">
              <Printers {...{ state, dispatch }} />
            </Route>
            <Route path="/prints">
              <Prints />
            </Route>
            <Route path="/filaments">
              <Filaments />
            </Route>
            <Route path="/models">
              <Models />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App