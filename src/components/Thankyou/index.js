import './index.css'

const Thankyou = props => {
  const {loveEmojiUrl} = props
  return (
    <div className="Thankyou-container">
      <img src={loveEmojiUrl} alt="love emoji" className="love" />
      <h1 className="Thankyou-container-heading">Thank You</h1>
      <p className="Thankyou-container-description">
        We will use your feedback to improve our customer support performance
      </p>
    </div>
  )
}

export default Thankyou
