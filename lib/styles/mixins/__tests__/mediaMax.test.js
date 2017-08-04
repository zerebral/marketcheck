/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import styled from 'styled-components'
import 'jest-styled-components'
import { breakpoints } from '%/styles'
import { em } from 'polished'

import mediaMax from '../mediaMax'

const Container = styled.div`
  font-size: 2em;
  ${mediaMax.laptop`padding: 0 20px;`}
  ${mediaMax.desktop`color: red;`}
`

describe('Media Mixin', () => {
  test('Renders proper desktop styles', () => {
    const component = renderer.create(<Container />)
    const tree = component.toJSON()
    const width = em(breakpoints.desktop)
    expect(tree).toHaveStyleRule('color', 'red', { media: `(max-width:${width})` })
  })
  test('Renders proper laptop styles', () => {
    const component = renderer.create(<Container />)
    const tree = component.toJSON()
    const width = em(breakpoints.laptop)
    expect(tree).toHaveStyleRule('padding', '0 20px', { media: `(max-width:${width})` })
  })
})
