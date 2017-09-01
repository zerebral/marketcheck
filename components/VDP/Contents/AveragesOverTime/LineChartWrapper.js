import styled from 'styled-components'

const Component = styled.div`
  position: relative;

  .recharts-default-legend {
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .recharts-legend-item {
    display: flex !important;
    align-items: center;
  }

  .recharts-line {
    stroke-width: 4;
  }
`

export default Component
