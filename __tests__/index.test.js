import React from 'react'
import renderer from 'react-test-renderer'

import Index from '../pages/index.js'

describe('Snapshot test passes', () => {
  it('Passes the snapshot', () => {
    const component = renderer.create(<Index />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
