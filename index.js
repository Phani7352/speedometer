// Write your code here
import {Component} from 'react'
import './index.css'
class Speedometer extends Component {
  state = {count: 0}
  incSpeed() {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  decSpeed() {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }
  render() {
    const {count} = this.state
    return (
      <div className="speed_app_container">
        <div className="container">
          <h1 className="text">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="image"
          />
          <h1 className="text">Spedd is {count}mph</h1>
          <p className="text">Min limit is 0mph, Max limit is 200mph</p>
          <div>
            <button type="button" onClick={this.incSpeed}>
              Accelerate
            </button>
            <button type="button" onClick={this.decSpeed}>
              Apply Breaks
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
