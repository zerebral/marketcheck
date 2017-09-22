import styled from 'styled-components'
import { percentage } from '%/styles/mixins'
import { rgba } from 'polished'

const Drops = styled.div`
  text-align: center;
  margin-bottom: 5px;
`

const DropRow = styled.div`
  display: flex;
  margin: 0 -5px;
`

const DropCol = styled.div`
  padding: 0 5px;
  max-width: ${percentage(1, 3)};
  flex-basis: ${percentage(1, 3)};
`

const DataText = styled.p`
  font-size: 14px;
  line-height: 2;
`

const SmallText = styled.span`
  font-size: 8px;
  ${props => props.top && `vertical-align: top;`}
`

const DataLabel = styled.p`
  color: ${rgba('#1f2630', 0.56)};
  font-size: 14px;
`

export default () =>
  <Drops>
    <DropRow>
      <DropCol>
        <DataText>
          56<SmallText top >%</SmallText> / 64<SmallText top >%</SmallText>
        </DataText>
        <DataLabel>City/Hwy</DataLabel>
      </DropCol>
      <DropCol>
        <DataText>16k</DataText>
        <DataLabel>Annual Miles</DataLabel>
      </DropCol>
      <DropCol>
        <DataText>
          36<SmallText>mpg</SmallText>
        </DataText>
        <DataLabel>City/Hwy</DataLabel>
      </DropCol>
    </DropRow>
  </Drops>
