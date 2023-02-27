import ThemeContext from '../../context/ThemeContext'
import './index.css'
import NavBar from '../Navbar'

// Write your code here
const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeHeadingStyle = isDarkTheme
        ? 'home-light-heading'
        : 'home-dark-heading'
      const homeBgContainerColor = isDarkTheme ? 'home-bg-color' : null
      return (
        <>
          <NavBar />
          <div className={`home-bg-container ${homeBgContainerColor}`}>
            <img src={homeImg} alt="home" className="home-img-size" />
            <h1 className={homeHeadingStyle}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
