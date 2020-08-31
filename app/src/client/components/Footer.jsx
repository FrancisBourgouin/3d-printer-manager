import React from 'react'
import ServerLogo from '../icons/server-light.svg'
import DatabaseLogo from '../icons/database-light.svg'

const Footer = () => {

  return (
    <footer className="Footer">
      <span>Local DB</span> <DatabaseLogo />
      <span>Remote DB</span> <ServerLogo />

    </footer>
  )
}

export default Footer