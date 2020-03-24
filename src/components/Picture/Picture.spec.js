import React from 'react'
import { shallow } from 'enzyme'
import Picture from './Picture'

describe('Picture', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Picture />)
  })

  describe('.render', () => {
    it('should render a <div />', () => {
      expect(wrapper.find('.picture-div')).toBeDefined()
      expect(wrapper.find('.picture-div').length).toEqual(1)
    })
  })
})
