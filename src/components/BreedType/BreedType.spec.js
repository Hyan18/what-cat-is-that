import React from 'react'
import { shallow } from 'enzyme'
import BreedType from './BreedType'

describe('BreedType', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<BreedType type={"test_name"}/>)
  })

  it('should render a <div />', () => {
    expect(wrapper.find('.breedtype-div')).toBeDefined()
    expect(wrapper.find('.breedtype-div').length).toEqual(1)
  })

  it('should display the breed', () => {
    expect(wrapper.text()).toContain("test_name")
  })
})