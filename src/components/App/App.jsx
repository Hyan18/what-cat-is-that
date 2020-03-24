import React, { Component } from 'react'
import Picture from '../Picture/Picture'

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {

    return (
      <div className="app-div">
        <Picture />
      </div>
    )
  }
}

export default App
