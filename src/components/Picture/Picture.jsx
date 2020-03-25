import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

class Picture extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      cat: {}
    }
  }

  componentDidMount() {
    this.requestCat(this.props.breedID)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.breedID !== this.props.breedID) {
      this.setState({
        isLoaded: false
      })
  
      this.requestCat(this.props.breedID)
    }
  }

  requestCat(breed) {
    axios.get(
      'https://api.thecatapi.com/v1/images/search',
      {
        headers: { 'x-api-key': process.env.REACT_APP_CAT_API_KEY },
        breed_id: breed
     })
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            cat: response.data[0]
          })
        })
  }
  
  render() {
    const { isLoaded, cat } = this.state

    if (!isLoaded) {
      return (
        <div className="picture-div">
          <span>Loading...</span>
        </div>
      )
    } else {
      return (
        <div className="picture-div">
          <img className="cat-picture" alt={cat.id} src={cat.url}/>
        </div>
      )
    }
  }
}

export default Picture

Picture.propTypes = {
  breedID: PropTypes.string.isRequired
}