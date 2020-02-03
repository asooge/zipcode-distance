import React from 'react'
import './App.css'
import zipcodes from './csvjson.json'
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

  inputOne = (event) => {
    console.log('input1 working')
    const input1 = event.target.value
    this.setState({ input1 })
    const zip1 = parseInt(input1).toString()
    this.setState({ zip1 })
    console.log(zipcodes[zip1])
    this.setState({ info1: zipcodes[zip1] })
  }

  inputTwo = (event) => {
    console.log('input1 working')
    const input2 = event.target.value
    this.setState({ input2 })
    const zip2 = parseInt(input2).toString()
    this.setState({ zip2 })
    console.log(zipcodes[zip2])
    this.setState({ info2: zipcodes[zip2] })
  }

  componentDidMount() {
    console.log('app loaded')
    console.log(zipcodes['6333'])
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
