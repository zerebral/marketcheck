import { breakpoints } from '%/styles'
import { em } from 'polished'
import { css } from 'styled-components'

/**
 * Easy breakpoint mixin mobile first
 *
 * @returns {Object}
 */
const mediaMin = Object.keys(breakpoints).reduce((accumulator, label) => {
  const emSize = em(breakpoints[label])
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export default mediaMin
