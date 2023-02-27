import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'
import './index.css'

// Write your code here
const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundHeadingStyle = isDarkTheme
        ? 'dark-heading-background'
        : 'light-heading-background'
      const notFoundParaStyle = isDarkTheme
        ? 'dark-para-background'
        : 'light-para-background'

      const notFoundBgContainer = isDarkTheme ? 'bg-container' : null
      return (
        <>
          <NavBar />
          <div className={`notfound-container ${notFoundBgContainer}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notfound-img-size"
            />
            <h1 className={`${notFoundHeadingStyle}`}>Lost Your Way?</h1>
            <p className={`${notFoundParaStyle}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
