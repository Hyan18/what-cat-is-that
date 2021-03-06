import React, { Component } from 'react'
import Picture from '../Picture/Picture'
import BreedType from '../BreedType/BreedType'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      breed: {},
    }
  }

  componentDidMount() {
    axios.get('https://api.thecatapi.com/v1/breeds', { headers: { 'x-api-key': process.env.REACT_APP_CAT_API_KEY } })
      .then(
        (response) => {
          this.getCat(response.data)
        })
  }

  getCat(listOfBreeds) {
    let randomBreed = listOfBreeds[getRandomInt(listOfBreeds.length)]
    this.setState({
      isLoaded: true,
      breed: { id: randomBreed.id, name: randomBreed.name },
      listOfBreeds: listOfBreeds
    })
  }
  
  render() {
    const { isLoaded, breed, listOfBreeds } = this.state
    

    if (!isLoaded) {
      return (
        <div className="app-div">
          <span>Loading...</span>
        </div>
      )
    } else {
      return (
        <div className="app-div">
          <h2>What Cat Is That?</h2>
          <Picture breedID={breed.id} />
          <button className="new-cat-button" onClick={() => this.getCat(listOfBreeds)}>
            New Cat
          </button>
          <BreedType type={breed.name}/>
        </div>
      )
    }
  }
}

export default App

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
