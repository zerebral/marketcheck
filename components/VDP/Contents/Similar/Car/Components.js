import styled from 'styled-components'
import { colors } from '%/styles'

export const Wrapper = styled.div`
  padding: 25px 0;

  & + & {
    border-top: 1px solid #ccc;
  }
`

export const Car = styled.div`
  position: relative;
`

export const NewBadge = styled.span`
  color: ${colors.green};
  display: inline-block;
  font-size: 13px;
  line-height: 15.6px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid currentColor;
  text-align: center;
  margin-bottom: 10px;
`

export const Features = styled.div`
  display: flex;
  align-items: center;
  color: #9baab2;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 10px;

    [fill] {
      fill: currentColor;
      stroke: currentColor;
    }

    [stroke] {
      fill: currentColor;
      stroke: currentColor;
    }
  }
`

export const Name = styled.h3`
  font-size: 18px;
  line-height: 21.6px;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled(Flex)`
  svg {
    min-width: 13px;
    height: 15px;
    margin-left: 7px;
  }
`
