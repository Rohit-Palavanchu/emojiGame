// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {parameters, onAddScore} = props
  const {id, emojiName, emojiUrl} = parameters
  const addScore = () => {
    onAddScore(id)
  }
  return (
    <li className="emoji-container">
      <button onClick={addScore} className="button" type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
