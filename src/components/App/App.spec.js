import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  describe('.render', () => {
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
  })
})
