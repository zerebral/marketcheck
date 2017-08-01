import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import App from '../pages/index.js'

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(<App />)
    expect(app.dive().find('h1').text()).toEqual('Hello World!')
  })
})

describe('with jest-styled-components', () => {
  const component = renderer.create(<App />)
  const tree = component.toJSON()
  it('works with styled-components', () => {
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', 'red')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
