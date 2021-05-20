import React, { Component } from 'react'
import Add from './components/Add'
import Subtract from './components/Subtract'
import Input from './components/Input'
import Reset from './components/Reset'



class App extends Component {
  state = {
    count: 0
  }

countUp = () => {
  this.setState(
    {count: this.state.count + 1}
  )
}

countDown = () => {
  this.setState(
    {count: this.state.count - 1}
  )
}

inputNum = (number) =>{
  let value = parseInt(number)
  this.setState(
    {count: this.state.count + value}
  )
}

reset = () => {
  this.setState({
    count: 0
  })
}

render() {
  return(
    <div className="App">
      <div className="container">
        <p>Lets Count!</p>
        <h4>{this.state.count}</h4>
      </div>
      <div className="container-two">
        <Add countUp={this.countUp} />
        <Subtract countDown={this.countDown} />
      </div>
      <div className="container-three">
        <Input inputNum={this.inputNum} />
        <Reset reset={this.reset} />
      </div>
    </div>
  )
}

}

export default App