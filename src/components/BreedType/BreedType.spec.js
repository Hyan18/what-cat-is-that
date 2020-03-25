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

  it('should not display the breed by default', () => {
    expect(wrapper.text()).not.toContain("test_name")
  })

  it('should have a button to show the breed', () => {
    expect(wrapper.find('.toggle-show-breed').length).toEqual(1)
  })

  it('should display the breed after clicking show', () => {
    let button = wrapper.find('.toggle-show-breed')

    button.simulate('click')
    button = wrapper.find('.toggle-show-breed')
    
    expect(button.text()).toContain("Hide Breed")
    expect(wrapper.text()).toContain("test_name")
  })

  it('should hide the breed after clicking the button again', () => {
    let button = wrapper.find('.toggle-show-breed')
    button.simulate('click')
    button.simulate('click')
    button = wrapper.find('.toggle-show-breed')

    expect(button.text()).toContain("Show Breed")
    expect(wrapper.text()).not.toContain("test_name")
  })

  describe('toggleShowBreed', () => {
    it('should show the breed when toggled once', () => {
      wrapper.instance().toggleShowBreed()

      expect(wrapper.text()).toContain("test_name")
    })

    it('should hide the breed when toggled twice', () => {
      wrapper.instance().toggleShowBreed()
      wrapper.instance().toggleShowBreed()

      expect(wrapper.text()).not.toContain("test_name")
    })
  })

  describe('componentDidUpdate', () => {
    it('should hide the breed', () => { 
      wrapper.setProps({ type: "new_test_name" })
      expect(wrapper.text()).not.toContain("new_test_name")
    })
  })
})
