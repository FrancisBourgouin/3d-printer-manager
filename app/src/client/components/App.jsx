import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../styles/App.scss"

const App = () => {

  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">Home</Link>
          <Link to="/">3D Printers</Link>
          <Link to="/">Filaments</Link>
          <Link to="/">Models</Link>
          <Link to="/">Other files</Link>
          <Link to="/">Preferences</Link>
        </header>
        <main>

        </main>
        <footer>
          <span>Made for fun by Francis Bourgouin</span>
        </footer>
      </div>
    </Router>
  )
}

export default App