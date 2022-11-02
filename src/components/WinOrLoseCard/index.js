// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, winStatus, onResetGame} = props
  const resetGame = () => {
    onResetGame()
  }
  const card = winStatus ? (
    <div className="bg-container1">
      <div className="score-container1">
        <h1 className="score-title1">You Won</h1>
        <p className="score-desc1">Best Score</p>
        <p className="score-count1">12/12</p>
        <button onClick={resetGame} className="play-button1" type="button">
          Play Again
        </button>
      </div>
      <img
        className="winorlose-image"
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
      />
    </div>
  ) : (
    <div className="bg-container1">
      <div className="score-container1">
        <h1 className="score-title1">You Lose</h1>
        <p className="score-desc1">Score</p>
        <p className="score-count1">{score}</p>
        <button onClick={resetGame} className="play-button1" type="button">
          Play Again
        </button>
      </div>
      <img
        className="winorlose-image"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
    </div>
  )
  return card
}
export default WinOrLoseCard
