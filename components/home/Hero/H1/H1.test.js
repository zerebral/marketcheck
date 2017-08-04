/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import H1 from './index'

describe('H1 Component', () => {
  test('H1 Passes shallow snapshot', () => {
    const wrapper = shallow(<H1>Hello World</H1>)
    expect(wrapper).toMatchSnapshot()
  })
})
