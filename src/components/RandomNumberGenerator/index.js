// Write your code here
// Write your code here
import {Component} from 'react'
import '.index.css'

class RandomNumberGenerator extends Component {
  state = {isCount: 0}

  increseCount = () => {
    this.setState(previousState => {
      isCount: previousState + Math.ceil(Math.random()*100) 
    })
  }
  render() {
    const {isCount} = this.state
    return (
      <div className="bg">
        <h1 className="heading">Random Number</h1>
        <p className="paragraph">
          Generate a random number in the range of 0 to 100
        </p>
        <button type="button" className="button" onClick={this.increseCount}>
          Generate
        </button>
        <p>{isCount}</p>
      </div>
    )
  }
}
export default RandomNumberGenerator
