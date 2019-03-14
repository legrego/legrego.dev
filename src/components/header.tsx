import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
// @ts-ignore
import logo from '../images/icon.png';

const Header = ({ siteTitle }) => {
  const [isActive, setIsActive] = useState(false);

  const activeClass = isActive ? 'is-active' : '';

  function toggleActive() {
    setIsActive(!isActive);
  }

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/"><img src={logo} title={siteTitle} /></Link>

          <a role="button" onClick={toggleActive} className={`navbar-burger burger ${activeClass}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${activeClass}`}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/">About</Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Home-Assistant
              </a>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/homeassistant_elasticsearch">Elasticsearch</Link>
              </div>

            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                HomeSeer
              </a>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/homeseer_twilio_messaging">Twilio Messaging</Link>
                <Link className="navbar-item" to="/homeseerbeat">homeseerbeat</Link>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  social: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
}
export default Header
