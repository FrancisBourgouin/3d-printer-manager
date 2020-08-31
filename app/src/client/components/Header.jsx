import React from 'react'
import { Link } from 'react-router-dom'
import CogsLogo from '../icons/cogs-light.svg'
import CubeLogo from '../icons/cube-light.svg'
import LassoLogo from '../icons/lasso-light.svg'
import PrinterLogo from '../icons/print-light.svg'
import HomeLogo from '../icons/home-light.svg'
import PrintLogo from '../icons/coffee-togo-light.svg'

const Header = () => {

  return (
    <header className="Header">
      <section>
        <h1>3D Print</h1>
        <h1>Manager</h1>
      </section>
      <Link to="/">
        <HomeLogo />
        <span>Home</span>
      </Link>
      <Link to="/printers">
        <PrinterLogo />
        <span>Printers</span>
      </Link>
      <Link to="/prints">
        <PrintLogo />
        <span>Prints</span>
      </Link>
      <Link to="/filaments">
        <LassoLogo />
        <span>Filaments</span>
      </Link>
      <Link to="/models">
        <CubeLogo />
        <span>Models</span>
      </Link>
      <Link to="/dashboard">
        <CogsLogo />
        <span>Dashboard</span>
      </Link>
    </header>
  )
}

export default Header
