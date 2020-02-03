import React from 'react'
import './App.css'
import zipcodes from './zipcode-slim.json'
import LocationData from './LocationData'
import Distance from './Distance'
import Header from './Header'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input1: '',
      input2: '',
      zip1: null,
      zip2: null,
      info1: null,
      info2: null
    }
  }

  // onChange handler for input 1
  // set state for input1
  // convert input into a number then back to string to remove 0's from beginning
  // access zipcode data and set to state.info1
  inputOne = (event) => {
    const input1 = event.target.value
    this.setState({ input1 })
    const zip1 = parseInt(input1).toString()
    this.setState({ zip1 })
    this.setState({ info1: zipcodes[zip1] })
  }

  // onChange handler for input 2
  // same logic as input 1
  inputTwo = (event) => {
    const input2 = event.target.value
    this.setState({ input2 })
    const zip2 = parseInt(input2).toString()
    this.setState({ zip2 })
    this.setState({ info2: zipcodes[zip2] })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <label>Enter zip code 1: </label>
        <input value={this.state.input1} onChange={this.inputOne}/>
        {!this.state.info1 && this.state.input1 && (<h4>please enter a valid zipcode</h4>)}
        {this.state.info1 && (<LocationData info={this.state.info1}/>)}
        <br />
        <label>Enter zip code 2: </label>
        <input value={this.state.input2} onChange={this.inputTwo}/>
        {!this.state.info2 && this.state.input2 && (<h4>please enter a valid zipcode</h4>)}
        {this.state.info2 && (<LocationData info={this.state.info2} />)}
        {this.state.info1 && this.state.info2 && (
          <Distance 
            location1={this.state.info1}
            location2={this.state.info2}
          />
        )}
      </div>
    )
  }
}

export default App;
