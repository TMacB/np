import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-grey-light has-text-white-ter">
        {/* <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div> */}
        <div className="content has-text-centered has-background-grey-light has-text-white-ter">
          <div className="container has-background-grey-light has-text-white-ter">
            <div className="columns">
              <div className="column is-6">
                <table>
                  <tbody>
                    <tr>
                      <td style={{ vAlign: 'middle', borderRight: '2px solid #cc0000'}}>
                        <a href="http://www.npengineering.co.uk"><img src={logo} width="110" /></a>
                      </td>
                      <td>&nbsp;</td>
                      <td style={{ textDecoration: 'none' }}>
                        <h5 className="title is-4 has-text-weight-bold">NP Engineering</h5>
                        <p className="subtitle is-5"><i>1 Midfield Road, Kirkcaldy, Fife.</i></p>
                        <a className="is-size-5" href="http://www.npengineering.co.uk">www.npengineering.co.uk</a><br/>
                        <a className="is-size-5" href="mailto:info@npengineering.co.uk">info@npengineering.co.uk</a><br/>
                        <a className="is-size-5" href="tel:01592 655377">01592 655377</a><br/>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br/>
                {/* <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section> */}
              </div>
              {/* <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div> */}
              <div className="column is-6 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
