/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {clickedEmojis: [], topScore: 0, isGameOver: false}

  onResetGame = () => {
    this.setState({clickedEmojis: [], isGameOver: false})
  }

  showResultCard = () => {
    const {clickedEmojis, topScore} = this.state
    const {emojisList} = this.props
    let winOrLoseCard = null
    const bool = true
    if (clickedEmojis.length === emojisList.length) {
      this.state.topScore = clickedEmojis.length
      console.log('hi')
      winOrLoseCard = (
        <WinOrLoseCard
          onResetGame={this.onResetGame}
          winStatus={bool}
          score={`${clickedEmojis.length}/${clickedEmojis.length}`}
        />
      )
    } else {
      console.log('Fail')
      if (clickedEmojis.length > topScore) {
        this.state.topScore = clickedEmojis.length
      }
      winOrLoseCard = (
        <WinOrLoseCard
          onResetGame={this.onResetGame}
          winStatus={!bool}
          score={`${clickedEmojis.length}/${emojisList.length}`}
        />
      )
    }
    return <div className="align-items-to-center">{winOrLoseCard}</div>
  }

  onAddScore = id => {
    this.setState(prevState => {
      if (!prevState.clickedEmojis.includes(id)) {
        return {clickedEmojis: [...prevState.clickedEmojis, id]}
      }
      return {isGameOver: !prevState.isGameOver}
    })
  }

  updateState = () => {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const {clickedEmojis} = this.state
    if (clickedEmojis.length === 12) {
      return this.showResultCard()
    }
    const emojisList = shuffledEmojisList()
    return (
      <ul className="emojis-container">
        {emojisList.map(i => (
          <EmojiCard onAddScore={this.onAddScore} key={i.id} parameters={i} />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojis, topScore} = this.state
    const {isGameOver} = this.state
    return (
      <div className="bg-container">
        <NavBar
          clickedEmojis={clickedEmojis}
          topScore={topScore}
          currentScore={clickedEmojis.length}
          GameOverStatus={isGameOver}
        />
        <div className="card-container">
          {isGameOver ? this.showResultCard() : this.updateState()}
        </div>
      </div>
    )
    // return isGameOver ? this.showResultCard() : this.updateState()
  }
}
export default EmojiGame
