/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import A from './index'

describe('A Component', () => {
  test('A Passes the snapshot', () => {
    const component = renderer.create(<A />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
