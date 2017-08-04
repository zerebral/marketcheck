/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { breakpoints, grid } from '%/styles'
import { em } from 'polished'
import Column from '../index'

import 'jest-styled-components'

const percentageCreator = num => `${(num / grid.columns) * 100}%`

describe('Column Component', () => {
  test('Column Passes the snapshot', () => {
    const component = renderer.create(<Column />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Responsive column widths and offsets', () => {
    const component = renderer.create(
      <Column
        phablet={{ offset: 3 }}
        laptop={{ cols: 11, offset: 2 }}
        desktop={{ cols: 10 }} />
    )
    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('width', percentageCreator(10), { media: `(min-width:${em(breakpoints.desktop)})` })
    expect(tree).toHaveStyleRule('width', percentageCreator(11), { media: `(min-width:${em(breakpoints.laptop)})` })
    expect(tree).toHaveStyleRule('margin-left', percentageCreator(3), { media: `(min-width:${em(breakpoints.phablet)})` })
    expect(tree).toHaveStyleRule('margin-left', percentageCreator(2), { media: `(min-width:${em(breakpoints.laptop)})` })
  })
})
