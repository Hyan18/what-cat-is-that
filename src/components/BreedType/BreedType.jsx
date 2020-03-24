import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BreedType extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { type } = this.props

    return (
      <div className="breedtype-div">
        {type}
      </div>
    )
  }
}

export default BreedType

BreedType.propTypes = {
  type: PropTypes.string.isRequired
}