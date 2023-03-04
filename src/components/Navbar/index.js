import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

// Write your code here
const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const webSiteLogoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const headingStyle = isDarkTheme ? 'light-heading' : 'dark-heading'
      const themeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarBorderColor = isDarkTheme
        ? 'navbar-bg-color'
        : 'navbar-light-horizontal-line'

      const onChangeTheme = () => toggleTheme()

      return (
        <nav className={`navbar-container ${navbarBorderColor}`}>
          <div className="website-logo-container">
            <img
              src={webSiteLogoImg}
              alt="website logo"
              className="website-logo-img-size"
            />
          </div>
          <div>
            <ul className="links-container">
              <Link to="/">
                <li>
                  <h1 className={headingStyle}>Home</h1>
                </li>
              </Link>
              <Link to="/about">
                <li>
                  <h1 className={headingStyle}>About</h1>
                </li>
              </Link>
            </ul>
          </div>
          <div className="theme-container">
            <button
              type="button"
              className="theme-btn"
              onClick={onChangeTheme}
              data-testid="theme"
            >
              <img src={themeImg} alt="theme" className="theme-img-size" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
