import {Component} from 'react'

import './index.css'

import Thankyou from '../Thankyou'

import Emojis from '../Emojis'

class Feedback extends Component {
  state = {isclicked: false}

  onbuttonClick = () => {
    this.setState(prevState => ({isclicked: !prevState.isclicked}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isclicked} = this.state
    const result = isclicked ? (
      <Thankyou loveEmojiUrl={loveEmojiUrl} />
    ) : (
      <Emojis emojis={emojis} onclicking={this.onbuttonClick} />
    )
    return <div className="container">{result}</div>
  }
}
export default Feedback
