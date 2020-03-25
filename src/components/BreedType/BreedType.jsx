import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BreedType extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isHidden: true
    }

    this.toggleShowBreed = this.toggleShowBreed.bind(this)
  }

  toggleShowBreed() {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden
    }))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      this.setState({
        isHidden: true
      })
    }
  }

  render() {
    const { type } = this.props
    const { isHidden } = this.state

    return (
      <div className="breedtype-div">
        <div className="breedText">
          { isHidden ? 'Can you guess the breed?' : type }
        </div>
        <button className="toggle-show-breed" onClick={this.toggleShowBreed}>
          { isHidden ? 'Show Breed' : 'Hide Breed' }
        </button>
      </div>
    )
  }
}

export default BreedType

BreedType.propTypes = {
  type: PropTypes.string.isRequired
}