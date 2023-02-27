import ThemeContext from '../../context/ThemeContext'
import './index.css'
import NavBar from '../Navbar'

// Write your code here
const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const homeHeadingStyle = isDarkTheme
        ? 'home-light-heading'
        : 'home-dark-heading'
      const homeBgContainerColor = isDarkTheme ? 'home-bg-color' : null
      return (
        <>
          <NavBar />
          <div className={`home-bg-container ${homeBgContainerColor}`}>
            <img src={aboutImg} alt="about" className="home-img-size" />
            <h1 className={homeHeadingStyle}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
