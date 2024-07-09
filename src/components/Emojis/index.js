import EmojiItem from '../EmojiItem'

import './index.css'

const Emojis = props => {
  const {emojis, onclicking} = props

  return (
    <div className="feedback-container">
      <h1 className="feedback-container-heading">
        How satisfied are you with our customer support performance?
      </h1>
      <ul className="emojis-container">
        {emojis.map(eachEmoji => (
          <EmojiItem
            emojiItemDetails={eachEmoji}
            key={eachEmoji.id}
            oncliking={onclicking}
          />
        ))}
      </ul>
    </div>
  )
}
export default Emojis
