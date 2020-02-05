import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="#" className="icon alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; {new Date().getFullYear()} Digitial Hills</li>
      </ul>
    </div>
  </footer>
)

export default Footer
