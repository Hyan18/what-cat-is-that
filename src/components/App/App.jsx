import React, { Component } from 'react'
import Picture from '../Picture/Picture'
import BreedType from '../BreedType/BreedType'

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {

    return (
      <div className="app-div">
        <Picture />
        <BreedType />
      </div>
    )
  }
}

export default App
