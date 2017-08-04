/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Row from './index'

describe('Row Component', () => {
  test('Row Passes the snapshot', () => {
    const component = renderer.create(<Row />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
