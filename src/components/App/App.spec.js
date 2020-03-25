import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import axios from 'axios'

jest.mock('axios');
const test_cat = { id: "test_id", name: "test_name" }
const test_cat_1 = { id: "abys", name: "Abyssinian"}
const test_cat_2 = { id: "toyg", name: "Toyger" }
const listOfBreeds = [ test_cat, test_cat_1, test_cat_2 ]
axios.get.mockImplementation(() => {
  return Promise.resolve({
    data: listOfBreeds
  })
})

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render a <div />', () => {
    expect(wrapper.find('.app-div')).toBeDefined()
    expect(wrapper.find('.app-div').length).toEqual(1)
  })
  
  it('should render a picture', () => {
    const picture = wrapper.find("Picture")

    expect(picture.length).toEqual(1)
  })

  it('should render the breed', () => {
    const breedType = wrapper.find("BreedType")

    expect(breedType.length).toEqual(1)
  })

  it('should request a list of breeds from TheCatApi', () => {
    expect(axios.get.mock.calls[0][0]).toEqual('https://api.thecatapi.com/v1/breeds')
  })

  it('should pass the random breed name to the breedType component', () => {
    const breedType = wrapper.find("BreedType")
    const breedNames = listOfBreeds.map(breed => breed.name)

    expect(breedNames).toContain(breedType.prop('type'))
  })

  it('should pass the random breed id to the Picture component', () => {
    const picture = wrapper.find("Picture")
    const breedIDs = listOfBreeds.map(breed => breed.id)

    expect(breedIDs).toContain(picture.prop('breedID'))
  })

  it('should have a button to see a new cat', () => {
    const button = wrapper.find(".new-cat-button")

    expect(button.length).toEqual(1)
  })

  it('should call getCat when new cat is clicked', () => {
    wrapper.instance().getCat = jest.fn()
    const button = wrapper.find(".new-cat-button")
    button.simulate('click')

    expect(wrapper.instance().getCat).toHaveBeenCalledWith(listOfBreeds)
  })
})
