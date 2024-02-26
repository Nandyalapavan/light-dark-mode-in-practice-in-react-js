import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChangeLight = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className={`dark-container ${modeClassName}`}>
        <h1 className="heading">click To Change Mode</h1>
        <button className="button" type="button" onClick={this.onChangeLight}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default LightDarkMode
