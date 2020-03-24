import React, { Component } from 'react'

class Picture extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {

    return (
      <div className="picture-div">
        <Picture />
      </div>
    )
  }
}

export default Picture