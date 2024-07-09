import './index.css'

const EmojiItem = props => {
  const {emojiItemDetails, oncliking} = props
  const {name, imageUrl} = emojiItemDetails
  const onnbuttonclick = () => {
    oncliking()
  }
  return (
    <li className="emojiItem-container">
      <img
        src={imageUrl}
        alt={name}
        className="emoji"
        onClick={onnbuttonclick}
      />
      <p className="emoji-description">{name}</p>
    </li>
  )
}
export default EmojiItem
