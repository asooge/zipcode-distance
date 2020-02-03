import React from 'react'
import './App.css'
import zipcodes from './zipcode-slim.json'
import Distance from './Distance'
import Header from './Header'
import EnterZip from './EnterZip'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input1: '',
      input2: ''
    }
  }

  // return zipcode data on valid input, else return undefined
  getZipData = (input) => {
    return zipcodes[parseInt(input).toString()]
  }

  // onChange handler for both inputs
  // set state for input1 or input2
  handleInput = (event) => {
    const input = "input" + event.target.name
    const value = event.target.value
    this.setState({ [input]: value })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <EnterZip num={1} value={this.state.input1} handleChange={this.handleInput}/>
        <EnterZip num={2} value={this.state.input2} handleChange={this.handleInput}/>
        
        {this.getZipData(this.state.input1) && this.getZipData(this.state.input2) && (
          <Distance 
            location1={this.getZipData(this.state.input1)}
            location2={this.getZipData(this.state.input2)}/>)}
      </div>
    )
  }
}

export default App;
