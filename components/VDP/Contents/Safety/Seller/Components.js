import styled from 'styled-components'
import { colors } from '%/styles'

export const Seller = styled.div`
  margin-bottom: 40px;
`

export const External = ({ width = 10.15, ...rest }) =>
  <svg width={width} height={width} viewBox='0 0 10.16 10.15' {...rest} >
    <path d='M9.34,10.15H0V.81H4.64v1H1V9.15H8.34V5.54h1ZM5.79,5.06l-.71-.71L8.44,1H7.09V0h3.07V3h-1V1.7Z' fill='currentColor' />
  </svg>

export const Name = styled.a`
  font-size: 18px;
  line-height: 21.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.softblue};
  margin-bottom: 20px;

  svg {
    margin-left: 10px;
  }
`

export const Dot = ({ width = 3, fill = 'currentColor', ...rest }) =>
  <svg width={width} height={width} viewBox='0 0 10 10' {...rest} fill={fill} >
    <circle cx='50%' cy='50%' r='5' />
  </svg>

export const Location = styled.h6`
  font-size: 14px;
  line-height: 16.8px;
  color: #232a35;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  svg {
    opacity: 0.46;
    margin: 0 8px;
  }
`

export const LocText = styled.span`
  opacity: ${props => props.faded ? '0.46' : '0.72'};
`
