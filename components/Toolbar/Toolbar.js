import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { connect } from 'react-redux'

export const height = '60px'

const Toolbar = ({ className, authenticatedUser }) => (
  <div className={`toolbar${className ? ` ${className}` : ''}`}>
    <div className="container">
      <div className="navbar px-0 navbar-dark navbar-expand">
        <a className="navbar-brand navbar-logo" href="/">
          Summoners
        </a>
        <div className="mr-auto" />
        <ul className="navbar-nav">
          {authenticatedUser ? (
            <React.Fragment>
              <li className="nav-item">
                <Link href="/account">
                  <a className="nav-link">{authenticatedUser.displayName || 'My account'}</a>
                </Link>
              </li>
              <li className="nav-item">
                <a href="/logout" className="nav-link">
                  Log out
                </a>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li className="nav-item">
                <Link href="/login ">
                  <a href="/" className="nav-link">
                    Login
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/register ">
                  <a href="/" className="nav-link">
                    Register
                  </a>
                </Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </div>

    <style jsx>{`
      .toolbar {
        height: ${height};
        color: #fff;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 999;
        background: rgba(0, 10, 20, 0.4);
      }

      .navbar {
        padding-top: 0;
        padding-bottom: 0;
        box-shadow: 0 1px rgba(255, 255, 255, 0.1);
      }

      .navbar-logo {
        padding-left: 16px;
        font-family: 'Montserrat', 'Roboto', 'Helvetica', 'Arial', sans-serif;
        font-weight: bold;
      }

      .nav-link {
        height: ${height};
        padding: 20px 15px !important;
        color: #c9b987 !important;
      }

      .nav-link:hover {
        box-shadow: 0 1px rgba(255, 255, 255, 0.15);
        color: #fff !important;
      }

      .nav-link.active {
        color: #fff !important;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        box-shadow: 0 1px rgba(255, 255, 255, 0.15);
      }
    `}</style>
  </div>
)

Toolbar.displayName = 'Toolbar'
Toolbar.propTypes = {
  className: PropTypes.string,
}

const mapStateToProps = ({ session }) => ({
  authenticatedUser: session.user,
})

export default connect(mapStateToProps)(Toolbar)
