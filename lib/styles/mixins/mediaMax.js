import { breakpoints } from '%/styles'
import { em } from 'polished'
import { css } from 'styled-components'

/**
 * Easy breakpoint mixin desktop first
 *
 * @returns {Object}
 */
const mediaMax = Object.keys(breakpoints).reduce((accumulator, label) => {
  const emSize = em(breakpoints[label])
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export default mediaMax
