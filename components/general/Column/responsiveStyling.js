import { mediaMin } from '%/styles/mixins'
import { grid, bpKeysArray } from '%/styles'

const percentageCreator = (num, cssKey) => {
  return num
    ? `${cssKey}: ${(num / grid.columns) * 100}%;`
    : undefined
}

// Magic!
const responsiveStyling = props => {
  const usableBreaks = bpKeysArray.filter(bp => props[bp]) // ['laptop']
  return usableBreaks.map(bp => mediaMin[bp]`
    ${percentageCreator(props[bp]['cols'], 'width')}
    ${percentageCreator(props[bp]['offset'], 'margin-left')}
  `)
}

export default responsiveStyling
