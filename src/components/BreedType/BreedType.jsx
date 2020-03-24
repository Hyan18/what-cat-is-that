import React from 'react'
import PropTypes from 'prop-types'

function BreedType(props) {
  const { type } = props

  return (
    <div className="breedtype-div">
      {type}
    </div>
  )
}

export default BreedType

BreedType.propTypes = {
  type: PropTypes.string.isRequired
}