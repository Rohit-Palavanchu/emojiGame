// Write your code here.
import './index.css'

const NavBar = props => {
  const {clickedEmojis, GameOverStatus, currentScore, topScore} = props
  return GameOverStatus || clickedEmojis.length === 12 ? (
    <nav className="navbar-container">
      <div className="nav-items-container">
        <div>
          <div className="logo-container">
            <img
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
            />
            <h1 className="logo-name">Emoji Game</h1>
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="navbar-container">
      <div className="nav-items-container">
        <div>
          <div className="logo-container">
            <img
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
            />
            <h1 className="logo-name">Emoji Game</h1>
          </div>
        </div>
        <div className="score-display-container">
          <p className="score-display">Score: {currentScore}</p>
          <p className="score-display">Top Score: {topScore}</p>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
