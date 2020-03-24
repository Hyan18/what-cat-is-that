import React from 'react'
import { shallow } from 'enzyme'
import Picture from './Picture'
import axios from 'axios'

jest.mock('axios');
axios.get.mockImplementation(() => {
  return Promise.resolve({
    data: [ { id: "sphy", name: "Sphynx" } ]
  })
})

describe('Picture', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Picture />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('.render', () => {
    it('should render a <div />', () => {
      expect(wrapper.find('.picture-div')).toBeDefined()
      expect(wrapper.find('.picture-div').length).toEqual(1)
    })
  })

  it('should request a random image from TheCatApi', () => {
    expect(axios.get.mock.calls[0][0]).toEqual('https://api.thecatapi.com/v1/images/search')
  })
})
