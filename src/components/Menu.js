import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = ({ onToggleMenu }) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <a onClick={onToggleMenu} href="#one">
            Projects
          </a>
        </li>
        <li>
          <a onClick={onToggleMenu} href="#two">
            About
          </a>
        </li>
        <li>
          <a onClick={onToggleMenu} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
