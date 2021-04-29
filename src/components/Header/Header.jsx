import React from 'react'
import './Header.css'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <button type="button" className="headerButton">
            UPGRADE TO PRO
            <svg className="arrow" data-name="Layer 1" viewBox="0 0 32 32"><path fill="#8d8d8d" d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" /></svg>
          </button>
        </li>
        <li>
          <button type="button" className="headerButton">
            APPS
            <svg className="arrow" data-name="Layer 1" viewBox="0 0 32 32"><path fill="#8d8d8d" d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" /></svg>
          </button>
        </li>
        <li>
          <a href="." className="headerButton">
            <span>TOUR</span>
          </a>
        </li>
        <li>
          <button type="button" className="signIn">Sign in</button>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
