import styled from 'styled-components'
import { currency, number } from '%/format'
import { colors } from '%/styles'
import Arrow from './caret.svg'

const miles = num => `${number(num)} mi`

const StatCol = styled.div`
  margin-right: 20px;
`

const StatNumber = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 2px;
`

const StatPill = styled.span`
  display: flex;
  align-items: center;
  background-color: ${props => props.gain ? colors.green : colors.red};
  padding: 5px 8px;
  border-radius: 4px;

  svg {
    width: 7px;
    height: 4px;
    margin-left: 5px;
    ${props => !props.gain && `
    transform: rotate(180deg);
    transform-origin: center;
    `}
  }
`
const PillNumber = styled.span`
  font-size: 12px;
  color: ${colors.white};
  display: block;
`

export default ({
  money,
  gain,
  noPill,
  price,
  carMiles
}) =>
  <StatCol>
    <StatNumber>{money ? currency(price) : miles(carMiles)}</StatNumber>
    {!noPill &&
      <StatPill gain={gain}>
        <PillNumber>{money ? currency(956) : miles(1456)}</PillNumber>
        <Arrow />
      </StatPill>
    }
  </StatCol>
